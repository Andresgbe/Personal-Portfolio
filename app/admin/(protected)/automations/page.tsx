import Link from "next/link";
import { SortableAdminList } from "@/components/admin/sortable-list";
import { resolveIcon } from "@/lib/icons/registry";
import { createClient } from "@/lib/supabase/server";
import { deleteAutomation, reorderAutomations } from "./actions";

type AutomationRowData = {
  id: string;
  title: string;
  icon_name: string;
  color: string;
};

export default async function AutomationsAdminPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("automations")
    .select("id, title, icon_name, color")
    .order("sort_order", { ascending: true });

  const automations = (data ?? []) as AutomationRowData[];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl font-medium text-white">Automatizaciones</h1>
        <Link
          href="/admin/automations/new"
          className="font-nav rounded-full bg-[var(--hero-accent)] px-4 py-2 text-sm font-medium text-[#0a1420]"
        >
          Nueva automatización
        </Link>
      </div>

      <div className="mt-8">
        <SortableAdminList
          onDelete={deleteAutomation}
          onReorder={reorderAutomations}
          emptyLabel="Todavía no hay automatizaciones."
          confirmDeleteLabel="¿Eliminar esta automatización?"
          items={automations.map((item) => {
            const Icon = resolveIcon(item.icon_name);
            return {
              id: item.id,
              editHref: `/admin/automations/${item.id}`,
              content: (
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon
                      className="size-4 text-white/90"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-nav truncate text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
