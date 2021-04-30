// import {
//   HomePage,
//   PersonalDetailsPage,
//   }
//  from '../../pages';
import HomePage from "../../pages/HomePage";
import OptionChainPage from "../../pages/OptionChainPage";
import StraddleChartPage from "../../pages/StraddleChartPage";
import StrangleChartPage from "../../pages/StrangleChartPage";
import IronCondorPag from "../../pages/IronCondorPage";
import IronFlyChart from "../../pages/IronFlyChart";

export const RoutePaths = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/option-chain",
    component: OptionChainPage,
  },
  {
    path: "/straddle-chart",
    component: StraddleChartPage,
  },
  {
    path: "/strangle-chart",
    component: StrangleChartPage,
  },
  {
    path: "/iron-condor-chart",
    component: IronCondorPag,
  },
  {
    path: "/iron-fly-chart",
    component: IronFlyChart,
  },
];
