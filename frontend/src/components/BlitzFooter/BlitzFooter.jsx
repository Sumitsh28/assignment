import React from "react";
import avatarSrc from "../../../public/profile.jpg";
import { FaMusic } from "react-icons/fa6";
import Ticker from "react-ticker";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { BsHeart, BsSendFill, BsThreeDotsVertical } from "react-icons/bs";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

function BlitzFooter() {
  return (
    <>
      {/* <Grid position={"absolute"} templateColumns="3fr 1fr" gap={6}>
        <GridItem colSpan={1} alignSelf="flex-end">
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={10}
            bottom={"10%"}
            marginBottom={"20px"}
            position={"absolute"}
          >
            <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
              <Avatar src={avatarSrc} />
              <Text>Sumit</Text>
            </Flex>
            <Button>Follow</Button>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} position={"absolute"} textColor={"#0000"}>
          <Text textColor={"#000000"}>Hello</Text>
          <Text textColor={"#0000"}>Hello</Text>
          <Text textColor={"#0000"}>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </GridItem>
      </Grid> */}
    </>
  );
}

export default BlitzFooter;
