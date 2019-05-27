import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";

//custom hooks
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => setter(e.target.value), []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      if (password !== passwordCheck) {
        return setPasswordError(false);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term]
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );
  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <Form style={{ padding: "10px" }} onSubmit={onSubmit}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-nick">닉네임</label>
        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호체크</label>
        <Input
          name="user-password-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div>
        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
          동의합니다.
        </Checkbox>
        {termError && (
          <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
        )}
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </div>
    </Form>
  );
};

export default Signup;
