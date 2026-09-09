import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Shot } from "@/data/projects";

// Renders a real screenshot when the shot has one, and a flat tinted frame
// with an image glyph while it doesn't.
export function ShotFrame({
  shot,
  className,
  sizes,
}: {
  shot: Shot;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[20px]${
        className ? ` ${className}` : ""
      }`}
      style={{ backgroundColor: shot.color }}
    >
      {shot.src ? (
        <Image
          src={shot.src}
          alt={shot.caption}
          fill
          sizes={sizes ?? "100vw"}
          className="object-cover"
        />
      ) : (
        <ImageIcon
          className="size-10 text-white/40"
          strokeWidth={1.25}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
