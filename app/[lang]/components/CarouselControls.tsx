"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";

export default function CarouselControls({ api, lang }: { api: UseEmblaCarouselType[1]; lang: string }) {
  const labels = lang === "ar" ? ["السابق", "التالي"] : lang === "ru" ? ["Назад", "Далее"] : ["Previous", "Next"];
  return (
    <div className="mb-3 flex justify-end gap-2">
      <button type="button" className="btn-primary min-h-11" onClick={() => api?.scrollPrev()} disabled={!api}>{labels[0]}</button>
      <button type="button" className="btn-primary min-h-11" onClick={() => api?.scrollNext()} disabled={!api}>{labels[1]}</button>
    </div>
  );
}
