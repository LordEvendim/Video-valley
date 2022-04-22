import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  VStack,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { VALLEY_MANAGER } from "../../constants/contracts";

interface ContractsProps {}

export const Contracts: React.FC<ContractsProps> = () => {
  return (
    <Container w={"full"} centerContent>
      <Box h={"10"} />
      <Box w={"container.xl"}>
        <Heading mb={"4"} color={"gray.100"}>
          Contracts
        </Heading>
        <Box h={"2"} />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" minH="100" bg="gray.100" rounded="md" p={4}>
            <Heading size={"sm"} color={"gray.600"} mb={"4"}>
              Smart contracts
            </Heading>
            <Box
              border={"1px"}
              borderColor={"gray.200"}
              bgColor={"white"}
              p={4}
              rounded={"md"}
            >
              <Flex>
                <Link>ValleyManager.sol</Link>
                <Spacer></Spacer>
                <Link mr={2}>{VALLEY_MANAGER}</Link>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};
