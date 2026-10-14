"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";

type AutomaticControls = {
  enabled: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

export default function CarouselControls({ api, lang, automatic }: { api: UseEmblaCarouselType[1]; lang: string; automatic?: AutomaticControls }) {
  const labels = lang === "ar" ? ["السابق", "التالي"] : lang === "ru" ? ["Назад", "Далее"] : ["Previous", "Next"];
  const pause = lang === "ar" ? ["إيقاف", "إيقاف التنقل التلقائي"] : lang === "ru" ? ["Пауза", "Приостановить автоматическую прокрутку"] : ["Pause", "Pause automatic scrolling"];
  const play = lang === "ar" ? ["تشغيل", "تشغيل التنقل التلقائي"] : lang === "ru" ? ["Пуск", "Включить автоматическую прокрутку"] : ["Play", "Start automatic scrolling"];
  const action = automatic?.enabled ? pause : play;
  return (
    <div className="mb-3 flex flex-wrap justify-end gap-2">
      <button type="button" className="btn-primary min-h-11" onClick={() => { api?.scrollPrev(); automatic?.onNavigate(); }} disabled={!api}>{labels[0]}</button>
      <button type="button" className="btn-primary min-h-11" onClick={() => { api?.scrollNext(); automatic?.onNavigate(); }} disabled={!api}>{labels[1]}</button>
      {automatic && (
        <button type="button" className="btn-primary min-h-11" aria-label={action[1]} onClick={automatic.onToggle} disabled={!api}>
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            {automatic.enabled ? <path d="M3 2h4v12H3zm6 0h4v12H9z" /> : <path d="M4 2v12l10-6z" />}
          </svg>
          {action[0]}
        </button>
      )}
    </div>
  );
}
