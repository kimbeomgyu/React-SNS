import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useInput } from "../pages/signup";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
    },
    [id, password]
  );
  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <Button type="primary" htmlType="submit" loading={false}>
        로그인
      </Button>
      <Link href="/signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
    </Form>
  );
};
export default LoginForm;
