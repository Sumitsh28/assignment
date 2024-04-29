import { Container, Box, Menu, Flex, GridItem, Grid } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/UserAtoms";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ChatPage from "./pages/ChatPage";
import MyComponent from "./components/Menu";

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} maxW="1200px" m="auto">
        <GridItem colSpan={1}>{user && <MyComponent />}</GridItem>
        <GridItem colSpan={1}>
          <Box w="600px">
            <Container maxW="620px">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={user ? <HomePage /> : <Navigate to="/auth" />}
                />
                <Route
                  path="/auth"
                  element={!user ? <AuthPage /> : <Navigate to="/" />}
                />
                <Route
                  path="/update"
                  element={
                    user ? <UpdateProfilePage /> : <Navigate to="/auth" />
                  }
                />
                <Route
                  path="/:username"
                  element={
                    user ? (
                      <>
                        <UserPage />
                      </>
                    ) : (
                      <UserPage />
                    )
                  }
                />
                <Route path="/:username/post/:pid" element={<PostPage />} />
                <Route
                  path="/chat"
                  element={user ? <ChatPage /> : <Navigate to={"/auth"} />}
                />
              </Routes>
            </Container>
          </Box>
        </GridItem>
        {/* <GridItem colSpan={1}>Others</GridItem> */}
      </Grid>
    </>
  );
}

export default App;
