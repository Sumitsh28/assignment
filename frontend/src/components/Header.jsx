import { Flex, Image, Link, useColorMode, Avatar } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/UserAtoms";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      mt={6}
      mb="12"
      alignItems={"center"}
      justifyContent={"center"}
      gap={40}
    >
      {user && (
        <Link as={RouterLink} to="/" _hover={{ color: "#FF9900" }}>
          <AiFillHome size={24} />
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

      {user && (
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
      )}
    </Flex>
  );
};

export default Header;
