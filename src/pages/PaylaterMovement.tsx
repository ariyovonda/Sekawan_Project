
import { HomeIcon } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const PaylaterMovement = () => {
  return (
    <ServiceDetail
      title="Paylater Movement"
      description="Kemudahan berbelanja dengan sistem cicilan fleksibel tanpa kartu kredit dan proses instan. Nikmati pembayaran yang nyaman dan terjangkau untuk berbagai kebutuhan."
      icon={<HomeIcon className="w-8 h-8" />}
      features={[
        {
          title: "Tanpa Kartu Kredit",
          description: "Nikmati kemudahan cicilan tanpa harus memiliki kartu kredit."
        },
        {
          title: "Proses Instan",
          description: "Persetujuan cepat dalam hitungan menit dengan verifikasi digital."
        },
        {
          title: "Limit Disesuaikan",
          description: "Limit belanja yang disesuaikan dengan profil dan kemampuan finansial Anda."
        },
        {
          title: "Cicilan Ringan",
          description: "Opsi cicilan mulai dari 3 bulan hingga 12 bulan dengan bunga kompetitif."
        },
        {
          title: "Tanpa Biaya Tersembunyi",
          description: "Semua biaya transparan dan jelas, tanpa ada biaya tersembunyi."
        },
        {
          title: "Partner Merchant Luas",
          description: "Diterima di ribuan merchant partner kami di seluruh Indonesia."
        }
      ]}
      benefits={[
        "Limit belanja hingga Rp20 juta sesuai kualifikasi",
        "Proses pengajuan dan persetujuan kurang dari 10 menit",
        "Cicilan dengan bunga rendah mulai 0,75% per bulan",
        "Pembayaran cicilan fleksibel melalui berbagai channel",
        "Berlaku di ribuan merchant partner kami"
      ]}
      requirements={[
        "WNI berusia 21-55 tahun",
        "KTP yang masih berlaku",
        "Memiliki pekerjaan atau usaha tetap",
        "Rekening bank atas nama sendiri",
        "Slip gaji atau bukti penghasilan"
      ]}
    />
  );
};

export default PaylaterMovement;
