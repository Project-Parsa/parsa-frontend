import {
  Button,
  Flex,
  VStack,
  Heading,
  Divider,
  Input,
  Text,
  createIcon,
  Box,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { ReactElement } from "react";
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoBitcoin } from "react-icons/io";

export const MetamaskIcon = createIcon({
  displayName: "Metamask Logo",
  viewBox: "0 0 318.6 318.6",
  path: (
    <>
      <style type="text/css">
        {
          ".st0{fill:#E2761B;stroke:#E2761B;stroke-linecap:round;stroke-linejoin:round;} .st1{fill:#E4761B;stroke:#E4761B;stroke-linecap:round;stroke-linejoin:round;} .st2{fill:#D7C1B3;stroke:#D7C1B3;stroke-linecap:round;stroke-linejoin:round;} .st3{fill:#233447;stroke:#233447;stroke-linecap:round;stroke-linejoin:round;} .st4{fill:#CD6116;stroke:#CD6116;stroke-linecap:round;stroke-linejoin:round;} .st5{fill:#E4751F;stroke:#E4751F;stroke-linecap:round;stroke-linejoin:round;} .st6{fill:#F6851B;stroke:#F6851B;stroke-linecap:round;stroke-linejoin:round;} .st7{fill:#C0AD9E;stroke:#C0AD9E;stroke-linecap:round;stroke-linejoin:round;} .st8{fill:#161616;stroke:#161616;stroke-linecap:round;stroke-linejoin:round;} .st9{fill:#763D16;stroke:#763D16;stroke-linecap:round;stroke-linejoin:round;}"
        }
      </style>
      <polygon className="st0" points="274.1,35.5 174.6,109.4 193,65.8 " />
      <g>
        <polygon className="st1" points="44.4,35.5 143.1,110.1 125.6,65.8 	" />
        <polygon
          className="st1"
          points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7 	"
        />
        <polygon
          className="st1"
          points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8 	"
        />
        <polygon
          className="st1"
          points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1 	"
        />
        <polygon
          className="st1"
          points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1 	"
        />
        <polygon
          className="st1"
          points="106.8,247.4 140.6,230.9 111.4,208.1 	"
        />
        <polygon
          className="st1"
          points="177.9,230.9 211.8,247.4 207.1,208.1 	"
        />
      </g>
      <g>
        <polygon
          className="st2"
          points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3 	"
        />
        <polygon
          className="st2"
          points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9 	"
        />
      </g>
      <polygon className="st3" points="138.8,193.5 110.6,185.2 130.5,176.1 " />
      <polygon className="st3" points="179.7,193.5 188,176.1 208,185.2 " />
      <g>
        <polygon className="st4" points="106.8,247.4 111.6,206.8 80.3,207.7 	" />
        <polygon className="st4" points="207,206.8 211.8,247.4 238.3,207.7 	" />
        <polygon
          className="st4"
          points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2 	"
        />
        <polygon
          className="st4"
          points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1 	"
        />
      </g>
      <g>
        <polygon className="st5" points="87.8,162.1 111.4,208.1 110.6,185.2 	" />
        <polygon
          className="st5"
          points="208.1,185.2 207.1,208.1 230.8,162.1 	"
        />
        <polygon
          className="st5"
          points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7 	"
        />
        <polygon
          className="st5"
          points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5 	"
        />
      </g>
      <polygon
        className="st6"
        points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 "
      />
      <polygon
        className="st6"
        points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 "
      />
      <polygon
        className="st7"
        points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4
    140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 "
      />
      <polygon
        className="st8"
        points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 "
      />
      <g>
        <polygon
          className="st9"
          points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4
      281.8,129.1 275.6,124.3 283.6,118.2 	"
        />
        <polygon
          className="st9"
          points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2
      140.6,106.9 44.4,35.5 	"
        />
      </g>
      <polygon
        className="st6"
        points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 "
      />
      <polygon
        className="st6"
        points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 "
      />
      <polygon
        className="st6"
        points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6
    173.1,227.6 173.3,182.8 "
      />
    </>
  ),
});

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 20,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const CWW = (): ReactElement => {
  return (
    <Box
      as={motion.div}
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: "some" }}
      px={{ base: "25px", md: "50px" }}
      py={{ base: "20px", lg: "80px" }}
      maxW="1650px"
      alignSelf="self-start"
      w="full"
      zIndex={2}
    >
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        alignItems={{ base: "center", xl: "flex-start" }}
        gap="100px"
        justifyContent="space-between"
      >
        <VStack
          spacing={{ base: "40px", md: "80px" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Heading
            textAlign={{ base: "center", xl: "start" }}
            fontSize={{ base: "28px", md: "35px", lg: "50px" }}
          >
            <span style={{ color: "#EB2127" }}>enhance</span> your UI/UX with{" "}
            <br />
            <span style={{ color: "#EB2127" }}> plug-and-play</span> modules and
            services.
          </Heading>
          <Box maxW="700px">
            <Text
              textAlign={{ base: "center", xl: "start" }}
              fontSize={{ base: "18px", md: "22px", lg: "28px" }}
              color="gray.400"
            >
              With our Cloud Web Wallet, users enjoy seamless wallet creation
              and the ability to use social logins. <br />
              <br /> Say goodbye to browser extensions!
            </Text>
          </Box>
          <Box w="90%" maxW="600px">
            <Button
              variant="solid"
              bgGradient="linear(to-l, #7928CA, #EB2127)"
              size="lg"
              w="full"
            >
              Try the demo
            </Button>
          </Box>
        </VStack>
        <Box
          w="full"
          maxW="400px"
          h="550px"
          bgColor="#1c1917"
          borderRadius="40px"
          px="10px"
          py="30px"
          border="2px solid"
          borderColor="#7928CA"
          boxShadow="0px 0px 20px 5px #7928CA"
        >
          <VStack spacing="40px" alignItems="center">
            <VStack w="full" spacing={4}>
              <Flex alignItems="center" gap="10px" color="gray.400">
                <IoLogoBitcoin fontSize="40px" />
                <Heading fontSize={{ base: "23px", lg: "28px" }}>
                  Your App
                </Heading>
              </Flex>
              <Divider />
            </VStack>
            <VStack spacing={5} w="full">
              <VStack spacing={3} w="full" maxW="90%">
                <Text
                  fontWeight={500}
                  color="gray.100"
                  fontSize={{ base: "20px", lg: "24px" }}
                >
                  Sign in
                </Text>
                <Input
                  variant="filled"
                  borderRadius="20px"
                  h="45px"
                  placeholder="satoshi@bitcoin.com"
                />
                <Button
                  variant="solid"
                  bgGradient="linear(to-l, #7928CA, #EB2127)"
                  size="lg"
                  borderRadius="20px"
                  w="full"
                >
                  Login
                </Button>
              </VStack>
              <Text color="gray.600" fontSize="14px">
                or continue with
              </Text>
              <Flex
                w="95%"
                alignItems="center"
                fontSize="40px"
                justifyContent="space-between"
              >
                <MetamaskIcon />
                <FcGoogle />
                <FaFacebook color="#3b5998" />
                <FaTwitter color="#1da1f2" />
                <FaDiscord color="#7289da" />
              </Flex>
            </VStack>
            <Divider />
            <Text>
              Powered by{" "}
              <Text
                as="span"
                bgGradient="linear(to-l, #EB2127, #fca311)"
                bgClip="text"
              >
                parsa.
              </Text>
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CWW;
