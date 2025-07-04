import Link from "next/link";
import { Ma_Shan_Zheng } from "next/font/google";

// Configuration de la police Ma Shan Zheng
const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface LogoProps {
  href: string;
  label?: string;

}

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href}>
      <div className="flex items-center">
        {/* Conteneur du logo avec effet */}
        <div className="relative group">
          {/* Effet de fond subtil */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

          {/* Logo principal <S/P> */}
          <div className="relative flex items-center justify-center">
            <div className={`${maShanZheng.className} text-2xl md:text-3xl font-normal tracking-wider group-hover:scale-105 transition-all duration-300`}>
              {/* Symbole < */}
              <span className="text-accent group-hover:text-secondary transition-colors duration-300">
                &lt;
              </span>

              {/* Lettre S */}
              <span className="text-secondary group-hover:text-accent transition-colors duration-300 mx-0.5">
                S
              </span>

              {/* Slash / */}
              <span className="text-text-primary group-hover:text-white transition-colors duration-300">
                /
              </span>

              {/* Lettre P */}
              <span className="text-accent group-hover:text-secondary transition-colors duration-300 mx-0.5">
                P
              </span>

              {/* Symbole > */}
              <span className="text-secondary group-hover:text-accent transition-colors duration-300">
                &gt;
              </span>
            </div>
          </div>

          {/* Effet de soulignement animé */}
          <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}