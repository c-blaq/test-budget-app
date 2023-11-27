import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { TbCurrencyNaira } from "react-icons/tb";

interface CategoryBreakdownProps {
  icon: string;
  label: string;
  currentAmount: string;
  overallAmount: string;
  progressValue: number;
  backgroundColor?: string;
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({
  icon,
  label,
  currentAmount,
  overallAmount,
  progressValue,
  backgroundColor,
}) => {
  return (
    <Flex justify="space-between" gap="4px" align="start" mb="20px">
      <Flex gap="10px" align="center" minW="130px" flex="1">
        <CircularProgress
          bg={backgroundColor || "#F4E9CD"}
          value={progressValue}
          borderRadius="100%"
          size={46}
          color="#C89104"
          trackColor="transparent"
        >
          <CircularProgressLabel
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={icon}
              alt="icon"
              w="20px"
              height="20px"
              objectFit="cover"
            />
          </CircularProgressLabel>
        </CircularProgress>

        <Box fontSize="14px">
          <Text noOfLines={2} fontWeight={600}>
            {label}
          </Text>
          <Text color="secondary.200">{progressValue}%</Text>
        </Box>
      </Flex>

      <Flex
        align="center"
        justify="end"
        fontSize="14px"
        w="130px"
        flexWrap="wrap"
      >
        <Flex>
          <TbCurrencyNaira size="20px" />
          <Text ml="-2px">{currentAmount}</Text>
        </Flex>
        <Text>/</Text>
        <Flex color="secondary.100">
          <TbCurrencyNaira size="20px" />
          <Text ml="-2px">{overallAmount}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CategoryBreakdown;
