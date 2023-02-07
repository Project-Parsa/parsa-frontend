import React from "react";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import waitlist from "@zootools/waitlist-js";

const WelcomeCta = (): React.ReactElement => {
  const waitlistCode =
    process.env.REACT_APP_WAITLIST_CODE ?? "pOSiYkS85c2lv1sgbeUC";

  // handler
  const clickPopup = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      // Pass your waitlist ID
      waitlist.openPopup(waitlistCode);
    },
    [waitlistCode]
  );
  return (
    <VStack
      spacing="35px"
      alignItems="center"
      textAlign="center"
      w="full"
      zIndex={2}
    >
      <Heading fontSize={{ base: "35px", lg: "60px", xl: "75px" }}>
        parsa
        <Text
          as="span"
          bgGradient="linear(to-l, #EB2127, #fca311)"
          bgClip="text"
        >
          labs
        </Text>
      </Heading>
      <Heading fontSize={{ base: "22px", lg: "28px", xl: "40px" }}>
        <span style={{ color: "#EB2127" }}>supercharge</span> web3 customer
        acquisition &<span style={{ color: "#EB2127" }}> experience.</span>
      </Heading>
      <VStack spacing="25px" maxW="450px">
        <Text
          color="gray.300"
          fontSize={{ base: "16px", lg: "20px", xl: "25px" }}
          textAlign="justify"
        >
          Parsa saves 100s of developer and operational hours for protocols
          allowing them to focus on their core product.
        </Text>
        <Button
          onClick={clickPopup}
          variant="solid"
          bgGradient="linear(to-l, #7928CA, #EB2127)"
          size="lg"
          w="full"
        >
          Join the Waitlist
        </Button>
      </VStack>
    </VStack>
  );
};

export default WelcomeCta;
