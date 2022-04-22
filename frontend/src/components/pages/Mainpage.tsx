import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { useSeasonData } from "../../stores/useSeasonData";

interface MainpageProps {}

export const Mainpage: React.FC<MainpageProps> = () => {
  const navigate = useNavigate();

  const seasonEnding = useSeasonData((state) => state.seasonEnding);

  return (
    <Container w="full" centerContent>
      <Box h={160} w="full" />
      <Box w="container.xl">
        <Heading size="3xl" lineHeight="1.4" color={"gray.100"}>
          Vote for your favorite videos and win prizes on{" "}
          <Button
            variant="link"
            size="4xl"
            textColor="blue.300"
            fontWeight="bold"
          >
            Theta Network
          </Button>
        </Heading>
        <Box h={6} w="full" />
        <Button
          w="60"
          h="14"
          onClick={() => {
            navigate("/videos");
          }}
        >
          Try now!
        </Button>
        <Box h={"40"} />
        <Center>
          <Flex direction={"column"} color={"gray.100"}>
            <Text mb={"-8"}>Next season</Text>
            {seasonEnding ? (
              <Countdown
                className="text-[7rem] font-thin"
                date={seasonEnding.toNumber() * 1000}
              />
            ) : (
              "-"
            )}
          </Flex>
        </Center>
      </Box>
    </Container>
  );
};
