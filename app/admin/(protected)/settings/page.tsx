import { getSiteSettings } from "@/lib/queries/site-settings";
import { saveSiteSettings } from "./actions";

const FIELD =
  "rounded-lg border border-ink/15 bg-ink/5 px-3 py-2.5 text-ink outline-none focus:border-primary";
const LABEL = "flex flex-col gap-1.5 text-sm text-ink/70";

export default async function SettingsPage() {
  const { heroTitle, heroTagline } = await getSiteSettings();

  return (
    <div>
      <h1 className="font-display text-3xl font-medium text-ink">Ajustes</h1>
      <p className="mt-2 text-sm text-ink/50">Texto de la portada.</p>
      <p className="mt-1 text-sm text-muted">
        Envuelve una o dos palabras entre <code className="font-mono text-secondary">*asteriscos*</code>{" "}
        para resaltarlas en cian. Es el acento de la marca: una o dos palabras, nunca una frase entera.
      </p>

      <form action={saveSiteSettings} className="mt-8 flex max-w-lg flex-col gap-5">
        <label className={LABEL}>
          Título
          <input
            type="text"
            name="hero_title"
            required
            defaultValue={heroTitle}
            className={FIELD}
          />
        </label>

        <label className={LABEL}>
          Bajada
          <input
            type="text"
            name="hero_tagline"
            required
            defaultValue={heroTagline}
            className={FIELD}
          />
        </label>

        <button
          type="submit"
          className="self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-bg"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
