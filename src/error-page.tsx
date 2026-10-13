import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import usePopap from "./hooks/usePopap";
import Button from "./components/ui/button";
import Container from "./components/utils/container";

export default function ErrorPage() {
  const error = useRouteError();
  const { onOpen } = usePopap();
  const status = isRouteErrorResponse(error) ? error.status : 404;

  return (
    <main>
      <Container className="min-h-[68vh] flex items-center justify-center">
        <section className="mx-auto flex max-w-[680px] flex-col items-center px-4 py-16 text-center sm:py-24">
          <p className="font-medium text-accent text-6xl sm:text-7xl md:text-8xl">{status}</p>
          <h1 className="mt-5 font-medium text-fiolet text-3xl sm:text-4xl">
            Страница не найдена
          </h1>
          <p className="mt-4 max-w-[460px] text-lite text-base sm:text-lg">
            Такой страницы нет или адрес был изменён.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Link
              to="/"
              className="px-8 py-[18px] whitespace-nowrap rounded-lg font-medium h-[58px] min-w-[200px] max-w-[200px] relative transition cursor-pointer bg-accent text-white hover:bg-accent/80"
            >
              <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                На главную
              </span>
            </Link>
            <Button onClick={onOpen} variant="outline">
              Консультация
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
