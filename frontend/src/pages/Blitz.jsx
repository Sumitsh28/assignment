import React from "react";
import "./Blitz.css";
import Blitzcard from "../components/Blitzcard/Blitzcard";
import { Container, Box, Flex } from "@chakra-ui/react";

function Blitz() {
  return (
    <Flex className="app__videos" ml={"100px"}>
      <Blitzcard />
    </Flex>
  );
}

export default Blitz;
