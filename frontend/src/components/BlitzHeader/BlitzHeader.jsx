import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Flex } from "@chakra-ui/react";
import { PiMusicNoteSimpleFill } from "react-icons/pi";

function BlitzHeader() {
  return (
    <Flex
      className="videoHeader"
      position={"absolute"}
      top={5}
      justifyContent={"center"}
      ml={5}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={"120px"}
        fontSize={"large"}
        fontWeight={"bold"}
      >
        <IoChevronBackOutline />
        <h2>Blitz</h2>
        <PiMusicNoteSimpleFill />
      </Flex>
    </Flex>
  );
}

export default BlitzHeader;
