import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import ParticlesAnimation from "../components/ParticlesAnimation";
import { BG_PARTICLES_OPTIONS } from "../constants";
import { motion, useInView, Variants } from "framer-motion";
import Scroll from "react-scroll";
import Landing from "../components/Landing";
import Services from "../components/Services";

const bgVariants: Variants = {
  dark: {
    background: "#1a202c",
  },
  darker: {
    background: "#0b090a",
    transition: { duration: 0.8, when: "afterChildren" },
  },
};

const LandingPage = (): React.ReactElement => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: "some" });
  const Element = Scroll.Element;

  return (
    <Box
      as={motion.div}
      minH="100vh"
      variants={bgVariants}
      initial="dark"
      animate={inView ? "darker" : "dark"}
    >
      <ParticlesAnimation
        id="tsparticles-bg"
        options={BG_PARTICLES_OPTIONS}
        style={{ position: "fixed", zIndex: 0 }}
      />
      <Header />
      <Box minH="100vh" >
        <Landing />
      </Box>
      <Element name="anchor" ref={ref}>
        <Services />
      </Element>
    </Box>
  );
};

export default LandingPage;
