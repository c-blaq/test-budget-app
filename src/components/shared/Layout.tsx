import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDir="column" bgColor="#FCFCFC" h="100vh">
      <Box
        as="main"
        flex="1"
        w="100%"
        px="30px"
        maxW="1024px !important"
        pl={{
          base: "30px",
          md: "220px",
        }}
        mx="auto"
        color="primary.base"
        pb="87px"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
