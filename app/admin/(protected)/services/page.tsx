import Link from "next/link";
import { SortableAdminList } from "@/components/admin/sortable-list";
import { resolveIcon } from "@/lib/icons/registry";
import { createClient } from "@/lib/supabase/server";
import { deleteService, reorderServices } from "./actions";

type ServiceRowData = {
  id: string;
  title: string;
  icon_name: string;
};

export default async function ServicesAdminPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("services")
    .select("id, title, icon_name")
    .order("sort_order", { ascending: true });

  const services = (data ?? []) as ServiceRowData[];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-medium text-ink">Servicios</h1>
        <Link
          href="/admin/services/new"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-bg"
        >
          Nuevo servicio
        </Link>
      </div>

      <div className="mt-8">
        <SortableAdminList
          onDelete={deleteService}
          onReorder={reorderServices}
          emptyLabel="Todavía no hay servicios."
          confirmDeleteLabel="¿Eliminar este servicio?"
          items={services.map((item) => {
            const Icon = resolveIcon(item.icon_name);
            return {
              id: item.id,
              editHref: `/admin/services/${item.id}`,
              content: (
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-ink/15 bg-ink/5">
                    <Icon
                      className="size-4 text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="truncate text-sm font-medium text-ink">
                    {item.title}
                  </p>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
