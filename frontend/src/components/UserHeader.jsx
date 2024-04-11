import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { IoMdLink } from "react-icons/io";

const UserHeader = () => {
  const toast = useToast();
  const copyURL = () => {
    const copy = window.location.href;

    navigator.clipboard.writeText(copy).then(() => {
      toast({
        title: "Copied",
        status: "success",
        duration: 3000,
        description: "Profile link copied",
      });
    });
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Flex alignItems={"start"} flexDir={"column"} gap={2}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Sumit Shandillya
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={2}
              borderRadius={"full"}
              _hover={{ color: "#FF9900" }}
            >
              @sumit.sh28
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Avatar
            name="Sumit Shandillya"
            src="/profile.jpg"
            size={{
              base: "lg",
              md: "xl",
            }}
          />
        </Box>
      </Flex>
      <Text>Eat · Code · Create · Repeat</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>300 followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Text color={"gray.light"}>100 following</Text>
        </Flex>
        <Flex gap={10}>
          <Icon
            as={CgMoreO}
            boxSize={6}
            cursor="pointer"
            _hover={{ color: "#FF9900" }}
          />
          <Icon
            as={IoMdLink}
            boxSize={6}
            cursor="pointer"
            _hover={{ color: "#FF9900" }}
            onClick={copyURL}
          />
        </Flex>
      </Flex>

      <Flex w={"full"} mt={5}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid #FF9900"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Posts</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1.5px solid #ff990069"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
          color={"gray.light"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
