import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scroll from "react-scroll";
import { PageRoute } from "../constants";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PageRoute.DEFAULT) Scroll.animateScroll.scrollToTop();
  }, [pathname]);

  return null;
}
