// import Image from "next/image";
import { Fragment } from "react";
import WelcomePage from "./components/pages/WelcomePage";
import ProfilePage from "./components/pages/ProfilePage";
import WorksPage from "./components/pages/WorksPage";

const Home = () => {
  return (
    <Fragment>
      <main
        className="w-full h-screen overflow-y-auto relative flex flex-col items-center justify-start bg-fixed"
        style={{ backgroundImage: "url(/white_back.jpg)" }}
      >
        <WelcomePage />
        <ProfilePage />
        <WorksPage />
      </main>
    </Fragment>
  );
};

export default Home;
