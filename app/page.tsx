// import Image from "next/image";
import { Fragment } from "react";
import WelcomePage from "./Welcome";
import ProfilePage from "./Aboutme";
import Works from "./Works";

const Home = () => {
  return (
    <Fragment>
      <main className="w-full  relative flex flex-col items-center justify-start overflow-y-auto">
        <WelcomePage />
        <ProfilePage />
        <Works />
      </main>
    </Fragment>
  );
};

export default Home;
