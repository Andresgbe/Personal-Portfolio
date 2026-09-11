import { saveProject } from "@/app/admin/(protected)/projects/actions";

type ProjectFormValues = {
  id?: string;
  slug?: string;
  title?: string;
  category?: string;
  year?: string;
  description?: string;
  role?: string;
  stack?: string[];
  color?: string;
  url?: string | null;
};

const FIELD =
  "rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]";
const LABEL = "font-nav flex flex-col gap-1.5 text-sm text-white/70";

export function ProjectForm({ values = {} }: { values?: ProjectFormValues }) {
  return (
    <form action={saveProject} className="flex flex-col gap-5">
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
          Categoría
          <input
            type="text"
            name="category"
            required
            placeholder="Landing page, Dashboard interno…"
            defaultValue={values.category}
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
            placeholder="Diseño y desarrollo"
            defaultValue={values.role}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Stack (separado por comas)
          <input
            type="text"
            name="stack"
            placeholder="Next.js, Tailwind"
            defaultValue={values.stack?.join(", ")}
            className={FIELD}
          />
        </label>


        <label className={LABEL}>
          Color (placeholder mientras no hay capturas)
          <input
            type="color"
            name="color"
            defaultValue={values.color ?? "#6366f1"}
            className={`${FIELD} h-11 p-1`}
          />
        </label>

        <label className={LABEL}>
          Sitio en vivo (opcional)
          <input
            type="url"
            name="url"
            placeholder="https://…"
            defaultValue={values.url ?? ""}
            className={FIELD}
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
