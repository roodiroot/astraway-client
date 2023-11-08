import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='w-full h-full '>
      <div className='w-full max-w-2xl mx-auto'>
        <h1>Oops!</h1>
        <p>Извините, такой страницы не существует!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
