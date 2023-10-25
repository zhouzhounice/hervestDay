import React, { FC, useState } from "react";
import { Typography, Table, Button, Space, Modal } from "antd";
import styles from "./common.module.scss";
import { Survey } from "./List";
import { DeleteOutlined } from "@ant-design/icons";
import ListSearch from "../../components/ListSearch";

const initState: Survey[] = [
  { id: "p2", title: "问卷调查2", isPublic: true, isStarState: true },
  { id: "p4", title: "问卷调查4", isPublic: true, isStarState: true },
];
const columns = [
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublic",
  },
  {
    title: "答卷",
    dataIndex: "isStarState",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
  },
];

const { Title } = Typography;
const { confirm } = Modal;
const Trash: FC = () => {
  const [list] = useState<Survey[]>(initState);
  const [selectIds, setSelectIds] = useState<string[]>([]);
  const del = () => {
    confirm({
      title: "确认彻底删除该问卷？",
      icon: <DeleteOutlined />,
      content: "删除之后不可以找回",
      onOk: () => alert(JSON.stringify(selectIds)),
    });
  };
  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={selectIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={initState}
        columns={columns}
        pagination={false}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectIds(selectedRowKeys as string[]);
            console.log(selectIds);
          },
        }}
        rowKey={(q) => q.id}
      />
    </>
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>{list.length > 0 && TableElem}</div>
    </>
  );
};

export default Trash;
