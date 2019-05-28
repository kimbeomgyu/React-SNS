import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostData from "../components/PostData";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../reducers/user";

const Home = () => {
  const { isLoggedIn, user } = useSelector(({ user }) => user);
  const { mainPosts, imagePaths } = useSelector(({ post }) => post);
  const dispatch = useDispatch();
  useEffect(() => dispatch(loginAction), []);

  return (
    <div>
      {user ? (
        <div>로그인 했습니다. {user.nickname}님 반갑습니다.</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {isLoggedIn && <PostForm imagePaths={imagePaths} />}
      {mainPosts.map(data => {
        const { User, content } = data;
        return <PostData data={data} key={`${User.nickname}/${content}`} />;
      })}
    </div>
  );
};

export default Home;
