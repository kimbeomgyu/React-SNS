import React from "react";
import { Card, Avatar } from "antd";
import PropTypes from "prop-types";

const Login = ({ Post, Followings, Follwers, nickname }) => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {Follwers.length}
        </div>
      ]}
    >
      <Card.Meta avatar={<Avatar>{nickname[0]}</Avatar>} title={nickname} />
    </Card>
  );
};

Login.propTypes = {
  Post: PropTypes.array,
  Followings: PropTypes.array,
  Follwers: PropTypes.array,
  nickname: PropTypes.string
};

export default Login;
