// import React from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/shared/Layout";
import { NairaSign } from "../assets/svg/nairaSign.tsx";
import { TbCurrencyNaira } from "react-icons/tb";

const Budget = () => {
  return (
    <Layout>
      <Box pt="20px" pb="30px">
        <Heading
          as="h1"
          fontSize={{
            base: "28px",
            md: "36px",
          }}
          mb="28px"
        >
          Budget
        </Heading>

        <Flex gap="8px" mb="12px" alignItems="center">
          <Flex
            justify="center"
            align="center"
            w="20px"
            h="20px"
            borderRadius="100%"
            bg="brand.light"
          >
            <NairaSign fill="#0466C8" />
          </Flex>
          <Text color="secondary.200">Monthly Budget</Text>
        </Flex>

        <Box
          fontSize={{
            base: "28px",
            md: "36px",
          }}
          bg="#fff"
          boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
          borderRadius="10px"
          fontWeight="700"
          px="20px"
          py="8px"
          letterSpacing="-1.2px"
        >
          <Flex align="center">
            <TbCurrencyNaira size="30px" />
            <Text ml="-6px">120,000</Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Budget;
