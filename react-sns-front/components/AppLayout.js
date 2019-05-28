import React from "react";
import { Menu, Input, Row, Col } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import Login from "./Login";
import { useSelector } from "react-redux";

const style = { mid: { verticalAlign: "middle" } };

const AppLayout = ({ children }) => {
  const { isLoggedIn, user } = useSelector(({ user }) => user);
  const { Post, Followings, Followers, nickname } = user;

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={style.mid} />
        </Menu.Item>
      </Menu>

      <Row gutter={20}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <Login
              Post={Post}
              Followings={Followings}
              Followers={Followers}
              nickname={nickname}
            />
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6} />
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
