import {
  Avatar,
  Box,
  Button,
  Divider,
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
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";
import { MdBookmarkAdd, MdReportProblem, MdStars } from "react-icons/md";
import { FaShare } from "react-icons/fa";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/profile.jpg" size={"md"} name="Sumit" />
          <Flex w={"full"} gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              sumit.sh28
            </Text>
            <Text color={"#ff9900"} fontSize={"large"}>
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
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <Text _hover={{ color: "#FF9900" }}>
            <Menu>
              <MenuButton>
                <BsThreeDots />
              </MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem>
                    <Flex gap={2} alignItems={"center"}>
                      <FaShare />
                      Share
                    </Flex>
                  </MenuItem>
                  <MenuItem>
                    <Flex gap={2} alignItems={"center"}>
                      <MdBookmarkAdd />
                      Save
                    </Flex>
                  </MenuItem>
                  <MenuItem>
                    <Flex gap={2} alignItems={"center"}>
                      <MdReportProblem />
                      Report
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Text>
        </Flex>
      </Flex>

      <Text my={3}>First Trip</Text>

      <Box borderRadius={6} overflow={"hidden"}>
        <Image src={"/trip.jpg"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comment
        comment="Looks really good!"
        createdAt="2d"
        likes={100}
        username="johndoe"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="Amazing!"
        createdAt="1d"
        likes={21}
        username="janedoe"
        userAvatar="https://bit.ly/code-beast"
      />
      <Comment
        comment="Looks good!"
        createdAt="2d"
        likes={42}
        username="sallydoe"
        userAvatar="https://bit.ly/sage-adebayo"
      />
    </>
  );
};

export default PostPage;
