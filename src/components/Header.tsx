import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PageRoute } from "../constants";
import NavBar from "./NavBar";

const Header = (): React.ReactElement => {
  return (
    <Box
      px={{ base: "5px", sm: "20px", md: "36px" }}
      pt="10px"
      h="90px"
      w="full"
      pos="fixed"
      zIndex={2}
    >
      <Flex alignItems="center" justifyContent="space-between" h="full">
        <Link to={PageRoute.DEFAULT}>
          <Heading
            fontSize={{ base: "20px", md: "30px", lg: "45px" }}
            pb="20px"
            pl="50px"
          >
            parsa
          </Heading>
        </Link>
        <Box w="35%" mx="auto" display={{ base: "none", lg: "flex" }}>
          <NavBar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
