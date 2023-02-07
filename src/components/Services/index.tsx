import { Container, VStack } from "@chakra-ui/react";
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

const Services = (): React.ReactElement => {
  return (
    <VStack
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: "some" }}
      variants={cardContainerVariants}
      spacing="80px"
    >
      <Container alignSelf="center" w="full" maxW="1200px">
        <ServiceCards />
      </Container>
    </VStack>
  );
};

export default Services;
