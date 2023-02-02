import React from "react";
import { Box } from "@chakra-ui/react";
import ParallaxScroll from "../components/ParallaxScroll";
import LandingAnimation from "../components/LandingAnimation";
import Header from "../components/Header";
import ParticlesAnimation from "../components/ParticlesAnimation";
import { BG_PARTICLES_OPTIONS, SERVICES_PARTICLES_OPTIONS } from "../constants";
import { useInView } from "framer-motion";
import Scroll from "react-scroll";

const LandingPage = (): React.ReactElement => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: "all" });
  const Element = Scroll.Element;

  const [showMain, setShowMain] = React.useState(false);

  React.useEffect(() => {
    if (!inView) setShowMain(false);
  }, [inView]);

  return (
    <Box minH="100vh" overflow="hidden">
      {showMain && inView ? (
        <ParticlesAnimation
          id="tsparticles-bg"
          options={SERVICES_PARTICLES_OPTIONS}
          style={{ zIndex: 0, position: "fixed" }}
        />
      ) : (
        <ParticlesAnimation
          id="tsparticles-bg"
          options={BG_PARTICLES_OPTIONS}
          style={{ zIndex: 0, position: "fixed" }}
        />
      )}
      <Header />
      <ParallaxScroll />
      <Element name="anchor">
        <LandingAnimation
          handleAnimationCompleted={() => setShowMain(true)}
          ref={ref}
        />
      </Element>
    </Box>
  );
};

export default LandingPage;
