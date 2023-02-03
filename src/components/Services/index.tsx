import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import ServiceCards from "./ServiceCards";

const cardContainerVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { duration: 0.4, when: "beforeChildren" },
  },
};

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = (): React.ReactElement => {
  return (
    <Container
      alignSelf="center"
      w="full"
      maxW="1200px"
      minH="100vh"
      mt={{ base: "200px", lg: "350px" }}
      pt="120px"
    >
      <VStack
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        variants={cardContainerVariants}
        spacing="80px"
        pb="100px"
      >
        <Box as={motion.div} variants={textVariants}>
          <Heading
            textAlign="start"
            fontSize={{ base: "20px", md: "35px", lg: "55px" }}
            lineHeight={{ base: "25px", md: "45", lg: "65px" }}
          >
            <span style={{ color: "#EB2127" }}>enhance</span> your UI/UX with
            <span style={{ color: "#EB2127" }}> plug-and-play</span> modules and
            services.
          </Heading>
        </Box>
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
              opacity: 1,
              y: 0,
              transition: { duration: 1.4 },
            }}
          >
            <Heading fontSize={{ base: "18px", lg: "40px" }}>
              More coming soon!
            </Heading>
          </Box>
        </Center>
      </VStack>
    </Container>
  );
};

export default Services;
