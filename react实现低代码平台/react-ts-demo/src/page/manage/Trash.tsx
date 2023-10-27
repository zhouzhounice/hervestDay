import React, { FC, useState } from "react";
import { Typography, Table, Button, Space, Modal, Tag, message } from "antd";
import styles from "./common.module.scss";
import { DeleteOutlined } from "@ant-design/icons";
import ListSearch from "../../components/ListSearch";
import type { ItemType } from "../../components/ListItem";
import useLoadQuesList from "../../hooks/useLoadQuesList";
import CommonPagination from "../../components/CommonPagination";
import { useRequest } from "ahooks";
import {
  updateQuestionService,
  deleteQuestionService,
} from "../../services/question";

const columns = [
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublic",
    render: (isPublished: boolean) => {
      return isPublished ? (
        <Tag color="processing">已发布</Tag>
      ) : (
        <Tag>未发布</Tag>
      );
    },
  },
  {
    title: "答卷",
    dataIndex: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
  },
];

const { Title } = Typography;
const { confirm } = Modal;
const Trash: FC = () => {
  const { data = {}, loading, refresh } = useLoadQuesList({ isDelete: true });
  const { list, total }: { list: ItemType[]; total: number } = data as {
    list: ItemType[];
    total: number;
  };
  const [selectIds, setSelectIds] = useState<string[]>([]);
  // 恢复
  const { run: recover } = useRequest(
    async () => {
      for await (const id of selectIds) {
        await updateQuestionService(id, { isDelete: false });
      }
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        message.success("恢复成功");
        refresh();
        setSelectIds([]);
      },
    },
  );

  const { run: deleteQuestion } = useRequest(
    async () => await deleteQuestionService(selectIds),
    {
      manual: true,
      onSuccess() {
        message.success("删除成功");
        refresh();
        setSelectIds([]);
      },
    },
  );

  const del = () => {
    confirm({
      title: "确认彻底删除该问卷？",
      icon: <DeleteOutlined />,
      content: "删除之后不可以找回",
      onOk: deleteQuestion,
    });
  };

  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button
            type="primary"
            disabled={selectIds.length === 0}
            onClick={recover}
          >
            恢复
          </Button>
          <Button danger disabled={selectIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={list || []}
        columns={columns}
        loading={loading}
        locale={{
          emptyText: "暂无数据",
        }}
        pagination={false}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectIds(selectedRowKeys as string[]);
            console.log(selectIds);
          },
        }}
        rowKey={(q: ItemType) => q._id as string}
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
      <div className={styles.content}>
        {(list || []).length > 0 && TableElem}
      </div>
      <div className={styles.footer}>
        <CommonPagination total={total} />
      </div>
    </>
  );
};

export default Trash;
