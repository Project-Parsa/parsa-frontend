import React from "react";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll, Variants } from "framer-motion";
import waitlist from "@zootools/waitlist-js";
import { LOGO_PARTICLES_OPTIONS } from "../constants";
import useParallax from "../hooks/useParallax";
import ParticlesAnimation from "./ParticlesAnimation";

const textVariants: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.9,
    },
  },
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.7,
    },
  },
};

const ParallaxScroll = (): React.ReactElement => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 300);

  const waitlistCode = process.env.REACT_APP_WAITLIST_CODE ?? "";

  // handler
  const clickPopup = (event: React.MouseEvent) => {
    event.preventDefault();

    // Pass your waitlist ID
    waitlist.openPopup(waitlistCode);
  };

  return (
    <Flex
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.6 }}
      variants={variants}
      pos="relative"
      alignItems="center"
      justifyContent="center"
      gap={2}
      scrollSnapAlign="center"
      style={{ perspective: "500px" }}
      h="100vh"
      w="full"
      overflow="hidden"
    >
      <Box
        as={motion.div}
        style={{ y }}
        pos="absolute"
        left={{ base: "40px", md: "60px", lg: "140px" }}
        w={{ base: "300px", md: "400px", lg: "800px"}}
        right={{
          base: "calc(90% + 10px)",
          md: "calc(70% + 10px)",
          lg: "calc(30% + 10px)",
        }}
        top="calc(30% + 20px)"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={textVariants}
      >
        <VStack spacing="35px" alignItems="self-start">
          <Heading
            fontSize={{ base: "20px", md: "25px", lg: "70px" }}
            lineHeight={{ base: "25px", md: "35px", lg: "100px" }}
          >
            <span style={{ color: "#EB2127" }}>supercharge</span> web3 customer
            acquisition & <br />
            <span style={{ color: "#EB2127" }}>experience.</span>
          </Heading>
          <Text color="gray.300" fontSize={{ base: "15px", md: "25px", lg: "30px"}}>
            Parsa saves 100s of developer and operational hours for protocols
            allowing them to focus on core product
          </Text>
          <Button
            onClick={clickPopup}
            mt="30px"
            variant="solid"
            bg="#EB2127"
            size="lg"
          >
            Join the Waitlist
          </Button>
        </VStack>
      </Box>
      <Box
        as={motion.div}
        ref={ref}
        w="230px"
        h="50px"
        pos="relative"
        pb="800px"
      >
        <ParticlesAnimation
          id="tsparticles-logo"
          options={LOGO_PARTICLES_OPTIONS}
          w="1000px"
          h="1000px"
          style={{ position: "absolute" }}
        />
      </Box>
    </Flex>
  );
};

export default ParallaxScroll;
