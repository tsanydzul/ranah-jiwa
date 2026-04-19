import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SiteSectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SiteSection({ id, className, children }: SiteSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 space-y-4 md:mb-10",
        align === "center" && "mx-auto max-w-2xl text-center"
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-10 bg-brand-purple/28 md:w-14" />
          <p className="text-xs font-semibold tracking-[0.28em] text-brand-purple uppercase md:text-sm">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <div className="space-y-3">
        <h2 className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
