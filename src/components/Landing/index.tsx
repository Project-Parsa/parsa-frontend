import { Container } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import WelcomeCta from "./WelcomeCta";

const textVariants: Variants = {
  hidden: {
    x: 50,
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
    <Container
      as={motion.div}
      variants={textVariants}
      initial="hidden"
      animate="show"
      pt="220px"
      maxW="900px"
    >
      <WelcomeCta />
    </Container>
  );
};

export default Landing;
