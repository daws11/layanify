import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const faqList = [
  {
    question: "Apakah ada risiko pemblokiran akun WhatsApp jika menggunakan layanan ini?",
    answer:
      "Kami menerapkan protokol keamanan ketat untuk memastikan interaksi WhatsApp tetap aman dan sesuai dengan ketentuan layanan. Selain itu, kami akan memberikan panduan penggunaan yang optimal untuk menghindari aktivitas yang berpotensi memicu pemblokiran.",
  },
  {
    question: "Apa yang membedakan paket Trial dan Basic dari paket lainnya?",
    answer:
      "Paket Trial dan Basic dirancang untuk bisnis dengan volume interaksi rendah, memungkinkan penggunaan yang hemat sumber daya. Paket ini ideal untuk UKM atau pengguna individu yang ingin mencoba fitur dasar sebelum beralih ke paket yang lebih komprehensif di masa depan.",
  },
  {
    question: "Bagaimana sistem AI Credit bekerja?",
    answer:
      "AI Credit digunakan untuk mengakses respons cerdas dari AI Agent. Setiap interaksi sederhana (misalnya, jawaban otomatis) hanya menghabiskan 1–2 credit, sementara permintaan kompleks (seperti analisis data atau pembuatan konten) menggunakan lebih banyak credit. Anda dapat melakukan top-up AI Credit kapan saja sesuai kebutuhan.",
  },
  {
    question: "Apakah batas Monthly Active Users bisa direset lebih awal jika sudah habis?",
    answer:
      "Batas MAU direset otomatis setiap tanggal 1 untuk memastikan penggunaan yang adil. Jika Anda membutuhkan MAU tambahan di tengah bulan, Anda dapat upgrade paket atau membeli alokasi tambahan melalui sistem kami.",
  },
  {
    question: "Apakah saya bisa mengubah metode pembayaran?",
    answer:
      "Ya, Anda dapat mengganti metode pembayaran ke kartu kredit atau sistem berlangganan (recurring) kapan saja. Namun, perubahan akan berlaku setelah pembayaran sebelumnya (jika ada) selesai diproses.",
  },
  {
    question: "Mengapa saat ini layanan hanya mendukung integrasi dengan WhatsApp?",
    answer:
      "Saat ini, kami fokus pada WhatsApp sebagai platform utama karena tingginya adopsi dan keandalan untuk bisnis di Indonesia. Namun, kami sedang mengembangkan integrasi dengan platform lain seperti Shopee, Tokopedia, Instagram, dan marketplace besar lainnya untuk memenuhi kebutuhan omnichannel pelanggan Anda.",
  },
  {
    question: "Apakah ada batas waktu penggunaan AI Credit?",
    answer:
      "Tidak, AI Credit yang Anda beli tidak memiliki masa berlaku dan bisa digunakan kapan saja, bahkan jika Anda menunda penggunaan layanan.",
  },
  {
    question: "Apakah layanan ini mendukung integrasi dengan sistem CRM atau ERP yang sudah saya miliki?",
    answer:
      "Saat ini, kami menyediakan integrasi dasar melalui API untuk sinkronisasi data sederhana. Untuk kebutuhan lanjutan seperti integrasi dengan sistem ERP atau database bisnis, fitur ini akan tersedia di paket premium di masa depan.",
  },
  {
    question: "Apakah ada prioritas dukungan teknis untuk paket Trial atau Basic?",
    answer:
      "Paket Trial dan Basic mendapatkan dukungan melalui chatbot AI dan dokumentasi lengkap. Untuk kebutuhan prioritas, Anda dapat upgrade ke paket Pro atau Enterprise di masa mendatang.",
  },
  {
    question: "Kapan integrasi dengan platform seperti Shopee, Tokopedia, atau Instagram akan tersedia?",
    answer:
      "Kami sedang dalam proses pengembangan integrasi lintas-platform untuk memudahkan manajemen interaksi pelanggan di berbagai kanal. Rencana peluncuran akan diumumkan secara bertahap melalui email dan dashboard pengguna.",
  },
  {
    question: "Bagaimana cara memastikan data pelanggan saya aman?",
    answer:
      "Kami menggunakan enkripsi end-to-end untuk semua data yang disimpan atau diproses, termasuk riwayat percakapan dan preferensi bisnis. Selain itu, kami mematuhi standar keamanan industri untuk melindungi data Anda dari akses tidak sah.",
  },
  {
    question: "Apakah saya bisa mengatur persona atau tone respons AI sesuai brand saya?",
    answer:
      "Ya! Anda dapat mengonfigurasi persona AI (misalnya, nada formal, santai, atau ramah) dan menyimpan template respons khusus di dashboard pengguna. Fitur ini memungkinkan AI Agent memberikan jawaban yang selaras dengan identitas brand Anda.",
  },
  {
    question: "Apa yang terjadi jika saya kehabisan AI Credit?",
    answer:
      "Jika AI Credit habis, layanan akan tetap aktif untuk menerima pesan dan menyimpan riwayat percakapan, tetapi respons cerdas dari AI akan terhenti hingga Anda melakukan top-up AI Credit.",
  },
  {
    question: "Apakah ada batasan jumlah agen aktif di paket Trial atau Basic?",
    answer:
      "Paket Trial dan Basic dirancang untuk 1 agen aktif agar sesuai dengan anggaran bisnis kecil. Jika Anda memerlukan lebih banyak agen, fitur ini akan tersedia di paket Pro atau Enterprise di masa depan.",
  },
  {
    question: "Apakah uji coba gratis tersedia untuk semua paket?",
    answer:
      "Uji coba gratis hanya tersedia untuk Paket Trial dengan fitur dasar. Untuk paket lain, kami menawarkan konsultasi gratis dengan tim kami untuk memandu Anda memulai layanan.",
  },
  {
    question: "Bagaimana cara memastikan respons AI relevan dengan produk atau layanan saya?",
    answer:
      "Anda dapat mengunggah data preferensi bisnis (misalnya, deskripsi produk, FAQ, atau kebijakan pengiriman) ke dashboard pengguna. Data ini akan digunakan AI untuk memberikan respons yang akurat dan personal.",
  },
  {
    question: "Apakah saya bisa membatalkan langganan kapan saja?",
    answer:
      "Ya, Anda dapat menghentikan langganan kapan saja melalui dashboard pengguna. Langganan akan tetap aktif hingga akhir periode pembayaran, dan Anda tidak akan dikenakan biaya tambahan.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full max-w-2xl mx-auto py-16 px-4" id="faq">
      {/* Decorative shape */}
      <Image
        src="/images/blurred-shape.svg"
        alt="Shape"
        width={200}
        height={200}
        className="absolute -top-10 -left-10 opacity-30 pointer-events-none select-none"
        aria-hidden="true"
      />
      <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
      <Accordion type="single" collapsible>
        {faqList.slice(0, 5).map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center mt-8">
        <Link href="/faq" className="inline-block px-6 py-2 bg-primary text-white rounded-md font-medium shadow hover:bg-primary/90 transition">
          Lihat FAQ Lainnya
        </Link>
      </div>
    </section>
  );
} 