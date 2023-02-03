import { Box, Flex } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import { LOGO_PARTICLES_OPTIONS } from "../../constants";
import ParticlesAnimation from "../ParticlesAnimation";
import WelcomeCta from "./WelcomeCta";

const textVariants: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.9,
    },
  },
};

const Landing = (): React.ReactElement => {
  return (
    <Flex alignItems="center" pt="100px">
      <Box
        as={motion.div}
        variants={textVariants}
        initial="hidden"
        animate="show"
        px="100px"
        pt={{ base: "80px", lg: 0 }}
        w="full"
        zIndex={3}
      >
        <WelcomeCta />
      </Box>
      <Box
        top={{ base: "100px", lg: 0 }}
        position={{ base: "absolute", lg: "static" }}
        overflow="hidden"
        w="full"
        zIndex={2}
      >
        <ParticlesAnimation
          id="tsparticles-logo"
          options={LOGO_PARTICLES_OPTIONS}
          w="1000px"
          h="1000px"
        />
      </Box>
    </Flex>
  );
};

export default Landing;
