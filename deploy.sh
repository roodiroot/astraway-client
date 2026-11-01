#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

# FTP-аккаунт Beget уже открывается в нужном public_html.
deploy_url="${DEPLOY_FTP_URL:-ftp://klimovls.beget.tech/}"

npm run build
cd build

# Один процесс curl повторно использует FTP-соединение между файлами.
# Кодируем URL одним запуском Node, сохраняя исходные имена локальных файлов.
uploads=()
while IFS= read -r -d '' file && IFS= read -r -d '' encoded_path; do
  uploads+=(--upload-file "$file" "${deploy_url%/}/$encoded_path")
done < <(node <<'JS'
const fs = require('fs');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(file);
    else if (entry.isFile() && file !== './index.html') files.push(file);
  }
}
walk('.');
// Публикуем страницу после всех ресурсов.
files.push('./index.html');
for (const file of files) {
  const url = file.slice(2).split('/').map(encodeURIComponent).join('/');
  process.stdout.write(`${file}\0${url}\0`);
}
JS
)

curl --globoff \
  --netrc-file "$script_dir/../.netrc" \
  --ftp-create-dirs \
  --connect-timeout 10 \
  --max-time 120 \
  --fail-early \
  --fail \
  --show-error \
  "${uploads[@]}"

echo "Сайт загружен!"
