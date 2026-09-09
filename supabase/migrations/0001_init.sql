-- Portfolio admin CMS — run once, in order, in the Supabase SQL Editor.
-- See supabase/SETUP.md for the full checklist this file is one step of.

-- ── software_projects ──────────────────────────────────────────────────────
create table software_projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  year text not null,
  description text not null,
  role text not null,
  stack text[] not null default '{}',
  status text not null check (status in ('in-progress', 'done')),
  color text not null,
  url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── project_gallery_shots ───────────────────────────────────────────────────
-- storage_path is nullable: null means "show the color placeholder", matching
-- today's optional Shot.src. Never null AND no color — color is required so
-- there's always something to paint before/if an image fails to load.
create table project_gallery_shots (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references software_projects(id) on delete cascade,
  caption text not null,
  color text not null,
  storage_path text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── automations ─────────────────────────────────────────────────────────────
create table automations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  year text not null,
  description text not null,
  role text not null,
  stack text[] not null default '{}',
  icon_name text not null,
  status text not null check (status in ('in-progress', 'done')),
  color text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── services ─────────────────────────────────────────────────────────────────
create table services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  icon_name text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── site_settings ────────────────────────────────────────────────────────────
-- Singleton row (id is always 1) — just the hero copy for now.
create table site_settings (
  id int primary key default 1 check (id = 1),
  hero_title text not null,
  hero_tagline text not null,
  updated_at timestamptz not null default now()
);

-- ── Row Level Security ───────────────────────────────────────────────────────
-- Public read everywhere (it's a portfolio site); writes require an
-- authenticated session — there's exactly one user, created by hand in
-- Authentication → Users, so no per-row ownership check is needed.
alter table software_projects enable row level security;
alter table project_gallery_shots enable row level security;
alter table automations enable row level security;
alter table services enable row level security;
alter table site_settings enable row level security;

create policy "public read" on software_projects for select to anon, authenticated using (true);
create policy "authenticated write" on software_projects for all to authenticated using (true) with check (true);

create policy "public read" on project_gallery_shots for select to anon, authenticated using (true);
create policy "authenticated write" on project_gallery_shots for all to authenticated using (true) with check (true);

create policy "public read" on automations for select to anon, authenticated using (true);
create policy "authenticated write" on automations for all to authenticated using (true) with check (true);

create policy "public read" on services for select to anon, authenticated using (true);
create policy "authenticated write" on services for all to authenticated using (true) with check (true);

create policy "public read" on site_settings for select to anon, authenticated using (true);
create policy "authenticated write" on site_settings for all to authenticated using (true) with check (true);

-- ── Storage ──────────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('project-gallery', 'project-gallery', true, 5242880, array['image/png', 'image/jpeg', 'image/webp', 'image/gif']);

create policy "public read gallery images" on storage.objects
  for select to anon, authenticated using (bucket_id = 'project-gallery');

create policy "authenticated write gallery images" on storage.objects
  for all to authenticated
  using (bucket_id = 'project-gallery')
  with check (bucket_id = 'project-gallery');

-- ── Seed data ────────────────────────────────────────────────────────────────
-- Reproduces the placeholder content the site already ships with, so nothing
-- goes blank the moment this migration runs. Replace it from /admin.

insert into software_projects (slug, title, category, year, description, role, stack, status, color, sort_order) values
  ('estudio-lumen', 'Estudio Lumen', 'Diseño web y branding', '2026', 'Rediseño de identidad y sitio para un estudio fotográfico que necesitaba que su trabajo, y no la interfaz, fuera lo primero que se ve.', 'Diseño y desarrollo', array['Next.js', 'Tailwind'], 'in-progress', '#6366f1', 0),
  ('panel-orbit', 'Panel Orbit', 'Dashboard interno', '2026', 'Panel de analítica para un equipo de operaciones que vivía entre planillas sueltas.', 'Producto y frontend', array['React', 'PostgreSQL'], 'in-progress', '#f59e0b', 1),
  ('app-vento', 'App Vento', 'Producto digital', '2025', 'App de reservas para un negocio de servicios, pensada para que el turno se saque en menos de un minuto.', 'Diseño y desarrollo', array['Next.js', 'Supabase'], 'done', '#22c55e', 2),
  ('sitio-marea', 'Sitio Marea', 'Sitio institucional', '2025', 'Sitio corporativo con foco en confianza y claridad: menos ruido, más respuestas.', 'Diseño y desarrollo', array['Next.js', 'CMS'], 'done', '#ef4444', 3),
  ('landing-nimbus', 'Landing Nimbus', 'Landing page', '2024', 'Landing de lanzamiento para un producto SaaS, optimizada para convertir visitas en pruebas gratuitas.', 'Diseño y desarrollo', array['Next.js', 'Tailwind'], 'done', '#14b8a6', 4);

insert into automations (slug, title, year, description, role, stack, icon_name, status, color, sort_order) values
  ('sync-sheets-crm', 'Sincronización Sheets ↔ CRM', '2026', 'Los contactos cargados en la planilla entran al CRM sin copiar y pegar.', 'Automatización', array['Make', 'Google Sheets'], 'RefreshCw', 'in-progress', '#7c3aed', 0),
  ('bot-turnos-whatsapp', 'Bot de turnos por WhatsApp', '2025', 'Toma el turno, lo confirma y lo agenda solo, sin intervención humana.', 'Automatización', array['n8n', 'WhatsApp API'], 'MessageCircle', 'done', '#0ea5e9', 1),
  ('reporte-semanal', 'Reporte semanal automático', '2025', 'Cada lunes llega el resumen de ventas armado y listo para leer.', 'Automatización', array['Python', 'Cron'], 'BarChart3', 'done', '#d97706', 2),
  ('carga-facturas', 'Carga automática de facturas', '2024', 'Lee la factura que llega por mail y la registra en la contabilidad.', 'Automatización', array['Make', 'OCR'], 'FileText', 'done', '#059669', 3);

insert into services (title, description, icon_name, sort_order) values
  ('Plataformas web a medida', 'Aplicaciones completas con base de datos y hosting. Ideal si tu proyecto necesita lógica de negocio real, no solo un sitio estático.', 'AppWindow', 0),
  ('Landing pages', 'Sitios rápidos, optimizados y con diseño propio para presentar tu marca, producto o servicio online.', 'Rocket', 1),
  ('Automatizaciones y chatbots', 'Flujos automatizados, integraciones entre plataformas y chatbots para WhatsApp o Instagram que responden mientras duermes.', 'Bot', 2),
  ('Migración y modernización de sitios', '¿Tu sitio actual es lento o quedó viejo? Lo migro a un stack moderno (React/Next.js) sin perder tu contenido ni tu posicionamiento en Google.', 'RefreshCw', 3),
  ('Dashboards y paneles administrativos', 'Interfaces internas para que gestiones tu propio negocio — pedidos, inventario, usuarios — sin depender de hojas de cálculo.', 'LayoutDashboard', 4),
  ('Mantenimiento y soporte continuo', 'Acompañamiento técnico mensual para que tu sitio siga funcionando, actualizado y seguro, sin que tengas que preocuparte por eso.', 'Wrench', 5);

insert into site_settings (id, hero_title, hero_tagline) values
  (1, 'Andrés Gil', 'Programador web. Construyo lo que sueñas.');
