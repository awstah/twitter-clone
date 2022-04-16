import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import PostServices from "../services/PostServices";

function Home() {
  const [posts, setposts] = useState([]);

  const user = localStorage.getItem("user");

  const userParse = JSON.parse(user);

  const data = { userId: userParse._id };

  const getTimelinePosts = () => {
    PostServices.getPostTimeline(data).then((res) => {
      setposts(res.data);
    });
  };

  useEffect(() => {
    getTimelinePosts();
  }, []);

  return (
    <>
      <CreatePost />
      <div className="space-y-2 mt-4 pb-10 ">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Home;
