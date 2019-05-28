import React from "react";
import { Input, Form, Button, Icon, Card, Avatar } from "antd";

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
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form style={{ marginBottom: "20px" }} encType="multipart/form-data">
          <Input.TextArea
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
          />
          <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              짹짹
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map(path => {
              return (
                <div key={path} style={{ display: "inline-block" }}>
                  <img
                    src={"http://localhos:3000/" + path}
                    style={{ width: "200px" }}
                    alt={path}
                  />
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPosts.map(data => {
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
      })}
    </div>
  );
};

export default Home;
