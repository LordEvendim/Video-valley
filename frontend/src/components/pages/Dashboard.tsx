import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Heading,
  Input,
  SimpleGrid,
  VStack,
  Textarea,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { mintModalStyle } from "../../modals/addModalStyle";
import { useVideos } from "../../stores/useVideos";
import { Video } from "../Video";
import Modal from "react-modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useContracts } from "../../stores/useContracts";
import { ethers } from "ethers";
import { voteModalStyle } from "../../modals/voteModalStyle";

import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useSeasonData } from "../../stores/useSeasonData";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const videos = useVideos((state) => state.videos);
  const fetchVideos = useVideos((state) => state.fetchVideos);
  const manager = useContracts((state) => state.manager);

  const currentSeason = useSeasonData((state) => state.currentSeason);
  const [activeSeason, setActiveSeason] = useState<number>(currentSeason);
  const [isPushing, setIsPushing] = useState<boolean>(false);

  useEffect(() => {
    fetchVideos(activeSeason);
  }, [fetchVideos, manager, activeSeason, currentSeason]);

  // Add modal
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoDescription, setVideoDescription] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const handleAdd = async () => {
    try {
      setIsAdding(true);
      if (!manager) {
        throw new Error("Failed to initialize manager contract");
      }

      console.log(videoTitle);
      console.log(videoDescription);
      console.log(videoId);
      console.log(videoUrl);

      const result = await manager.addVideo(
        videoTitle,
        videoDescription,
        videoId,
        videoUrl,
        { value: ethers.utils.parseEther("1") }
      );
      console.log(result);
      setIsAdding(false);
      setIsAddModalOpen(false);
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      setIsAdding(false);
      console.log(error);
    }
  };

  // Vote modal
  const [isVoting, setIsVoting] = useState<boolean>(false);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState<boolean>(false);
  const [voteValue, setVoteValue] = useState<string>("");
  const [focusedId, setFocusedId] = useState<string>("");
  const openVoteModal = () => {
    setIsVoteModalOpen(true);
  };
  const handleVote = async () => {
    try {
      setIsVoting(true);
      if (!manager) {
        throw new Error("Failed to initialize manager contract");
      }

      const result = await manager.vote(focusedId, {
        value: ethers.utils.parseEther(voteValue),
      });
      console.log(result);
      setIsVoting(false);
      setIsVoteModalOpen(false);
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      setIsVoting(false);
      console.log(error);
    }
  };

  // withdraw
  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false);
  const handleWithdraw = async () => {
    try {
      if (!manager) {
        throw new Error("Failed to initalize manager contract");
      }
      setIsWithdrawing(true);

      const result = await manager.withdraw(activeSeason);
      toast.success("Funds have been withdrawn");

      setIsWithdrawing(false);
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      setIsWithdrawing(false);
      console.log(error);
    }
  };

  const pushSeason = async () => {
    try {
      if (!manager) {
        throw new Error("Failed to initalize manager contract");
      }
      setIsPushing(true);

      const result = await manager.pushSeason();
      toast.success("Welcome to the new season");

      setIsPushing(false);
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      setIsPushing(false);
      console.log(error);
    }
  };

  return (
    <Container w={"full"} centerContent mb={"50px"}>
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        style={mintModalStyle}
        contentLabel="Example Modal"
      >
        <Heading
          fontWeight={"semibold"}
          fontSize={"3xl"}
          textColor={"gray.600"}
          mb={"20px"}
        >
          Add video to the valley
        </Heading>
        <VStack spacing={"20px"} align={"start"}>
          <Box>
            <Text>Video title</Text>
            <Flex w={"full"}>
              <Input
                width={"450px"}
                flex={"1"}
                mr={"10px"}
                mt={"6px"}
                onChange={(event) => setVideoTitle(event.target.value)}
              ></Input>
            </Flex>
          </Box>
          <Box>
            <Text>Description</Text>
            <Flex w={"full"}>
              <Textarea
                width={"450px"}
                flex={"1"}
                mr={"10px"}
                mt={"6px"}
                onChange={(event) => setVideoDescription(event.target.value)}
              ></Textarea>
            </Flex>
          </Box>
          <Box>
            <Text>Video ID</Text>
            <Flex w={"full"}>
              <Input
                width={"450px"}
                flex={"1"}
                mr={"10px"}
                mt={"6px"}
                onChange={(event) => setVideoId(event.target.value)}
              ></Input>
            </Flex>
          </Box>
          <Box>
            <Text>Video URL</Text>
            <Flex w={"full"}>
              <Input
                width={"450px"}
                flex={"1"}
                mr={"10px"}
                mt={"6px"}
                onChange={(event) => setVideoUrl(event.target.value)}
              ></Input>
            </Flex>
          </Box>
          <Button
            bg={"blue.300"}
            color={"white"}
            width={"150px"}
            p={"25px"}
            w={"200px"}
            onClick={() => handleAdd()}
            isLoading={isAdding}
          >
            Add
          </Button>
        </VStack>

        <Text mt={"20px"} px={"10px"} color={"gray.500"}>
          <AiOutlineInfoCircle />
          <Text mt={"5px"}>
            To list your video on the valley you have to pay the current fee.
          </Text>
        </Text>
      </Modal>
      <Modal
        isOpen={isVoteModalOpen}
        onRequestClose={() => setIsVoteModalOpen(false)}
        style={voteModalStyle}
        contentLabel="Example Modal"
      >
        <Heading
          fontWeight={"semibold"}
          fontSize={"3xl"}
          textColor={"gray.600"}
          mb={"20px"}
        >
          Vote
        </Heading>
        <VStack spacing={"10px"} align={"start"}>
          <Text>Vote value</Text>
          <Flex w={"full"}>
            <Input
              flex={"1"}
              mr={"10px"}
              onChange={(event) => setVoteValue(event.target.value)}
            ></Input>
            <Button
              width={"150px"}
              p={"15px"}
              onClick={() => handleVote()}
              isLoading={isVoting}
            >
              Vote
            </Button>
          </Flex>
        </VStack>

        <Text mt={"20px"} px={"10px"} color={"gray.500"}>
          <AiOutlineInfoCircle />
          <Text mt={"5px"}>
            After this transaction your funds will be locked until the end of
            the season. You will gain a token reward for that period equivalent
            to locked amount.
          </Text>
        </Text>
      </Modal>
      <Box h={"10"} />
      <Box w={"1500px"}>
        <Flex>
          <Heading mb={"4"} color={"gray.200"}>
            Valley
          </Heading>
          <Button
            bg={"blue.300"}
            color={"white"}
            onClick={() => {
              setIsAddModalOpen(true);
            }}
            ml={"30px"}
            mt={"5px"}
          >
            + add
          </Button>
          {currentSeason > activeSeason && (
            <>
              <Button
                bg={"blue.300"}
                color={"white"}
                onClick={() => {
                  handleWithdraw();
                }}
                ml={"10px"}
                mt={"5px"}
                isLoading={isWithdrawing}
              >
                withdraw
              </Button>
            </>
          )}

          <Spacer />
          <Button
            bg={"blue.300"}
            color={"white"}
            mr={"10px"}
            onClick={() => {
              if (activeSeason === 0) return;
              setActiveSeason(activeSeason - 1);
            }}
          >
            <AiFillCaretLeft />
          </Button>
          <Button
            bg={"blue.300"}
            color={"white"}
            mr={"10px"}
            onClick={() => pushSeason()}
            isLoading={isPushing}
          >
            Season {activeSeason}
          </Button>
          <Button
            bg={"blue.300"}
            color={"white"}
            onClick={() => {
              if (activeSeason === currentSeason) return;
              setActiveSeason(activeSeason + 1);
            }}
          >
            <AiFillCaretRight />
          </Button>
        </Flex>
        <Box h={"2"} />
        <SimpleGrid columns={3} spacing={10}>
          {videos?.map((element) => (
            <Video
              id={element.id}
              url={element.url}
              videoDetails={element}
              setFocusedId={setFocusedId}
              openVoteModal={openVoteModal}
            ></Video>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};
