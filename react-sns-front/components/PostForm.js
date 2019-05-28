import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Button } from "antd";

const PostForm = ({ imagePaths }) => (
  <Form style={{ marginBottom: "20px" }} encType="multipart/form-data">
    <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
    <div>
      <input type="file" multiple hidden />
      <Button>이미지 업로드</Button>
      <Button type="primary" style={{ float: "right" }} htmlType="submit">
        짹짹
      </Button>
    </div>
    <div>
      {imagePaths.map(path => {
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
);

PostForm.propTypes = {
  imagePaths: PropTypes.array
};

export default PostForm;
