import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { truncateAddress } from "../helpers/truncateAddress";
import { useWallet } from "../hooks/useWallet";
import { useUserData } from "../stores/useUserData";
import Logo from "../assets/videovalley2.png";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [isConnecting, connectWallet, disconnectWallet] = useWallet();
  const userAddress = useUserData((state) => state.address);

  return (
    <Box w="100%">
      <Flex mx={"auto"} w="60%" h={"120px"} py={6} alignItems="center">
        <Box>
          <Heading>
            <NavLink to={"/"}>
              <Image src={Logo} h={"70px"}></Image>
            </NavLink>
          </Heading>
        </Box>
        <Spacer />
        <HStack spacing="64px" textColor="gray.100">
          <Button variant="link" textColor="gray.100">
            <NavLink to={"/about"}>About</NavLink>
          </Button>
          <Button variant="link" textColor="gray.100">
            <NavLink to={"/contracts"}>Contracts</NavLink>
          </Button>
          <Button variant="link" textColor="gray.100">
            <NavLink to={"/videos"}>
              <Text color={"blue.300"}>Videos</Text>
            </NavLink>
          </Button>

          {useUserData.getState().isLogged ? (
            <Button variant={"outline"}>
              <HStack>
                <NavLink to={"/profile"}>
                  <Text>{truncateAddress(userAddress, 15)}</Text>
                </NavLink>
                <CloseButton onClick={disconnectWallet} size="sm" />
              </HStack>
            </Button>
          ) : (
            <Button
              textColor="gray.700"
              w={150}
              h={12}
              isLoading={isConnecting}
              onClick={connectWallet}
            >
              Connect
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
