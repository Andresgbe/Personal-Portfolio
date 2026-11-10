"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppWindow,
  Bot,
  CalendarCheck,
  CheckCheck,
  LayoutDashboard,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";

type PreviewTab = "web" | "dashboard" | "bot";

const TABS: Array<{ id: PreviewTab; label: string; icon: typeof AppWindow }> = [
  { id: "web", label: "Webs & Apps", icon: AppWindow },
  { id: "dashboard", label: "Panel de Gestión", icon: LayoutDashboard },
  { id: "bot", label: "Bot WhatsApp", icon: Bot },
];

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("web");

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-ink/15 bg-surface/90 shadow-[0_28px_64px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        {/* Selector simple e intuitivo */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 bg-bg/60 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-primary/80" />
            <span className="size-2.5 rounded-full bg-secondary/70" />
            <span className="size-2.5 rounded-full bg-ink/25" />
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-ink/10 bg-surface p-1">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    selected
                      ? "bg-primary text-bg shadow-sm"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vista previa visual de cada tipo de solución */}
        <div className="p-5 sm:p-6">
          <AnimatePresence mode="wait">
            {activeTab === "web" && (
              <motion.div
                key="web"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-ink/10 bg-bg/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono rounded-full bg-secondary/15 px-2.5 py-0.5 text-[11px] text-secondary">
                      Tu marca en internet
                    </span>
                    <span className="font-mono text-xs text-ink/45">
                      Diseño 100% a medida
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-xl text-ink">
                    Páginas web y plataformas que convierten visitas en clientes
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
                    Desde una landing page moderna para presentar tu servicio
                    hasta una aplicación completa con reservas, pagos o cuentas
                    de usuario.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2.5 rounded-lg border border-ink/10 bg-surface/80 p-2.5">
                      <CalendarCheck className="size-4 shrink-0 text-primary" />
                      <span className="text-xs text-ink/85">
                        Reservas y citas online
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-ink/10 bg-surface/80 p-2.5">
                      <ShoppingBag className="size-4 shrink-0 text-secondary" />
                      <span className="text-xs text-ink/85">
                        Catálogos y ventas
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[11px] text-secondary uppercase">
                      Deja atrás las hojas de Excel sueltas
                    </p>
                    <h3 className="font-display text-lg text-ink">
                      Todo tu negocio en un solo panel
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-ink/10 bg-bg/65 p-3">
                    <div className="flex items-center justify-between text-ink/50">
                      <span className="text-[11px]">Ventas mes</span>
                      <TrendingUp className="size-3.5 text-secondary" />
                    </div>
                    <p className="font-display mt-1 text-xl text-ink">+$4,850</p>
                  </div>
                  <div className="rounded-xl border border-ink/10 bg-bg/65 p-3">
                    <div className="flex items-center justify-between text-ink/50">
                      <span className="text-[11px]">Clientes</span>
                      <Users className="size-3.5 text-primary" />
                    </div>
                    <p className="font-display mt-1 text-xl text-ink">142</p>
                  </div>
                  <div className="rounded-xl border border-ink/10 bg-bg/65 p-3">
                    <div className="flex items-center justify-between text-ink/50">
                      <span className="text-[11px]">Pedidos hoy</span>
                      <ShoppingBag className="size-3.5 text-secondary" />
                    </div>
                    <p className="font-display mt-1 text-xl text-ink">18</p>
                  </div>
                </div>

                <div className="rounded-xl border border-ink/10 bg-bg/50 p-3 text-xs text-ink/70">
                  Controla inventario, clientes, pagos y reportes desde tu
                  computadora o celular con usuarios y permisos para tu equipo.
                </div>
              </motion.div>
            )}

            {activeTab === "bot" && (
              <motion.div
                key="bot"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <p className="font-mono text-[11px] text-secondary uppercase">
                  Atención automática por WhatsApp 24/7
                </p>

                {/* Simulación clara de chat de WhatsApp */}
                <div className="space-y-2.5 rounded-xl border border-ink/10 bg-bg/75 p-3.5">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface p-3 text-xs text-ink/90">
                    Hola! Quiero saber precios y agendar una cita para mañana.
                  </div>

                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm border border-primary/30 bg-primary/15 p-3 text-xs text-ink">
                    <p>
                      ¡Hola! 👋 Claro que sí. Tenemos disponibilidad mañana a
                      las <strong>10:00 AM</strong> o <strong>3:00 PM</strong>.
                      ¿Cuál prefieres para dejarte agendado en el sistema?
                    </p>
                    <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-secondary">
                      <span>Respondido por tu Asistente IA en 2 seg</span>
                      <CheckCheck className="size-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
