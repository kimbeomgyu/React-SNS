import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NicknameEdit from "../components/NicknameEdit";
import FollowList from "../components/FollowList";
import { loginAction } from "../reducers/user";

const Profile = () => {
  const { user } = useSelector(({ user }) => user);
  const { Followers, Followings } = user;
  const dispatch = useDispatch();
  useEffect(() => dispatch(loginAction), []);

  return (
    <div>
      <NicknameEdit />
      <FollowList Follow={Followers} name="팔로우" />
      <FollowList Follow={Followings} name="팔로잉" />
    </div>
  );
};

export default Profile;
