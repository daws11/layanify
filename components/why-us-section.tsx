import { BrainCog, HandCoins, Users, Link2, TrendingUp } from "lucide-react";


const features = [
  {
    icon: <HandCoins className="flex-shrink-0 mt-2 h-8 w-8 text-indigo-400" />,
    title: "Efisiensi Operasional",
    description:
      "Kurangi biaya operasional hingga 50% dengan otomatisasi 80% query repetitif. Tak hanya itu, solusi kami terbukti lebih hemat dibandingkan kompetitor sejenis, memastikan Anda mendapatkan efisiensi maksimal tanpa membebani anggaran.",
  },
  {
    icon: <BrainCog className="flex-shrink-0 mt-2 h-8 w-8 text-indigo-400" />,
    title: "Pengalaman Pelanggan Personal",
    description:
      "AI kami mempelajari preferensi pelanggan untuk memberikan respons yang relevan dan empatik, menciptakan pengalaman yang tak terlupakan bagi setiap pelanggan Anda.",
  },
  {
    icon: <Link2 className="flex-shrink-0 mt-2 h-8 w-8 text-indigo-400" />,
    title: "Integrasi Seamless",
    description:
      "Kompatibel dengan sistem CRM, ERP, dan database bisnis Anda tanpa hambatan teknis. Kami memastikan transisi yang mulus, langsung memberikan nilai tambah pada ekosistem Anda.",
  },
  {
    icon: <TrendingUp className="flex-shrink-0 mt-2 h-8 w-8 text-indigo-400" />,
    title: "Skalabilitas Cepat",
    description:
      "Cocok untuk bisnis dari skala kecil hingga enterprise dengan infrastruktur yang fleksibel dan aman. Tumbuh tanpa batas, tanpa khawatir downtime atau biaya membengkak.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="container mx-auto md:px-6 2xl:max-w-[1400px] py-16 md:py-24">
        <div className="border-t py-10 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-10"></div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-nacelle font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] animate-[gradient_6s_linear_infinite] mb-4">
          Kenapa Harus Kami?
        </h2>
        {/* <p className="text-lg text-indigo-200/65 font-medium">
          Kenapa Memilih Solusi Kami?
        </p> */}
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <div className="flex" key={idx}>
            {feature.icon}
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-1">
                {feature.title}
              </h3>
              <p className="mt-1 text-indigo-200/65">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 