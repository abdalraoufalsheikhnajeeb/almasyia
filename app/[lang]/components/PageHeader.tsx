import { ReactNode } from "react";
import { type Locale } from "../../../i18n-config";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  lang: Locale;
  children?: ReactNode;
  /** Optional background image url (relative to /public). If omitted a gradient is used. */
  bgImage?: string;
};

/**
 * Glassy page header for inner pages.
 * - Dark gradient + optional bg image
 * - Glass content card with breadcrumb / badge / title / subtitle
 */
export default function PageHeader({
  title,
  subtitle,
  badge,
  lang,
  children,
  bgImage,
}: PageHeaderProps) {
  const isRTL = lang === "ar";

  return (
    <section className="relative isolate -mt-20 w-full overflow-hidden">
      {/* Background */}
      {bgImage ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-br from-primary via-litePrimary to-primary"
        />
      )}
      {/* Dark overlay for contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/85 via-primary/65 to-litePrimary/40"
      />
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -start-32 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -end-32 -z-10 h-96 w-96 rounded-full bg-litePrimary/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10 lg:pt-40 lg:pb-16">
        <div className="flex flex-col gap-4" dir={isRTL ? "rtl" : "ltr"}>
          {badge && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
