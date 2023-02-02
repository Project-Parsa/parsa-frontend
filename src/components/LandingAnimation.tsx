import React from "react";
import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { motion, useInView, Variants } from "framer-motion";
import ServiceCards from "./ServiceCards";

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    y: 100,
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
};

const bgVariants: Variants = {
  offscreen: {
    background: "#1a202c",
  },
  onscreen: {
    background: "#0b090a",
    transition: { duration: 0.8, when: "afterChildren" },
  },
};

const cardContainerVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { duration: 0.6, when: "beforeChildren" },
  },
};

interface LandingAnimationProps {
  handleAnimationCompleted: () => void;
}

const LandingAnimation = React.forwardRef<
  HTMLDivElement,
  LandingAnimationProps
>(({ handleAnimationCompleted }, ref) => {
  const [showComingSoon, setShowComingSoon] = React.useState(false);
  const comingSoonRef = React.useRef(null);
  const inView = useInView(comingSoonRef, { amount: "all" });

  React.useEffect(() => {
    if (!inView) setShowComingSoon(false);
  }, [inView]);

  return (
    <Box
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.9 }}
      variants={bgVariants}
      minH="100vh"
      w="full"
      px="20px"
      pb="100px"
      zIndex={2}
      ref={ref}
      onAnimationComplete={(a: unknown) => {
        if (a === "onscreen") {
          setShowComingSoon(true);
          handleAnimationCompleted();
        }
      }}
    >
      <VStack
        ref={comingSoonRef}
        spacing={20}
        alignItems="self-start"
        justifyContent="start"
      >
        <Box
          as={motion.div}
          variants={variants}
          viewport={{ once: false, amount: "some" }}
          px="40px"
          w={{ base: "90%", lg: "70%" }}
          textAlign="start"
        >
          <Heading
            fontSize={{ base: "20px", md: "35px", lg: "55px" }}
            lineHeight={{ base: "25px", md: "45", lg: "65px" }}
          >
            <span style={{ color: "#EB2127" }}>enhance</span> your UI/UX with
            <span style={{ color: "#EB2127" }}> plug-and-play</span> modules and
            services.
          </Heading>
        </Box>
        <Container
          as={motion.div}
          viewport={{ once: false, amount: "some" }}
          variants={cardContainerVariants}
          alignSelf="center"
          w="full"
          pt="100px"
          maxW="1200px"
          zIndex={2}
        >
          <VStack spacing="80px">
            <ServiceCards />
            <Center>
              <Box
                as={motion.div}
                w="100%"
                maxW="600px"
                p="30px"
                borderRadius="3xl"
                bgColor="red"
                textAlign="center"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: showComingSoon ? 1 : 0,
                  y: 0,
                  transition: { duration: 1.4 },
                }}
              >
                <Heading>More coming soon!</Heading>
              </Box>
            </Center>
          </VStack>
        </Container>
      </VStack>
    </Box>
  );
});

export default LandingAnimation;
