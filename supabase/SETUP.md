# Poner el panel de admin en marcha

Esto se corre una sola vez. Nada de esto lo puedo hacer yo por vos — son
pasos en tu cuenta de Supabase y en tu servidor/máquina.

## 1. Crear el proyecto

En [supabase.com](https://supabase.com) → **New project**. Anotá la
contraseña de la base que te pida (no la vas a necesitar para esto, pero
convenís tenerla guardada).

## 2. Copiar las claves

En el proyecto: **Project Settings → API**. Copiá:

- **Project URL**
- **anon public** key (⚠️ no la `service_role` — esa no se usa acá)

Creá un archivo `.env.local` en la raíz del proyecto (al lado de
`package.json`) con:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

(Hay un `.env.local.example` con esta misma plantilla.)

## 3. Correr el SQL

En el proyecto de Supabase: **SQL Editor → New query**. Pegá el contenido
completo de [`supabase/migrations/0001_init.sql`](./migrations/0001_init.sql)
y ejecutalo (▶ Run). Esto crea las tablas, los permisos (RLS), el bucket de
imágenes y carga los proyectos/automatizaciones/servicios placeholder que ya
tiene el sitio — para que no se vea vacío apenas conectes la base.

Este archivo está pensado para correr **una sola vez**, sobre un proyecto
recién creado.

## 4. Crear tu usuario

En **Authentication → Users → Add user**. Cargá tu email y una contraseña.
Este es el único usuario que va a poder entrar a `/admin` — no hay pantalla
de registro pública, es intencional.

## 5. Reiniciar y probar

Reiniciá el servidor de desarrollo (`npm run dev`) para que tome las
variables de entorno nuevas, y entrá a `/admin/login` con el email y
contraseña del paso anterior.

---

Si en algún momento borrás `.env.local` o lo sacás del servidor de
producción, el sitio no se rompe: vuelve a mostrar el contenido placeholder
que tenía antes de esto.
