import globeImg from "../../assets/globe.jpeg";
import InputWithButton from "./InputWithButton";
import LinkButton from "./LinkButton";

/* This example requires Tailwind CSS v2.0+ */
export default function Splash() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={globeImg} alt="" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-fuchsia-700 rounded-3xl ml-5 mr-5"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-5xl sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-left text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Journal of <br />
          Decentralized Work
        </h1>
        <p className="mt-6 text-2xl text-left text-indigo-100 mb-8">
          We are a new generation of researchers building the world's first decentralized community-reviewed publication
          protocol for the social sciences.
        </p>
        <div className="flex -mb-10">
          <InputWithButton />
          <LinkButton
            to="/submit"
            className="inline-flex px-3 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Submit Article
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
