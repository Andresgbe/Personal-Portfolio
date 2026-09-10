"use client";

import {
  deleteGalleryShot,
  reorderGalleryShots,
  uploadGalleryImage,
} from "@/app/admin/(protected)/projects/actions";
import { SortableAdminList } from "@/components/admin/sortable-list";

type GalleryShotWithId = {
  id: string;
  caption: string;
  color: string;
  src?: string;
};

export function GalleryManager({
  projectId,
  shots,
}: {
  projectId: string;
  shots: GalleryShotWithId[];
}) {
  const uploadAction = uploadGalleryImage.bind(null, projectId);

  return (
    <div>
      <SortableAdminList
        onDelete={deleteGalleryShot}
        onReorder={reorderGalleryShots}
        emptyLabel="Todavía no hay imágenes — mientras tanto se muestra un color de relleno."
        confirmDeleteLabel="¿Eliminar esta imagen?"
        items={shots.map((shot) => ({
          id: shot.id,
          content: (
            <div className="flex items-center gap-3">
              <div
                className="size-9 shrink-0 rounded-md bg-cover bg-center"
                style={{
                  backgroundColor: shot.color,
                  backgroundImage: shot.src ? `url(${shot.src})` : undefined,
                }}
              />
              <p className="font-nav truncate text-sm text-white">{shot.caption}</p>
            </div>
          ),
        }))}
      />

      <form
        action={uploadAction}
        className="font-nav mt-5 flex flex-wrap items-end gap-3 border-t border-white/10 pt-5"
      >
        <label className="flex flex-col gap-1.5 text-sm text-white/70">
          Imagen
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="text-xs text-white/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm text-white/70">
          Título
          <input
            type="text"
            name="caption"
            required
            placeholder="Vista principal"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm text-white/70">
          Color de respaldo
          <input
            type="color"
            name="color"
            defaultValue="#6366f1"
            className="h-9 w-14 rounded-lg border border-white/15 bg-white/5"
          />
        </label>
        <button
          type="submit"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          Agregar imagen
        </button>
      </form>
    </div>
  );
}
