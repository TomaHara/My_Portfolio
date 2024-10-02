import Link from "next/link";
import Profile from "./Profile";

const Aboutme = () => {
  return (
    <section className="w-full h-svh shrink-0 sm:h-screen overflow-hidden flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="sm:text-5xl text-4xl font-oswald text-center text-black [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        About me
      </h1>
      <Profile />
      <div className="w-11/12 sm:w-3/4 2xl:w-3/5 flex justify-end">
        {" "}
        <Link
          href="/AboutMe"
          className="p-2 sm:text-2xl text-xl text-black font-oswald rounded-lg hover:bg-blue-300 trantition duration-500"
        >
          Read more
        </Link>
      </div>
    </section>
  );
};

export default Aboutme;
