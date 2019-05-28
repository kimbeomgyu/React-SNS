import React from "react";
import NicknameEdit from "../components/NicknameEdit";
import FollowList from "../components/FollowList";

const dummy = {
  Followings: ["wp1rndur", "pjj0714", "doheekang"],
  Followers: ["wp1rndur", "pjj0714", "doheekang"]
};

const Profile = () => {
  const { Followers, Followings } = dummy;
  return (
    <div>
      <NicknameEdit />
      <FollowList Follow={Followers} name="팔로우" />
      <FollowList Follow={Followings} name="팔로잉" />
    </div>
  );
};

export default Profile;
