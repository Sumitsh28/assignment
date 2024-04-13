import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const HomePage = () => {
  return (
    <Link to={"/sumit.sh28"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>Visit Profile Page</Button>
      </Flex>
    </Link>
  );
};

export default HomePage;
