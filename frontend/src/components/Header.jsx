import {
  Flex,
  Image,
  Link,
  useColorMode,
  Avatar,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../../atoms/UserAtoms";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";
import authScreenAtom from "../../atoms/AuthAtoms";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const [isHovered, setIsHovered] = useState(false);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <Flex
      mt={6}
      mb="12"
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ base: 70, lg: 40 }}
    >
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
