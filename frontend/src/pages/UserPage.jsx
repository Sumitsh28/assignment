import React from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPosts
        likes={123}
        replies={3}
        postImg={"/trip.jpg"}
        postTitle={"My first Trip"}
      />
      <UserPosts
        likes={123}
        replies={3}
        postImg={"/trip.jpg"}
        postTitle={"My first Trip"}
      />
      <UserPosts
        likes={123}
        replies={3}
        postImg={"/trip.jpg"}
        postTitle={"My first Trip"}
      />
    </>
  );
};

export default UserPage;
