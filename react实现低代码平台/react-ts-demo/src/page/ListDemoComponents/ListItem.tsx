import * as React from "react";
import { Survey } from "./ListPageType";

interface ListItemProps {
  listItem: Survey;
}
function ListItem(props: ListItemProps) {
  const { id, title, isPublic } = props.listItem;
  const edit = (id: string) => {
    console.log("edit", id);
  };
  return (
    <li key={id}>
      <strong>{title}</strong>
      <span style={isPublic ? { color: "green" } : { color: "red" }}>
        {isPublic ? "已发布" : "未发布"}
      </span>
      <button
        onClick={() => {
          edit(id);
        }}
      >
        编辑
      </button>
    </li>
  );
}

export default ListItem;
