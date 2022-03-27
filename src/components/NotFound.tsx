import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex w-11/12 mx-auto flex-col justify-center items-center mt-24 space-y-6">
      <div className="h-10 pb-3 text-4xl text-light_blue">Page Not Found!</div>
      <div className="h-20 mb-2 text-4xl text-shadow">
        The page you're looking for can't be found.
      </div>
      <div>
        <img
          src="https://in.portal-pokemon.com/img/other/img_404.png"
          alt="Not Found"
          height="200"
          width="200"
        />
      </div>
      <Link to="/">
        <div className="my-10 w-auto p-4 h-auto mx-auto text-lg text-center py-3 cursor-pointer hover:bg-light_blue hover:text-black rounded-full border-2 border-light_blue text-shadow">
          Back to Pokedex
        </div>
      </Link>
    </div>
  );
};
