import {
  Flex,
  Image,
  Link,
  useColorMode,
  Avatar,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../../atoms/UserAtoms";
import { AiFillHome, AiFillNotification } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";
import authScreenAtom from "../../atoms/AuthAtoms";
import { BsBookmarksFill, BsFillChatQuoteFill } from "react-icons/bs";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { IoIosFastforward } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const [isHovered, setIsHovered] = useState(false);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [isLargerThan768] = useMediaQuery("(min-width: 987px)");
  return (
    <Flex
      mt={6}
      mb="12"
      alignItems={"center"}
      gap={{ base: 70, lg: 40 }}
      justifyContent={"space-evenly"}
    >
      {user && !isLargerThan768 && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <Avatar
              name={user.name}
              src={user.profilePic}
              size={"sm"}
              boxShadow={
                isHovered
                  ? "0 0 3px 3px #ff9900d7, 0 0 3px 3px #ff990076, 0 0 1px 1px #ff990058"
                  : "md"
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
        </Flex>
      )}
      {!user && (
        <Link
          as={RouterLink}
          onClick={() => setAuthScreen("login")}
          to={"/auth"}
        >
          Login
        </Link>
      )}
      <Image
        cursor={"pointer"}
        alt="logo"
        w={180}
        src={colorMode === "dark" ? "/l.svg" : "/light.svg"}
        onClick={toggleColorMode}
        display={"flex"}
        alignItems={"center"}
        justifyItems={"center"}
      />

      {user && !isLargerThan768 && (
        <Menu>
          <MenuButton _hover={{ color: "#FF9900" }} fontSize={"x-large"}>
            <HiOutlineMenu />
          </MenuButton>
          <MenuList bg="#000000">
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <AiFillHome size={25} />
                <Text>Home</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <BsFillChatQuoteFill size={25} />
                <Text>Chats</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <AiFillNotification size={25} />
                <Text>Notifications</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <BsBookmarksFill size={25} />
                <Text>Bookmarks</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <IoIosFastforward size={25} />
                <Text>Blitz</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <MdStars size={25} />
                <Text>Premium User</Text>
              </Flex>
            </MenuItem>
            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Flex alignItems={"center"} justifyItems={"center"} gap={3}>
                <GrSettingsOption size={25} />
                <Text>Settings</Text>
              </Flex>
            </MenuItem>

            <MenuItem bg="#000000" _hover={{ color: "#FF9900" }}>
              <Button
                size={"xs"}
                onClick={logout}
                _hover={{ color: "#FF9900" }}
                bg={useColorModeValue("gray.300", "gray.dark")}
                py={3.5}
              >
                <FiLogOut size={20} />
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("signup")}
        >
          Signup
        </Link>
      )}
    </Flex>
  );
};

export default Header;
