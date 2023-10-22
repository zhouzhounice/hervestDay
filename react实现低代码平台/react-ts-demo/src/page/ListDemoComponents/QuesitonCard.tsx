import React, { FC } from "react";
import { Survey } from "./ListPageType";
import ListItem from "./ListItem";

const QuestionCard: FC = () => {
  const list: Survey[] = [
    { id: "p1", title: "问卷调查1", isPublic: false },
    { id: "p2", title: "问卷调查2", isPublic: true },
    { id: "p3", title: "问卷调查3", isPublic: false },
    { id: "p4", title: "问卷调查4", isPublic: true },
  ];

  return (
    <ul>
      {list.map((item: Survey) => (
        <ListItem listItem={item} key={item.id} />
      ))}
    </ul>
  );
};

export default QuestionCard;
