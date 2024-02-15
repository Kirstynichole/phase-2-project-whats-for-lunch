import { useRouteError } from "react-router";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen items-center px-4" style={{ paddingTop: "100px" }}>
      <div className="border-2 rounded-2xl bg-white bg-opacity-60 text-pink-800 border-pink-600 mx-auto p-5 w-1/2">
        <h1 className="text-5xl w-full text-center py-3 items-center font-header">
          Yikes!
        </h1>
        <p className="text-xs text-center mb-2">Something went wrong.</p>
        <p className="mb-3 justify-center flex">
          <code>
            {error.status}: {error.statusText}
          </code>
        </p>
        <div className="justify-center flex">
        <button className="hover:bg-opacity-100 w-fit px-3 py-2 my-2 flex items-center rounded-md text-white bg-opacity-75 bg-pink-800">
          <NavLink to="/">Take me home</NavLink>
          <IoIosArrowForward />
        </button>
        </div>
      </div>
    </div>
  );
}
