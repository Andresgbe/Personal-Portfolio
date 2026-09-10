"use client";

import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState, useTransition, type ReactNode } from "react";

export type SortableRowItem = {
  id: string;
  editHref?: string;
  content: ReactNode;
};

type SortableAdminListProps = {
  items: SortableRowItem[];
  onReorder: (orderedIds: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  emptyLabel: string;
  confirmDeleteLabel: string;
};

// Shared by the projects/automations/services admin lists (and the gallery
// manager) — drag to reorder (persisted via `onReorder`), a delete button,
// an optional edit link. Row content arrives pre-rendered (`content`) rather
// than as a render-prop function: a Server Component page can pass already-
// built JSX across into this Client Component, but not a plain callback.
export function SortableAdminList({
  items,
  onReorder,
  onDelete,
  emptyLabel,
  confirmDeleteLabel,
}: SortableAdminListProps) {
  const [ordered, setOrdered] = useState(items);
  const [, startTransition] = useTransition();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = ordered.findIndex((item) => item.id === active.id);
    const newIndex = ordered.findIndex((item) => item.id === over.id);
    const next = arrayMove(ordered, oldIndex, newIndex);
    setOrdered(next);
    startTransition(() => {
      onReorder(next.map((item) => item.id));
    });
  }

  function handleDelete(id: string) {
    if (!confirm(confirmDeleteLabel)) return;
    setOrdered((current) => current.filter((item) => item.id !== id));
    startTransition(() => {
      onDelete(id);
    });
  }

  if (ordered.length === 0) {
    return <p className="font-nav text-sm text-white/40">{emptyLabel}</p>;
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={ordered.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        <ul className="flex flex-col gap-2">
          {ordered.map((item) => (
            <SortableRow
              key={item.id}
              id={item.id}
              editHref={item.editHref}
              onDelete={() => handleDelete(item.id)}
            >
              {item.content}
            </SortableRow>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

function SortableRow({
  id,
  editHref,
  onDelete,
  children,
}: {
  id: string;
  editHref?: string;
  onDelete: () => void;
  children: ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="cursor-grab touch-none text-white/30 hover:text-white/60"
        aria-label="Reordenar"
      >
        <GripVertical className="size-4" aria-hidden="true" />
      </button>

      <div className="min-w-0 flex-1">{children}</div>

      {editHref && (
        <Link href={editHref} className="font-nav shrink-0 text-xs text-white/60 hover:text-white">
          Editar
        </Link>
      )}

      <button
        type="button"
        onClick={onDelete}
        className="shrink-0 text-white/30 hover:text-red-400"
        aria-label="Eliminar"
      >
        <Trash2 className="size-4" aria-hidden="true" />
      </button>
    </li>
  );
}
