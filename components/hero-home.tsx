"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Highlight } from "@/components/ui/hero-highlight";

export default function HeroHome() {
  // Deteksi device low-end (RAM <= 2GB)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "deviceMemory" in navigator) {
      // @ts-ignore
      if (navigator.deviceMemory && navigator.deviceMemory <= 2) {
        setIsLowEndDevice(true);
      }
    }
  }, []);

  return (
    <>
      {isLowEndDevice ? (
        // Fallback background sederhana
        <section className="flex min-h-screen items-center justify-center bg-[#030712] px-4">
          <div className="mx-auto w-full max-w-6xl">
            {/* Hero content */}
            <div className="flex flex-col items-center justify-center py-12 md:py-24">
              {/* Section header */}
              <div className="w-full pb-12 text-center md:pb-20">
                <h1
                  className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50 bg-clip-text pb-5 font-nacelle text-4xl font-extrabold text-transparent md:text-5xl drop-shadow"
                >
                  <Highlight>AI-Powered</Highlight> Customer Support
                </h1>
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-xl text-indigo-200 font-semibold drop-shadow"
                  >
                    Agent Customer Support Berbasis AI yang selalu tersedia 24/7, 
                    Menjawab chat dengan cepat & akurat dengan biaya yang sangat terjangkau.
                  </p>
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                    <div className="w-full sm:w-auto">
                      <a
                        className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow sm:w-auto"
                        href="#0"
                      >
                        <span className="relative inline-flex items-center">
                          Coba Sekarang Gratis
                          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                            -&gt;
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="w-full sm:w-auto">
                      <a
                        className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                        href="#0"
                      >
                        Pelajari Lebih Lanjut
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <WavyBackground
          backgroundFill="#030712"
          blur={30}
          speed="fast"
          waveOpacity={0.35}
          colors={["var(--color-primary)", "#818cf8", "#a5b4fc", "#f472b6", "#38bdf8"]}
        >
          <section className="flex min-h-screen items-center justify-center bg-transparent px-4">
            <div className="mx-auto w-full max-w-6xl">
              {/* Hero content */}
              <div className="flex flex-col items-center justify-center py-12 md:py-24">
                {/* Section header */}
                <div className="w-full pb-12 text-center md:pb-20">
                  <h1
                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-extrabold text-transparent md:text-5xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    data-aos="fade-up"
                  >
                    <Highlight>AI-Powered</Highlight> Customer Support
                  </h1>
                  <div className="mx-auto max-w-3xl">
                    <p
                      className="mb-8 text-xl text-indigo-200 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      Agent Customer Support Berbasis AI yang selalu tersedia 24/7, 
                      Menjawab chat dengan cepat & akurat dengan biaya yang sangat terjangkau.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                      <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto">
                        <a
                          className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                          href="#0"
                        >
                          <span className="relative inline-flex items-center">
                            Coba Sekarang Gratis
                            <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                              -&gt;
                            </span>
                          </span>
                        </a>
                      </div>
                      <div data-aos="fade-up" data-aos-delay={600} className="w-full sm:w-auto">
                        <a
                          className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                          href="#0"
                        >
                          Pelajari Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </WavyBackground>
      )}
    </>
  );
}
