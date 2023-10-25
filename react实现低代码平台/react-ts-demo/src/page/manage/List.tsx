import React, { FC, useState } from "react";
import { Typography } from "antd";
import ListItem from "../../components/ListItem";
import { produce } from "immer";
import ListSearch from "../../components/ListSearch";
import styles from "./common.module.scss";
export interface Survey {
  id: string;
  title: string;
  isPublic: boolean;
  isStarState: boolean;
}
const initState: Survey[] = [
  { id: "p1", title: "问卷调查1", isPublic: false, isStarState: false },
  { id: "p2", title: "问卷调查2", isPublic: true, isStarState: true },
  { id: "p3", title: "问卷调查3", isPublic: false, isStarState: false },
  { id: "p4", title: "问卷调查4", isPublic: true, isStarState: true },
];

const { Title } = Typography;
const QuestionCard: FC = () => {
  const [list, setList] = useState<Survey[]>(initState);

  // 删除问卷
  const deleteItem = (id: string) => {
    setList(
      produce((draft) => {
        const index = draft.findIndex((p) => p.id === id);
        draft.splice(index, 1);
      }),
    );
  };

  // 修改问卷
  const editItem = (id: string) => {
    setList(
      produce((draft) => {
        const index = draft.findIndex((p) => p.id === id);
        if (index !== -1) {
          draft[index].isPublic = true;
        }
      }),
    );
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {list.length > 0 &&
          list.map((item: Survey) => (
            <ListItem
              listItem={item}
              key={item.id}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  );
};

export default QuestionCard;
