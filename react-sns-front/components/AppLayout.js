import React from "react";
import { Menu, Input, Row, Col } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import Login from "./Login";

const dummy = {
  nickname: "김범규",
  Post: [],
  Followngs: [],
  Follwers: [],
  isLoggedIn: true
};

const style = { mid: { verticalAlign: "middle" } };

const AppLayout = ({ children }) => {
  const { Post, Followngs, Follwers, nickname } = dummy;
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

      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
            <Login
              Post={Post}
              Followngs={Followngs}
              Follwers={Follwers}
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
