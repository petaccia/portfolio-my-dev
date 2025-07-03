"use client";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-24">
      <section className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
        <article className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-secondary font-body font-medium text-3xl tracking-wide">
              Portfolio professionnel
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-wider bg-gradient-to-r from-white/70 via-accent-light to-secondary-light text-transparent bg-clip-text animate-gradient">
              Sébastien Petaccia
            </h1>
            <p className="text-xl text-gray-300 mt-4 font-display">
              Développeur Web &amp; Web Mobile
            </p>
            <p className="text-gray-400 max-w-lg mt-6 font-heading">
              Spécialisé dans la création d'applications web modernes,
              performantes et accessibles avec les dernières technologies.
            </p>
          </div>
          <nav aria-label="Navigation principale" className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projets"
              className="px-6 py-3 bg-secondary text-white rounded-md font-medium transition-all hover:bg-opacity-90 font-display"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 text-white rounded-md font-medium transition-all hover:bg-white/10 font-display"
            >
              Me contacter
            </Link>
          </nav>
        </article>
        <figure className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-secondary to-accent opacity-70 blur"></div>
            <div className="relative">
              <Image
                src="/img/portrait.jpg"
                alt="Portrait de Sébastien Petaccia"
                width={400}
                height={400}
                className="aspect-square rounded-xl object-cover border-2 border-white/10 cursor-pointer transition-transform hover:scale-105"
                priority
                data-tooltip-id="portrait-tooltip"
                data-tooltip-content="✨ Développeur passionné par les technologies modernes"
              />
              <Tooltip
                id="portrait-tooltip"
                style={{
                  backgroundColor: '#000f1f',
                  color: '#CBD5E1',
                  border: '1px solid #2ECCC6',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxShadow: '0 4px 12px rgba(46, 204, 198, 0.2)',
                  zIndex: 1000
                }}
                place="top"
                variant="dark"
                delayShow={300}
                delayHide={150}
                offset={10}
                />
            </div>
          </div>
        </figure>
      </section>
    </header>
  );
}