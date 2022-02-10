import InputWithButton from "./InputWithButton";
import LinkButton from './LinkButton';

/* This example requires Tailwind CSS v2.0+ */
export default function Splash() {
  return (
    <div className="relative bg-indigo-800 content-center">
      <div className="absolute inset-0">
        {/* <img
                    className="w-full h-full object-cover"
                    src="../public/decentralized-globe.jpg"
                    alt=""
                /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-fuchsia-700" aria-hidden="true" />
      </div>
      <div className="relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Journal of Decentralized Work
        </h1>
        <h5 className="mt-6 text-xl text-indigo-100 text-center mb-8">
          We are a new generation of researchers building the world's first decentralized community-reviewed publication
          protocol for the social sciences.
        </h5>
        <div className="flex -mb-10 justify-center">
          <InputWithButton />
          <LinkButton
            to='/submit'
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Submit Article
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
