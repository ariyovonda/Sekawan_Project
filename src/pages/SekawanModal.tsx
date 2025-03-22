
import { CreditCard } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const SekawanModal = () => {
  return (
    <ServiceDetail
      title="Sekawan Modal"
      description="Solusi pembiayaan usaha dengan proses cepat dan bunga rendah untuk membantu pengembangan bisnis Anda. Dapatkan modal usaha dengan syarat mudah dan proses pencairan cepat."
      icon={<CreditCard className="w-8 h-8" />}
      features={[
        {
          title: "Proses Cepat",
          description: "Pengajuan diproses hanya dalam 24 jam kerja dengan persyaratan minimal."
        },
        {
          title: "Bunga Kompetitif",
          description: "Nikmati bunga pinjaman yang rendah dan bersaing di pasaran."
        },
        {
          title: "Tenor Fleksibel",
          description: "Pilih jangka waktu pembayaran yang sesuai dengan kemampuan bisnis Anda."
        },
        {
          title: "Pencairan Instan",
          description: "Dana langsung ditransfer ke rekening Anda segera setelah persetujuan."
        },
        {
          title: "Tanpa Agunan",
          description: "Untuk pinjaman dengan limit tertentu, tidak diperlukan jaminan fisik."
        },
        {
          title: "Konsultasi Bisnis",
          description: "Dapatkan saran dari pakar bisnis kami untuk mengembangkan usaha Anda."
        }
      ]}
      benefits={[
        "Pengajuan modal usaha mulai dari Rp5 juta hingga Rp500 juta",
        "Proses persetujuan cepat hanya dalam hitungan jam",
        "Bunga kompetitif mulai dari 0,9% per bulan",
        "Tenor fleksibel dari 3 bulan hingga 24 bulan",
        "Konsultasi gratis untuk pengembangan bisnis"
      ]}
      requirements={[
        "KTP dan NPWP Pemilik Usaha",
        "Bukti usaha minimal telah berjalan 6 bulan",
        "Rekening koran / mutasi 3 bulan terakhir",
        "Dokumen legal usaha (SIUP, TDP, atau NIB)",
        "Foto lokasi usaha"
      ]}
    />
  );
};

export default SekawanModal;
