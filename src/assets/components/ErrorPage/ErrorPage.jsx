import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page"  className="text-[#FCB100]  flex justify-center mt-[20vh]  items-center  flex-col">
      <h1 className="text-5xl py-4 font-black">Oops!</h1>
      <p  className="text-4xl py-3" > Sorry, an unexpected error has occurred.</p>
      <p  className="text-3xl py-3" >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}