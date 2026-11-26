import { ChevronDown } from "lucide-react";

import { soberDriverFaq } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="w-full px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-extrabold text-green-700">Вопросы и ответы</p>
        <h2 className="text-balance mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Что важно знать перед заказом</h2>
        <div className="mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {soberDriverFaq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-slate-950 marker:content-none md:text-xl">
                {item.question}
                <ChevronDown
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-green-700 transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={2.6}
                />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
