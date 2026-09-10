import { getSiteSettings } from "@/lib/queries/site-settings";
import { saveSiteSettings } from "./actions";

const FIELD =
  "rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]";
const LABEL = "font-nav flex flex-col gap-1.5 text-sm text-white/70";

export default async function SettingsPage() {
  const { heroTitle, heroTagline } = await getSiteSettings();

  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">Ajustes</h1>
      <p className="font-nav mt-2 text-sm text-white/50">Texto de la portada.</p>

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
          className="font-nav self-start rounded-full bg-[var(--hero-accent)] px-5 py-2.5 text-sm font-medium text-[#0a1420]"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
