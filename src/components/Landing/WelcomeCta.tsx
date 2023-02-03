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
    [waitlist, waitlistCode]
  );
  return (
    <VStack spacing="35px" alignItems="self-start" w="full"> 
      <Heading
        fontSize={{ base: "20px", md: "25px", lg: "40px", xl: "70px" }}
        lineHeight={{ base: "25px", md: "35px", lg: "55px", xl: "100px" }}
      >
        <span style={{ color: "#EB2127" }}>supercharge</span> web3 customer
        acquisition & <br />
        <span style={{ color: "#EB2127" }}>experience.</span>
      </Heading>
      <Text
        color="gray.300"
        fontSize={{ base: "15px", md: "25px", lg: "30px" }}
      >
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
  );
};

export default WelcomeCta;
