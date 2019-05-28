import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Card, Avatar } from "antd";

const PostData = ({ data }) => {
  return (
    <Card
      key={+data.createdAt}
      cover={data.img && <img alt="example" src={data.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{data.User.nickname[0]}</Avatar>}
        title={data.User.nickname}
        description={data.content}
      />
    </Card>
  );
};

PostData.propTypes = {
  data: PropTypes.object
};

export default PostData;
