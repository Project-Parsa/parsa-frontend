import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import backendToolsIcon from "../../assets/add.png";
import uxToolsIcon from "../../assets/user-experience.png";
import webWalletIcon from "../../assets/digital-wallet.png";

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

const cardVariants = (leftBorderColor: string): Variants => ({
  offscreen: { opacity: 0, y: 140 },
  onscreen: { opacity: 1, y: 0 },
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  fullView: {
    backgroundColor: "#1c1917",
    borderTopWidth: 3,
    borderLeftWidth: 0,
    borderTopColor: leftBorderColor,
    transition: { duration: 0.2 },
  },
});

const CARDS: CardProps[] = [
  {
    title: "Cloud Wallet SaaS",
    icon: webWalletIcon,
    desc: "Login Module and Cloud Web Wallet to simulate Auth0 style easy to login and create wallet flow",
    leftBorderColor: "#EB2127",
  },
  {
    title: "UX Tools SaaS",
    icon: uxToolsIcon,
    desc: "Parsa UX Tools is a set of SaaS products that work seamlessly with the CWW login module",
    leftBorderColor: "#fca311",
  },
  {
    title: "Backend Tools SaaS",
    icon: backendToolsIcon,
    desc: "Spin up custom APIs to learn more about your users and collect analytics about your protocol",
    leftBorderColor: "#7928CA",
  },
];

const ServiceCards = (): React.ReactElement => {
  return (
    <Grid
      variants={cardGroupVariants}
      as={motion.div}
      alignItems="center"
      gap={8}
      w="full"
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      {CARDS.map((card) => (
        <GridItem w="100%" key={card.title} zIndex={2}>
          <Card {...card} />
        </GridItem>
      ))}
    </Grid>
  );
};

interface CardProps {
  title: string;
  icon: string;
  desc: string;
  leftBorderColor: string;
}

const Card = ({
  title,
  icon,
  desc,
  leftBorderColor,
}: CardProps): React.ReactElement => {
  return (
    <Box id="core" as={motion.div} variants={cardVariants(leftBorderColor)}>
      <Box
        as={motion.div}
        variants={cardVariants(leftBorderColor)}
        whileInView="fullView"
        initial="initial"
        viewport={{ once: false, amount: 0.4 }}
        shadow="2xl"
        p="20px"
        bg="#1c1917"
        borderRadius="lg"
        borderLeft={`2px solid ${leftBorderColor}`}
        maxW="600px"
        m="auto"
        h="400px"
      >
        <Box h="100px" textAlign="center">
          <Heading fontSize={{ base: "20px", lg: "30px" }}>{title}</Heading>
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
    </Box>
  );
};

export default ServiceCards;
