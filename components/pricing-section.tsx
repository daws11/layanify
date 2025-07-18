import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Trial ",
    price: (
      <>
        <span className="text-indigo-400 font-bold">Rp. 0</span>
        
      </>
    ),
    description: "7 Hari Basic Plan Acces",
    features: [
      "100 AI Credits",
      "Integrasi WhatsApp dasar.",
      "1 agen aktif",
    ],
    badge: "Coba Gratis Sekarang!",
    highlight: false,
    cta: "Coba Gratis",
    topBadge: null,
  },
  {
    name: "Basic",
    price: (
      <div className="flex flex-col items-center">
        <span className="text-xs line-through text-gray-400 mb-1">Rp. 299.000</span>
        <span className="text-indigo-400 font-bold text-2xl">Rp. 199.000</span>
        <span className="text-sm text-gray-400">/Bulan</span>
      </div>
    ),
    description: "50 Monthly Active Users – cocok untuk UKM.",
    features: [
      "500 AI Credits – untuk respons sederhana.",
      "Integrasi WhatsApp dasar.",
      "1 agen aktif.",
    ],
    badge: "Diskon 30%",
    highlight: false,
    cta: "Pilih Basic",
    topBadge: null,
  },
  {
    name: "Pro",
    price: (
      <div className="flex flex-col items-center">
        <span className="text-xs line-through text-gray-400 mb-1">Rp. 499.000</span>
        <span className="text-indigo-400 font-bold text-2xl">Rp. 399.000</span>
        <span className="text-sm text-gray-400">/Bulan</span>
      </div>
    ),
    description: "200 Monthly Active Users – ideal untuk bisnis menengah.",
    features: [
      "2.000 AI Credits – respons cerdas untuk query kompleks.",
      "Sistem tiket manual.",
      "3 agen aktif.",
    ],
    badge: "Diskon 33%",
    highlight: true,
    cta: "Pilih Pro",
    topBadge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: (
      <div className="flex flex-col items-center">
        <span className="text-xs line-through text-gray-400 mb-1">Rp. 799.000</span>
        <span className="text-indigo-400 font-bold text-2xl">Rp. 599.000</span>
        <span className="text-sm text-gray-400">/Bulan</span>
      </div>
    ),
    description: "1.000 Monthly Active Users – untuk bisnis besar.",
    features: [
      "10.000 AI Credits – kampanye otomatis dan HSM (Highly Structured Messages).",
      "Analitik dasar dan prioritas dukungan teknis.",
      "10 agen aktif.",
    ],
    badge: "Diskon 35%",
    highlight: false,
    cta: "Pilih Enterprise",
    topBadge: null,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Pricing & Plans
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Pilih Paket Sesuai Kebutuhan Bisnis Anda
          </h2>
        </div>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div key={plan.name} className="relative h-full flex w-full">
                {plan.topBadge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-indigo-500 text-white px-4 py-1 text-sm shadow-lg rounded-full border-2 border-indigo-400">{plan.topBadge}</Badge>
                  </div>
                )}
                <Card
                  className={`flex flex-col h-full min-h-[480px] w-full justify-between border-2 ${plan.highlight ? "border-indigo-400 shadow-lg shadow-indigo-500/10" : "border-gray-800"} bg-gray-900/80 relative`}
                >
                  <CardHeader className="flex flex-col items-center text-center gap-2 flex-grow-0">
                    {plan.badge && (
                      <Badge className={plan.highlight ? "bg-indigo-100 text-indigo-700" : "bg-gray-700 text-indigo-200"}>{plan.badge}</Badge>
                    )}
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-200 min-h-[2.5rem] flex items-center justify-center">
                      {plan.name}
                    </CardTitle>
                    <div className="text-2xl md:text-3xl font-extrabold mt-2 min-h-[2.5rem] flex items-center justify-center">{plan.price}</div>
                    <CardDescription className="text-indigo-200/65 mt-2 min-h-[3.5rem] flex items-center justify-center">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 justify-between">
                    <ul className="mb-6 mt-4 space-y-2 text-sm md:text-base text-gray-300 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button className={`w-full ${plan.highlight ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-800 hover:bg-gray-700"} text-white font-semibold`}>
                        {plan.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 