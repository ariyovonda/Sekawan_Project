
import { Coins } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const RayaGoldTrader = () => {
  return (
    <ServiceDetail
      title="Raya Gold Trader"
      description="Investasi emas dengan harga transparan, penyimpanan aman, dan proses transaksi mudah. Kami menawarkan solusi investasi emas fisik dan digital dengan likuiditas tinggi."
      icon={<Coins className="w-8 h-8" />}
      features={[
        {
          title: "Harga Transparan",
          description: "Harga jual dan beli emas selalu mengikuti harga pasar dengan markup yang kompetitif."
        },
        {
          title: "Penyimpanan Aman",
          description: "Emas fisik Anda disimpan di fasilitas penyimpanan berstandar keamanan tinggi."
        },
        {
          title: "Buyback Guarantee",
          description: "Kami menjamin pembelian kembali emas Anda dengan harga pasar terkini."
        },
        {
          title: "Mulai dari 0.5 gram",
          description: "Investasi emas bisa dimulai dari jumlah kecil sesuai kemampuan finansial Anda."
        },
        {
          title: "Emas Digital",
          description: "Opsi investasi emas digital untuk kemudahan transaksi dan monitoring."
        },
        {
          title: "Sertifikat Resmi",
          description: "Setiap pembelian emas dilengkapi dengan sertifikat keaslian yang diakui."
        }
      ]}
      benefits={[
        "Investasi emas mulai dari 0.5 gram",
        "Harga jual dan beli yang kompetitif dan transparan",
        "Sertifikat keaslian dari lembaga terpercaya",
        "Penyimpanan aman dengan standar keamanan tinggi",
        "Likuiditas tinggi dengan jaminan buyback"
      ]}
      requirements={[
        "KTP yang masih berlaku",
        "Rekening bank atas nama sendiri",
        "Email dan nomor handphone aktif",
        "Mengisi formulir aplikasi investasi emas"
      ]}
    />
  );
};

export default RayaGoldTrader;
