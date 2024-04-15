import {
  Avatar,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { FaShare } from "react-icons/fa";
import { MdBookmarkAdd, MdReportProblem } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { BsClipboard2Fill } from "react-icons/bs";

const Comment = ({ reply, lastReply }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={reply.userProfilePic} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              {reply.username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              {/* <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text> */}
              <Text _hover={{ color: "#FF9900" }}>
                <Menu>
                  <MenuButton>
                    <BsThreeDots />
                  </MenuButton>
                  <Portal>
                    <MenuList>
                      <MenuItem>
                        <Flex gap={2} alignItems={"center"}>
                          <FaReply />
                          Reply
                        </Flex>
                      </MenuItem>
                      <MenuItem>
                        <Flex gap={2} alignItems={"center"}>
                          <BsClipboard2Fill />
                          Copy
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
          <Text>{reply.text}</Text>
          {/* <Actions liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"gray.light"}>
            {likes + (liked ? 1 : 0)} likes
          </Text> */}
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;
