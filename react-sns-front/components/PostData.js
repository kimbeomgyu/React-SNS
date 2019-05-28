import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Card, Avatar } from "antd";

const PostData = ({ data: { createdAt, img, User, content } }) => {
  return (
    <Card
      key={+createdAt}
      cover={img && <img alt="example" src={img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{User.nickname[0]}</Avatar>}
        title={User.nickname}
        description={content}
      />
    </Card>
  );
};

PostData.propTypes = {
  data: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object
  })
};

export default PostData;
