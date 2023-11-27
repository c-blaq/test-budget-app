import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import homeIcon from "../../assets/svg/homeIcon.svg";
import reportIcon from "../../assets/svg/reportsIcon.svg";
import chatIcon from "../../assets/svg/chatIcon.svg";
import budgetIcon from "../../assets/svg/budgetIcon.svg";
import profileIcon from "../../assets/svg/profileIcon.svg";

const Footer = () => {
  const NAV_ITEMS: { label: string; href: string; icon: any }[] = [
    {
      label: "Home",
      href: "/",
      icon: homeIcon,
    },
    {
      label: "Reports",
      href: "/",
      icon: reportIcon,
    },
    {
      label: "Chat",
      href: "/",
      icon: chatIcon,
    },
    {
      label: "Budgets",
      href: "/budgets",
      icon: budgetIcon,
    },
    {
      label: "Profile",
      href: "/",
      icon: profileIcon,
    },
  ];
  return (
    <Box
      bg="#fff"
      as="footer"
      px="30px"
      display="flex"
      alignItems={{
        base: "center",
        md: "flex-start",
      }}
      boxShadow="0px -5px 20px 5px rgba(0, 0, 0, 0.04)"
      backdropFilter="blur(25px)"
      position="fixed"
      w={{ base: "100%", md: "180px", lg: "200px" }}
      h={{
        base: "87px",
        md: "100%",
      }}
      bottom={0}
      left={0}
      pt={{
        base: "0",
        md: "46px",
      }}
    >
      <Flex
        w="full"
        flexDir={{
          base: "row",
          md: "column",
        }}
        justifyContent="space-between"
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
        gap={{
          base: "0",
          md: "40px",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            as={ReactRouterLink}
            to={item.href}
            key={item.label}
            color="secondary.100"
            filter={
              window.location.pathname === item.href
                ? "sepia(100%) hue-rotate(1000deg) saturate(1800%)"
                : ""
            }
            _hover={{
              filter: "sepia(100%) hue-rotate(1000deg) saturate(1500%)",
            }}
          >
            <Flex
              flexDir={{
                base: "column",
                md: "row",
              }}
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Image src={item.icon} alt={item.label} w="24px" h="24px" />
              <Text
                fontSize={{
                  base: "12px",
                  md: "16px",
                }}
              >
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Footer;
