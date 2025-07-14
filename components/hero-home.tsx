import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Highlight } from "@/components/ui/hero-highlight";

export default function HeroHome() {
  return (
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
                <Highlight>AI-Integrated</Highlight> Customer Support
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-indigo-200/80 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Our landing page template works on all devices, so you only have
                  to set it up once, and get beautiful results forever.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                  <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto">
                    <a
                      className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                      href="#0"
                    >
                      <span className="relative inline-flex items-center">
                        Start Building
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
                      Schedule Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="videos//video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            /> */}
          </div>
        </div>
      </section>
    </WavyBackground>
  );
}
