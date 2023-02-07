import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS, PageRoute } from "../constants";
import Scroll from "react-scroll";

const NavBar = (): React.ReactElement => {
  const scroller = Scroll.scroller;
  const onClickHandler = React.useCallback(() => {
    scroller.scrollTo("anchor", {
      duration: 1000,
      delay: 100,
      offset: -150,
      smooth: "easeInOutQuint",
    });
  }, [scroller]);

  const location = useLocation();

  return (
    <Flex alignItems="center" gridGap={{ base: "5px", xl: "25px" }}>
      {NAV_ITEMS.map(({ route, name }) => {
        const isActive = location.pathname === route;
        return (
          // TODO-implement pages
          route === PageRoute.DEFAULT ? (
            <Link style={{ marginTop: "10px" }} to={route} key={name}>
              <LinkChild isActive={isActive} name={name} />
            </Link>
          ) : (
            <Button
              as={Link}
              to={route}
              key={name}
              variant="unstyled"
              onClick={onClickHandler}
            >
              <LinkChild isActive={isActive} name={name} />
            </Button>
          )
        );
      })}
    </Flex>
  );
};

const LinkChild = ({ isActive, name }: { isActive: boolean; name: string }) => {
  return (
    <Flex
      p="8px"
      alignItems="center"
      justifyContent="center"
      h="50px"
      pos="relative"
    >
      <Text
        color={isActive ? "gray.100" : "gray.300"}
        fontWeight={700}
        fontSize={{ base: "14px", xl: "20px" }}
        lineHeight="18px"
        textAlign="center"
        _hover={{ color: "gray.200" }}
      >
        {name}
      </Text>
      {isActive && (
        <Box
          as={motion.div}
          pos="absolute"
          height="2px"
          bgColor="red.500"
          bottom={-1}
          left={0}
          right={0}
          layoutId="nav-underline"
        />
      )}
    </Flex>
  );
};

export default NavBar;
