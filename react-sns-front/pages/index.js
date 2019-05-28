import React from "react";
import PostForm from "../components/PostForm";
import PostData from "../components/PostData";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: { id: 1, nickname: "김범규" },
      content: "첫번째 게시글",
      img: "https://cdn.stocksnap.io/img-thumbs/960w/26OLIALPKJ.jpg"
    },
    { User: { id: 1, nickname: "김범규" }, content: "두번째 게시글" }
  ]
};

const Home = () => {
  const { isLoggedIn, mainPosts, imagePaths } = dummy;
  return (
    <div>
      {isLoggedIn && <PostForm imagePaths={imagePaths} />}
      {mainPosts.map(data => {
        const { User, content } = data;
        return <PostData data={data} key={`${User.nickname}/${content}`} />;
      })}
    </div>
  );
};

export default Home;
