import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { ReactElement } from "react";
import { FaAmazon, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiTinder } from "react-icons/si";

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

const Partners = (): ReactElement => {
  return (
    <Container maxW="1200px">
      <VStack
        as={motion.div}
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: "some" }}
        spacing="50px"
      >
        <VStack spacing="20px" textAlign="center">
          <Heading
            fontSize={{ base: "30px", md: "35px", lg: "50px" }}
            color="#fca311"
          >
            Trusted by the world's best
          </Heading>
          <Text
            color="gray.500"
            fontSize={{ base: "18px", md: "22px", lg: "28px" }}
          >
            Built by engineers, For engineers
          </Text>
        </VStack>
        <Box maxW="800px">
          <Grid
            alignItems="center"
            color="gray.700"
            fontSize={{ base: "50px", md: "60px", lg: "90px" }}
            gap="80px"
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          >
            <GridItem>
              <FaFacebook />
            </GridItem>
            <GridItem>
              <FaAmazon />
            </GridItem>
            <GridItem>
              <FaGoogle />
            </GridItem>
            <GridItem>
              <SiTinder />
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Partners;
