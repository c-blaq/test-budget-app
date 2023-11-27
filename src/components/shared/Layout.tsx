import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDir="column" bgColor="#FCFCFC" h="100vh">
      <Box as="main" flex="1" px="30px" color="primary.base">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
