import { lazy } from "react";

const Footer = lazy(() => import("../components/Footer.jsx"));
const Circle = lazy(() => import("../components/Circle.jsx"));
const GetInTouch = lazy(() => import("../components/GetInTouch"));
const Intro = lazy(() => import("../components/Intro.jsx"));
const Language = lazy(() => import("../components/Language.jsx"));
const Link = lazy(() => import("../components/Link.jsx"));
const MyWork = lazy(() => import("../components/MyWork.jsx"));
const Name = lazy(() => import("../components/Name.jsx"));
const Skills = lazy(() => import("../components/Skills.jsx"));
const UpdateWorkData = lazy(() => import("../components/UpdateWorkData.jsx"));
const WorkButton = lazy(() => import("../components/WorkButton.jsx"));
const ParentWork = lazy(() => import("../components/Works/ParentWork.jsx"));
const ScrollMore = lazy(() => import("../components/ScrollMore.jsx"));

export {
  Footer,
  Circle,
  GetInTouch,
  Intro,
  Language,
  Link,
  MyWork,
  Name,
  Skills,
  UpdateWorkData,
  ParentWork,
  ScrollMore,
};
