import { saveService } from "@/app/admin/(protected)/services/actions";
import { ICON_OPTIONS } from "@/lib/icons/registry";

type ServiceFormValues = {
  id?: string;
  title?: string;
  description?: string;
  icon_name?: string;
};

const FIELD =
  "rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]";
const LABEL = "font-nav flex flex-col gap-1.5 text-sm text-white/70";

export function ServiceForm({ values = {} }: { values?: ServiceFormValues }) {
  return (
    <form action={saveService} className="flex flex-col gap-5">
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
