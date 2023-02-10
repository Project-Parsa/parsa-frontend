import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import phone from "../assets/phone.png";

import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_CODE,
  EMAILJS_TEMPLATE_CODE,
} from "../constants";
import { motion, Variants } from "framer-motion";

const variants: { [key: string]: Variants } = {
  container: {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.09, delayChildren: 0.2 },
    },
  },
  item: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  phone: {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.8 },
    },
  },
};

const LandingV2 = (): React.ReactElement => {
  const [emailError, setEmailError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  React.useEffect(() => {
    if (
      email &&
      !/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  const sendEmail = React.useCallback(() => {
    if (!emailError && email) {
      setLoading(true);
      emailjs
        .send(
          EMAILJS_SERVICE_CODE,
          EMAILJS_TEMPLATE_CODE,
          {
            message: "Signed up for notification of Parsa Launch",
            from_email: email,
          },
          EMAILJS_PUBLIC_KEY
        )
        .then(() =>
          toast({
            status: "success",
            title: "We have received your sign-up!",
            description: "You will be notified of when we launch our service.",
          })
        )
        .catch((e) => {
          console.debug(e);
          toast({
            status: "error",
            title: "Sign-up failed.",
            description: "Please try again.",
          });
        })
        .finally(() => {
          setLoading(false);
          setEmail("");
        });
    }
  }, [email, emailError]);

  return (
    <Box
      minH="100vh"
      bg="radial-gradient(125.49999999999999% 125.49999999999999% at 48.6% 100%, #5d0404 0%, #DF1515 100%)"
      overflow="hidden"
      p={5}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "flex-start", lg: "space-between" }}
        alignItems="center"
      >
        <VStack
          as={motion.div}
          initial="initial"
          animate="animate"
          variants={variants.container}
          pl={{ base: 0, lg: "11vw" }}
          alignItems={{ base: "center", lg: "self-start" }}
          spacing={15}
        >
          <Box py="8vh" as={motion.div} variants={variants.item}>
            <Heading
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "34px", md: "43px", lg: "50px" }}
              color="whiteAlpha.700"
            >
              parsa
            </Heading>
          </Box>
          <VStack alignItems={{ base: "center", lg: "self-start" }} spacing={8}>
            <Box
              maxW={{ base: "330px", md: "600px" }}
              as={motion.div}
              variants={variants.item}
            >
              <Heading
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "40px", md: "50px", lg: "65px" }}
                color="whiteAlpha.800"
              >
                Web3 made better.
              </Heading>
            </Box>
            <Box
              maxW={{ base: "320px", md: "500px" }}
              as={motion.div}
              variants={variants.item}
            >
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "15px", md: "18px", lg: "21px" }}
                color="whiteAlpha.800"
              >
                Supercharge your dApp's customer acquisition and user experience
                with Parsa's Cloud Web Wallet and UX Tools. Sign up to be
                notified when we launch!
              </Text>
            </Box>
            <VStack
              alignItems={{ base: "center", lg: "self-start" }}
              spacing={4}
              maxW={{ base: "300px", sm: "320px", md: "420px" }}
              w="full"
            >
              <FormControl
                isInvalid={emailError}
                as={motion.div}
                variants={variants.item}
              >
                <Input
                  placeholder="Your email"
                  type="email"
                  minH="50px"
                  variant="filled"
                  bg="whiteAlpha.700"
                  color="blackAlpha.800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderRadius={8}
                  _hover={{ bg: "whiteAlpha.600" }}
                  _focus={{ borderColor: "whiteAlpha.600" }}
                  _focusVisible={{
                    border: "2px solid",
                    borderColor: emailError ? "red.300" : "whiteAlpha.600",
                  }}
                  _placeholder={{ color: "blackAlpha.500" }}
                />
                {emailError && (
                  <FormErrorMessage>
                    Not a valid email address.
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                as={motion.div}
                variants={variants.item}
                w="full"
                bg="blackAlpha.700"
                minH="50px"
                color="whiteAlpha.900"
                variant="solid"
                _hover={{
                  bg: "blackAlpha.800",
                  _disabled: { bg: "blackAlpha.700" },
                }}
                _active={{
                  bg: "blackAlpha.900",
                  _disabled: { bg: "blackAlpha.700" },
                }}
                isDisabled={emailError}
                isLoading={loading}
                onClick={sendEmail}
              >
                Get Notified
              </Button>
              <Box pt="5px" as={motion.div} variants={variants.item}>
                <Text
                  textAlign={{ base: "center", lg: "left" }}
                  whiteSpace={{ base: "normal", md: "nowrap" }}
                  color="whiteAlpha.600"
                  fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                >
                  Get notified when we launch and supercharge your dApp.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </VStack>
        <Box
          as={motion.div}
          variants={variants.phone}
          initial="initial"
          animate="animate"
          w="350px"
          pt="150px"
          m="auto"
        >
          <Image w="full" src={phone} />
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingV2;
