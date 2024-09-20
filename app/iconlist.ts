import CharmMenuHamburger from "./components/icons/CharmMenuHamburger";
import RadixIconsGithubLogo from "./components/icons/RadixIconsGithubLogo";
import RiTwitterXFill from "./components/icons/RiTwitterXFill";
import MaterialSymbolsMail from "./components/icons/MaterialSymbolsMail";
import MaterialSymbolsPerson from "./components/icons/MaterialSymbolsPerson";
// import IonCloseRound from "./components/icons/IonCloseRound";
import MaterialSymbolsClose from "./components/icons/MaterialSymbolsClose";
import MapClimbing from "./components/icons/MapClimbing";
import MaterialSymbolsHome from "./components/icons/MaterialSymbolsHome";
import UilApps from "./components/icons/UilApps";
import { SVGProps } from "react";

interface iconLint {
  humburger: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  github: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  twitter: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  mail: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  home: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  works: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  person: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  activities: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  close: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const icons: iconLint = {
  humburger: CharmMenuHamburger,
  github: RadixIconsGithubLogo,
  twitter: RiTwitterXFill,
  mail: MaterialSymbolsMail,
  home: MaterialSymbolsHome,
  works: UilApps,
  person: MaterialSymbolsPerson,
  activities: MapClimbing,
  close: MaterialSymbolsClose,
};

export type { iconLint };
export default icons;
