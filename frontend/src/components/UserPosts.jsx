import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { FaChevronDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";

const UserPosts = ({ likes, replies, postImg, postTitle }) => {
  const [liked, setLiked] = useState(false);

  const postMenu = (e) => {
    e.preventDefault();
  };
  return (
    <Link to={"/sumit/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="Sumit" src="/profile.jpg" />
          <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size={"xs"}
              name="Harsh"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Harsh"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Harsh"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} gap={2} alignItems={"center"}>
              <Text fontSize={"medium"} fontWeight={"bold"}>
                sumit.sh28
              </Text>
              <Text color={"#ff9900"} fontSize={"large"} onClick={postMenu}>
                <Tooltip
                  label="Premium User"
                  bg="#ff990046"
                  color="white"
                  placement="right"
                >
                  <Text>
                    <MdStars />
                  </Text>
                </Tooltip>
              </Text>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <Text onClick={postMenu}>
                <Menu placement="bottom">
                  <MenuButton _hover={{ color: "#FF9900" }}>
                    <BsThreeDots />
                  </MenuButton>

                  <MenuList bg="#000000" minWidth="60px">
                    <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
                      <Flex gap={2} alignItems={"center"}>
                        <FaShare />
                        Share
                      </Flex>
                    </MenuItem>
                    <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
                      <Flex gap={2} alignItems={"center"}>
                        <MdBookmarkAdd />
                        Save
                      </Flex>
                    </MenuItem>
                    <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
                      <Flex gap={2} alignItems={"center"}>
                        <MdReportProblem />
                        Report
                      </Flex>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Text>
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>

          {postImg && (
            <Box borderRadius={6} overflow={"hidden"}>
              <Image src="/trip.jpg" w={"full"} />
            </Box>
          )}

          <Actions liked={liked} setLiked={setLiked} />
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes + (liked ? 1 : 0)} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;
