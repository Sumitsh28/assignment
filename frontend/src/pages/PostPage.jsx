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
  Spinner,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState, useEffect } from "react";
import Comment from "../components/Comment";
import { MdBookmarkAdd, MdReportProblem, MdStars } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import useShowToast from "../../hooks/useShowToast";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/UserAtoms";
import { DeleteIcon } from "@chakra-ui/icons";

const PostPage = () => {
  const { user, loading } = useGetUserProfile();
  const [post, setPost] = useState(null);
  const showToast = useShowToast();
  const { pid } = useParams();
  const currentUser = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`/api/posts/${pid}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPost(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };
    getPost();
  }, [showToast, pid]);

  const handleDeletePost = async () => {
    try {
      if (!window.confirm("Are you sure you want to delete this post?")) return;

      const res = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      showToast("Success", "Post deleted", "success");
      navigate(`/${user.username}`);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!post) return null;
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src={user.profilePic} size={"md"} name="Sumit" />
          <Flex w={"full"} gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {user.username}
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
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            {formatDistanceToNow(new Date(post.createdAt))} ago
          </Text>

          {currentUser?._id === user._id && (
            <DeleteIcon
              size={20}
              cursor={"pointer"}
              onClick={handleDeletePost}
            />
          )}

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
              {currentUser?._id !== user._id && (
                <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
                  <Flex gap={2} alignItems={"center"}>
                    <MdReportProblem />
                    Report
                  </Flex>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Text my={3}>{post.text}</Text>

      {post.img && (
        <Box
          borderRadius={6}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"gray.light"}
        >
          <Image src={post.img} w={"full"} />
        </Box>
      )}

      <Flex gap={3} my={3}>
        <Actions post={post} />
      </Flex>

      {/* <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex> */}
      <Divider my={4} />

      {post.replies.map((reply) => (
        <Comment
          key={reply._id}
          reply={reply}
          lastReply={reply._id === post.replies[post.replies.length - 1]._id}
        />
      ))}
    </>
  );
};

export default PostPage;
