import React, { useRef, useState } from "react";
import "./Blitzcard.css";
import avatarSrc from "../../../public/profile.jpg";
import BlitzFooter from "../BlitzFooter/BlitzFooter";
import BlitzHeader from "../BlitzHeader/BlitzHeader";
import BlitzActions from "../BlitzActions";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import { BsFillSendFill, BsThreeDotsVertical } from "react-icons/bs";
import { GrSend } from "react-icons/gr";

function Blitzcard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <BlitzHeader />
      <div className="overlay">
        <Grid
          templateColumns="3fr 1fr" // Adjust the width of the left column here
          gap={6}
          p={6}
          m="auto"
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <GridItem colSpan={1} alignSelf="flex-end">
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
              bottom={"2%"}
              position={"absolute"}
            >
              <Flex
                gap={3}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"row"}
                zIndex={60}
              >
                <Avatar src={avatarSrc} />
                <Text>Sumit</Text>
              </Flex>
              <Button zIndex={60}>Follow</Button>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex
              p={4}
              flexDirection="column"
              mt={"350px"}
              fontSize={"x-large"}
              gap={10}
              ml={"240px"}
            >
              <FaHeart />
              <FaRegComment />
              <GrSend />

              <BsThreeDotsVertical />
            </Flex>
          </GridItem>
        </Grid>
      </div>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="/public/blitz.mp4"
        loop
      />
    </div>
  );
}

export default Blitzcard;
