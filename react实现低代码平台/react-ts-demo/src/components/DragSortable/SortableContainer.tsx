import React, { FC } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  // arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type PropsType = {
  children: JSX.Element | JSX.Element[];
  items: Array<{ id: string; [key: string]: unknown }>;
  onDragEnd: (oldIndex: number, newIndex: number) => void;
};

const SortableContain: FC<PropsType> = (props: PropsType) => {
  const { children, items, onDragEnd } = props;
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over == null) return;
    if (active.id !== over.id) {
      const oldIndex: number = items.findIndex(
        (item) => item.fe_id === active.id,
      );
      const newIndex: number = items.findIndex(
        (item) => item.fe_id === over.id,
      );
      onDragEnd(oldIndex, newIndex);
    }
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default SortableContain;
