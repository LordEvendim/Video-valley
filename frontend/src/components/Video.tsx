import { Box, Button, Flex, propNames, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import { BiUpvote } from "react-icons/bi";
import { VideoDetails } from "../stores/useVideos";
import { ethers } from "ethers";

interface VideoProps {
  url: string;
  id: string;
  videoDetails: VideoDetails;
  setFocusedId: React.Dispatch<React.SetStateAction<string>>;
  openVoteModal: () => any;
}

export const Video: React.FC<VideoProps> = ({
  url,
  id,
  videoDetails,
  setFocusedId,
  openVoteModal,
}) => {
  const videoJsOptions = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 500,
    height: 281,
    controls: true,
    techOrder: ["theta_hlsjs", "html5"],
    sources: [
      {
        src: url,
        type: "application/vnd.apple.mpegurl",
        label: "auto",
      },
    ],
    theta_hlsjs: {
      videoId: id,
      walletUrl: "wss://api-wallet-service.thetatoken.org/theta/ws",
      onWalletAccessToken: null,
      hlsOpts: null,
    },
  };

  return (
    <Box
      color={"white"}
      background={"whiteAlpha.200"}
      width={"500px"}
      borderRadius={"10px"}
      overflow={"hidden"}
    >
      <VideoPlayer {...videoJsOptions} />
      <Box p={"10px"} pb={"20px"}>
        <Flex>
          <Box fontSize={"lg"} fontWeight={"semibold"}>
            {videoDetails.title}
          </Box>
          <Spacer />
          <Text>{ethers.utils.formatEther(videoDetails.votes)} TFuel</Text>
        </Flex>
        <Box fontSize={"sm"} mt={"5px"}>
          {videoDetails.description}
        </Box>
        <Button
          bg={"blue.300"}
          mt={"15px"}
          w={"120px"}
          onClick={() => {
            setFocusedId(videoDetails.id);
            openVoteModal();
          }}
        >
          <Text mr={"10px"}>Vote</Text>
          <BiUpvote />
        </Button>
      </Box>
    </Box>
  );
};
