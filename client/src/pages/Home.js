import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

function Home() {
  return (
    <>
      <CreatePost />
      <div className="space-y-2 mt-4 pb-10 ">
        <PostCard />
        <PostCard img="https://images.unsplash.com/photo-1509895846073-1c731f9f0950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
    </>
  );
}

export default Home;
