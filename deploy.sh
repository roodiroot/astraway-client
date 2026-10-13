#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

# FTP-аккаунт Beget уже открывается в нужном public_html.
deploy_url="${DEPLOY_FTP_URL:-ftp://klimovls.beget.tech/}"

npm run build
cd build

uploads=()
while IFS= read -r -d '' file; do
  uploads+=(--upload-file "$file")
  uploads+=("${deploy_url%/}/${file#./}")
done < <(find . -type f -print0)

curl --globoff \
  --netrc-file "$script_dir/../.netrc" \
  --ftp-create-dirs \
  --fail-early \
  --fail \
  --show-error \
  "${uploads[@]}"

echo "Сайт загружен!"
