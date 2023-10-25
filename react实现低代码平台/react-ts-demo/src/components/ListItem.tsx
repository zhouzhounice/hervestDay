import * as React from "react";
import { Button, Card, Divider, Popconfirm, Space } from "antd";
import { Survey } from "../page/manage/List";
import styles from "./ListItem.module.scss";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";

interface ListItemProps {
  listItem: Survey;
  deleteItem?: (id: string) => void;
  editItem?: (id: string) => void;
}
function ListItem(props: ListItemProps) {
  const {
    listItem: { id, title, isPublic, isStarState },
  } = props;

  return (
    <>
      <Card bordered={false} key={id} className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <span>
              {isStarState && <StarOutlined style={{ color: "red" }} />}
            </span>
            <strong>{title}</strong>
          </div>
          <div className={styles.right}>
            <span style={isPublic ? { color: "green" } : { color: "red" }}>
              {isPublic ? "已发布" : "未发布"}
            </span>
          </div>
        </div>

        <Divider />
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
