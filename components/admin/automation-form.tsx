import { saveAutomation } from "@/app/admin/(protected)/automations/actions";
import { ICON_OPTIONS } from "@/lib/icons/registry";

type AutomationFormValues = {
  id?: string;
  slug?: string;
  title?: string;
  year?: string;
  description?: string;
  role?: string;
  stack?: string[];
  icon_name?: string;
  color?: string;
};

const FIELD =
  "rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]";
const LABEL = "font-nav flex flex-col gap-1.5 text-sm text-white/70";

export function AutomationForm({ values = {} }: { values?: AutomationFormValues }) {
  return (
    <form action={saveAutomation} className="flex flex-col gap-5">
      {values.id && <input type="hidden" name="id" value={values.id} />}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={LABEL}>
          Título
          <input
            type="text"
            name="title"
            required
            defaultValue={values.title}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Slug (para la URL)
          <input
            type="text"
            name="slug"
            required
            pattern="[a-z0-9-]+"
            defaultValue={values.slug}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Año
          <input type="text" name="year" required defaultValue={values.year} className={FIELD} />
        </label>

        <label className={LABEL}>
          Rol
          <input
            type="text"
            name="role"
            required
            placeholder="Automatización"
            defaultValue={values.role ?? "Automatización"}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Stack (separado por comas)
          <input
            type="text"
            name="stack"
            placeholder="Make, Google Sheets"
            defaultValue={values.stack?.join(", ")}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Ícono
          <select
            name="icon_name"
            defaultValue={values.icon_name ?? ICON_OPTIONS[0]?.name}
            className={FIELD}
          >
            {ICON_OPTIONS.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>


        <label className={LABEL}>
          Color
          <input
            type="color"
            name="color"
            defaultValue={values.color ?? "#7c3aed"}
            className={`${FIELD} h-11 p-1`}
          />
        </label>
      </div>

      <label className={LABEL}>
        Descripción
        <textarea
          name="description"
          required
          rows={3}
          defaultValue={values.description}
          className={FIELD}
        />
      </label>

      <button
        type="submit"
        className="font-nav self-start rounded-full bg-[var(--hero-accent)] px-5 py-2.5 text-sm font-medium text-[#0a1420]"
      >
        Guardar
      </button>
    </form>
  );
}
