import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import React, { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDir="column" bgColor="#FCFCFC" h="100vh">
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
