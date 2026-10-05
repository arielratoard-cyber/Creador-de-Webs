import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { extras, menu, type MenuItem } from "@/lib/site";

function Dish({ item }: { item: MenuItem }) {
  return (
    <li className="py-6">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-2xl tracking-tight">{item.name}</h4>
        {/* Dotted leader keeps the price visually tied to its dish, like a printed carta. */}
        <span aria-hidden className="flex-1 translate-y-[-0.3em] border-b border-dotted border-foreground/30" />
        <p className="font-display text-xl tabular-nums">
          {item.price}
          <span className="ml-0.5 text-base text-muted">€</span>
        </p>
      </div>
      <p className="mt-2 max-w-[52ch] leading-relaxed text-pretty text-muted">{item.description}</p>
      {(item.signature || item.note) && (
        <p className="mt-3 flex gap-4 text-xs font-medium uppercase tracking-[0.15em]">
          {item.signature && <span className="text-accent">La de la casa</span>}
          {item.note && <span className="text-muted">{item.note}</span>}
        </p>
      )}
    </li>
  );
}

export function Menu() {
  return (
    <Section
      id="carta"
      eyebrow="La carta"
      title={
        <>
          Pocas cosas, <em className="text-accent">muy bien hechas</em>.
        </>
      }
      intro="Todo se monta al momento. Si tienes alguna alergia o intolerancia, pregúntanos: te contamos qué lleva cada pan y cada relleno."
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {menu.map((group, index) => (
          <Reveal key={group.id} delay={index * 80}>
            <div aria-labelledby={`${group.id}-title`} role="group">
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-foreground pb-4">
                <h3 id={`${group.id}-title`} className="font-display text-4xl font-medium italic tracking-tight">
                  {group.title}
                </h3>
                <span className="text-sm tabular-nums text-muted">0{index + 1}</span>
              </div>
              <p className="mt-4 text-muted">{group.intro}</p>
              <ul className="divide-y divide-line">
                {group.items.map((item) => (
                  <Dish key={item.name} item={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Para acompañar</h3>
        <ul className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((extra) => (
            <li key={extra.name} className="flex items-baseline justify-between gap-3 text-sm">
              <span>{extra.name}</span>
              <span className="whitespace-nowrap tabular-nums text-muted">{extra.price} €</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
