import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import backendToolsIcon from "../assets/add.png";
import uxToolsIcon from "../assets/user-experience.png";
import webWalletIcon from "../assets/digital-wallet.png";

const cardGroupVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
      staggerDirection: 1,
    },
  },
};

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 140 },
  onscreen: { opacity: 1, y: 0 },
};

const CARDS: CardProps[] = [
  {
    title: "Cloud Wallet SaaS",
    icon: webWalletIcon,
    desc: "Login Module and Cloud Web Wallet to simulate Auth0 style easy to login and create wallet flow",
  },
  {
    title: "UX Tools SaaS",
    icon: uxToolsIcon,
    desc: "Parsa UX Tools is a set of SaaS products that work seamlessly with the CWW login module",
  },
  {
    title: "Backend Tools SaaS",
    icon: backendToolsIcon,
    desc: "Spin up custom APIs to learn more about your users and collect analytics about your protocol",
  },
];

const ServiceCards = (): React.ReactElement => {
  return (
    <Grid
      variants={cardGroupVariants}
      as={motion.div}
      alignItems="center"
      gap={20}
      w="full"
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      {CARDS.map(({ title, icon, desc }) => (
        <GridItem w="100%">
          <Card title={title} icon={icon} key={title} desc={desc} />
        </GridItem>
      ))}
    </Grid>
  );
};

interface CardProps {
  title: string;
  icon: string;
  desc: string;
}

const Card = ({ title, icon, desc }: CardProps): React.ReactElement => {
  return (
    <Box
      id="core"
      shadow="2xl"
      p="20px"
			w="100%"
      maxW="600px"
      h="400px"
      bg="#161a1d"
      borderRadius="lg"
      as={motion.div}
      variants={cardVariants}
    >
      <Box h="100px">
        <Heading fontSize={{ base: "20px", lg: "35px"}}>{title}</Heading>
      </Box>
      <VStack mt="20px" alignItems="center" spacing="40px" w="full">
        <Box boxSize="80px">
          <Image src={icon} alt={`${title}-icon`} />
        </Box>
        <Box px="20px">
          <Text color="gray.400" textAlign="justify">
            {desc}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServiceCards;
