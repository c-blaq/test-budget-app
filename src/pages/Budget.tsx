// import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  CircularProgress,
  CircularProgressLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/shared/Layout";
import { NairaSign } from "../assets/svg/nairaSign.tsx";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import CategoryBreakdown from "../components/budget/CategoryBreakdown.tsx";
import foodIcon from "../assets/svg/foodIcon.svg";
import savingsIcon from "../assets/svg/savingsIcon.svg";

const Budget = () => {
  return (
    <Layout>
      <Box
        pt={{
          base: "20px",
          md: "46px",
        }}
        pb="30px"
      >
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
          py={{
            base: "8px",
            md: "20px",
          }}
          letterSpacing="-1.2px"
        >
          <Flex align="center">
            <TbCurrencyNaira />
            <Text ml="-6px">120,000</Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Tabs
          position="relative"
          variant=""
          colorScheme="brand"
          defaultIndex={1}
        >
          <Flex justify="space-between" align="center">
            <TabList>
              <Tab pl="0" _selected={{ color: "brand.default" }}>
                Last Month
              </Tab>
              <Tab pl="0" _selected={{ color: "brand.default" }}>
                This Month
              </Tab>
            </TabList>
            <Menu>
              <MenuButton color="secondary.200" fontSize="20px">
                <BsThreeDots />
              </MenuButton>
              <MenuList>
                <MenuItem mb="9px">
                  <Flex
                    justify="center"
                    align="center"
                    w="20px"
                    h="20px"
                    borderRadius="100%"
                    bg="brand.light"
                    mr="4px"
                  >
                    <NairaSign fill="#0466C8" />
                  </Flex>
                  Expenses Overview
                </MenuItem>
                <MenuItem mb="9px">
                  <Flex
                    justify="center"
                    align="center"
                    w="20px"
                    h="20px"
                    borderRadius="100%"
                    bg="brand.light"
                    mr="4px"
                  >
                    <NairaSign fill="#0466C8" />
                  </Flex>
                  Category Overview
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <TabIndicator
            mt="-4.5px"
            height="2px"
            left="0"
            width="30px !important"
            bg="brand.default"
            borderRadius="1px"
          />

          <TabPanels>
            <TabPanel px="0" pt="30px">
              <p>Pending development</p>
            </TabPanel>
            <TabPanel px="0" pt="30px" textAlign="center">
              <Flex
                justify="center"
                align="center"
                w="150px"
                h="150px"
                mx="auto"
                borderRadius="100%"
                border={"11px solid #67A2DC"}
                position="relative"
                mb="20px"
              >
                <CircularProgress
                  value={49}
                  size={145}
                  thickness="6px"
                  color="brand.default"
                  trackColor="transparent"
                >
                  <CircularProgressLabel>49%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
              <Box>
                <Text
                  fontSize={{
                    base: "14px",
                    md: "16px",
                  }}
                  mb="8px"
                  color="secondary.200"
                >
                  Amount spent so far
                </Text>

                <Flex justify="center" color="brand.light">
                  <Flex align="center" fontSize="16px" color="brand.default">
                    <TbCurrencyNaira size="20px" />
                    <Text ml="-2px">50,000</Text>
                  </Flex>
                  <Text>/</Text>
                  <Flex align="center" fontSize="16px">
                    <TbCurrencyNaira size="20px" />
                    <Text ml="-2px">120,000</Text>
                  </Flex>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box pt="30px">
        <Heading
          as="h2"
          mb="20px"
          fontSize={{
            base: "20px",
            md: "24px",
          }}
          fontWeight="600"
        >
          Category Breakdown
        </Heading>

        <CategoryBreakdown
          label="Food and Drink"
          icon={foodIcon}
          progressValue={40}
          backgroundColor="#F4E9CD"
          currentAmount="20,000"
          overallAmount="42,000"
        />

        <CategoryBreakdown
          label="Savings"
          icon={savingsIcon}
          progressValue={25}
          backgroundColor="#b5e4c8"
          currentAmount="20,000"
          overallAmount="42,000"
        />

        <CategoryBreakdown
          label="Savings"
          icon={savingsIcon}
          progressValue={40}
          backgroundColor="#b5e4c8"
          currentAmount="20,000"
          overallAmount="42,000"
        />
      </Box>
    </Layout>
  );
};

export default Budget;
