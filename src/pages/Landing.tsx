import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import ParticlesAnimation from "../components/ParticlesAnimation";
import { BG_PARTICLES_OPTIONS } from "../constants";
import Scroll from "react-scroll";
import Landing from "../components/Landing";
import Services from "../components/Services";
import { motion, useInView, Variants } from "framer-motion";
import Partners from "../components/Partners";
import CWW from "../components/CWW";

const variants: Variants = {
  dark: {
    backgroundColor: "#1A202C",
    transition: { duration: 0.3 },
  },
  darker: {
    backgroundColor: "#000",
    transition: { duration: 0.5, delay: 0.1 },
  },
};

const LandingPage = (): React.ReactElement => {
  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);
  const Element = Scroll.Element;

  const inView = useInView(scrollRef, { amount: "some" });

  return (
    <Box
      as={motion.div}
      variants={variants}
      initial="dark"
      animate={inView ? "darker" : "dark"}
      minH="100vh"
      bgColor="#1A202C"
      overflow="hidden"
    >
      {!inView && (
        <ParticlesAnimation
          id="tsparticles-bg"
          options={BG_PARTICLES_OPTIONS}
          style={{ position: "fixed", zIndex: 0 }}
        />
      )}
      <Header />
      <Box h="90vh">
        <Landing />
      </Box>
      <Element name="anchor" ref={ref}>
        <Services />
      </Element>
      <Box ref={scrollRef}>
        <Box pt="50px">
          <CWW />
        </Box>
        <Box pt="150px" minH="80vh">
          <Partners />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
