import * as React from "react";
import { Survey } from "./ListPageType";

interface ListItemProps {
  listItem: Survey;
  deleteItem?: (id: string) => void;
  editItem?: (id: string) => void;
}
function ListItem(props: ListItemProps) {
  const {
    listItem: { id, title, isPublic },
    deleteItem,
    editItem,
  } = props;
  const edit = (id: string) => {
    editItem && editItem(id);
  };
  const deleteI = (id: string) => {
    deleteItem && deleteItem(id);
  };
  return (
    <li key={id}>
      <strong>{title}</strong>
      <span style={isPublic ? { color: "green" } : { color: "red" }}>
        {isPublic ? "已发布" : "未发布"}
      </span>
      <button onClick={() => edit(id)}>编辑</button>
      <button onClick={() => deleteI(id)}>删除</button>
    </li>
  );
}

export default ListItem;
