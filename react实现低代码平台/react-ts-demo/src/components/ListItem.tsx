import * as React from "react";
import {
  Button,
  Card,
  Divider,
  message,
  Popconfirm,
  Space,
  Tag,
  Typography,
  Modal,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import {
  duplicateQuestionService,
  updateQuestionService,
} from "../services/question";
import styles from "./ListItem.module.scss";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;
const { confirm } = Modal;

export type ItemType = {
  _id?: string;
  title?: string;
  isPublished: boolean;
  isStar: boolean;
  isDeleted: boolean;
  answerCount: number;
  createdAt: string;
};

interface ListItemProps {
  listItem: ItemType;
}
function ListItem(props: ListItemProps) {
  const nav = useNavigate();
  const {
    listItem: { _id: id, title, isPublished, isStar, answerCount, createdAt },
  } = props;

  const [star, setStar] = useState(false);
  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(id as string, { isStar: !isStar });
    },
    {
      manual: true,
      onSuccess() {
        setStar(!isStar);
        message.success("已更新");
      },
    },
  );

  const { loading: duplicateLoading, run: handleDuplicate } = useRequest(
    async () => await duplicateQuestionService(id as string),
    {
      manual: true,
      onSuccess(result) {
        message.success("复制成功");
        nav(`/question/edit/${result.id}`);
      },
    },
  );

  // 删除
  const [isDeletedState, setIsDeletedState] = useState(false);
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(
    async () => await updateQuestionService(id as string, { isDeleted: true }),
    {
      manual: true,
      onSuccess() {
        message.success("删除成功");
        setIsDeletedState(true);
      },
    },
  );
  const del = () => {
    confirm({
      title: "确定删除该问卷？",
      icon: <ExclamationOutlined />,
      onOk: deleteQuestion,
    });
  };

  // 已经删除的问卷，不要再渲染卡片了
  if (isDeletedState) return null;

  return (
    <>
      <Card
        bordered={false}
        key={id as string}
        className={styles.container}
        bodyStyle={{ padding: "12px" }}
      >
        <div className={styles.title}>
          <div className={styles.left}>
            <Link
              to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}
            >
              <Space size="small">
                <Title level={4}>
                  {star && <StarOutlined style={{ color: "red" }} />}
                </Title>
                <Title level={4}>{title}</Title>
              </Space>
            </Link>
          </div>
          <div className={styles.right}>
            <Space>
              <span>
                {isPublished ? (
                  <Tag color="green">已发布</Tag>
                ) : (
                  <Tag color="red">未发布</Tag>
                )}
              </span>
              <Text strong>已答：{answerCount}</Text>
              <Text strong>{createdAt}</Text>
            </Space>
          </div>
        </div>

        <Divider style={{ margin: "25px 0" }} />
        <div className={styles["button-container"]}>
          <div className={styles.left}>
            <Space>
              <Button
                icon={<EditOutlined />}
                type="text"
                size="small"
                onClick={() => nav(`/question/edit/${id}`)}
              >
                编辑问卷
              </Button>
              <Button
                icon={<LineChartOutlined />}
                type="text"
                size="small"
                onClick={() => nav(`/question/stat/${id}`)}
                disabled={!isPublished}
              >
                问卷统计
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button
                type="text"
                icon={<StarOutlined />}
                size="small"
                onClick={changeStar}
                disabled={changeStarLoading}
              >
                {star ? "取消标星" : "标星"}
              </Button>
              <Popconfirm
                title="确定复制该问卷？"
                onConfirm={handleDuplicate}
                okText="确定"
                cancelText="取消"
              >
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  size="small"
                  disabled={duplicateLoading}
                >
                  复制
                </Button>
              </Popconfirm>

              <Button
                type="text"
                icon={<DeleteOutlined />}
                size="small"
                onClick={del}
                disabled={deleteLoading}
              >
                删除
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ListItem;
