import React, { FC, useState } from "react";
import { Survey } from "./ListPageType";
import ListItem from "./ListItem";
import { produce } from "immer";

const QuestionCard: FC = () => {
  const [list, setList] = useState([
    { id: "p1", title: "问卷调查1", isPublic: false },
    { id: "p2", title: "问卷调查2", isPublic: true },
    { id: "p3", title: "问卷调查3", isPublic: false },
    { id: "p4", title: "问卷调查4", isPublic: true },
  ]);
  // 新增问卷调查
  const addItem = () => {
    const r = Math.random().toString().slice(-2);
    setList(
      produce((draft) => {
        draft.push({
          id: `p${r}`,
          title: `问卷调查${r}`,
          isPublic: false,
        });
      }),
    );
  };
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
      <ul>
        {list.map((item: Survey) => (
          <ListItem
            listItem={item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
      <button onClick={addItem}>新增问卷</button>
    </>
  );
};

export default QuestionCard;
