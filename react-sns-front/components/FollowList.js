import React from "react";
import { List, Button, Card, Icon } from "antd";
import PropTypes from "prop-types";

const FollowList = ({ Follow, name }) => {
  return (
    <List
      style={{ marginBottom: "20px" }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{`${name} 목록`}</div>}
      loadMore={<Button style={{ width: "100%" }}>더 보기</Button>}
      bordered
      dataSource={Follow}
      renderItem={item => (
        <List.Item style={{ marginTop: "20px" }}>
          <Card actions={[<Icon type="stop" key="stop" />]}>
            <Card.Meta description={item} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  Follow: PropTypes.array,
  name: PropTypes.string.isRequired
};

export default FollowList;
