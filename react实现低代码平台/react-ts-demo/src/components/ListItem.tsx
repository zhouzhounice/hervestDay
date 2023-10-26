import * as React from "react";
import {
  Button,
  Card,
  Divider,
  Popconfirm,
  Space,
  Tag,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import styles from "./ListItem.module.scss";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export type ItemType = {
  _id?: string;
  title?: string;
  isPublished: boolean;
  isStar: boolean;
  isDelete: boolean;
  answerCount: number;
  createdAt: string;
};

interface ListItemProps {
  listItem: ItemType;
}
function ListItem(props: ListItemProps) {
  const {
    listItem: { _id: id, title, isPublished, isStar, answerCount, createdAt },
  } = props;

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
            <Link to={""}>
              <Space size="small">
                <Title level={4}>
                  {isStar && <StarOutlined style={{ color: "red" }} />}
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
              <Button icon={<EditOutlined />} type="text" size="small">
                编辑问卷
              </Button>
              <Button icon={<LineChartOutlined />} type="text" size="small">
                问卷统计
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button type="text" icon={<StarOutlined />} size="small">
                标星
              </Button>
              <Popconfirm
                title="确定复制该问卷？"
                okText="确定"
                cancelText="取消"
              >
                <Button type="text" icon={<CopyOutlined />} size="small">
                  复制
                </Button>
              </Popconfirm>
              <Button type="text" icon={<DeleteOutlined />} size="small">
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
