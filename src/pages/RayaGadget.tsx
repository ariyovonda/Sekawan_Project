
import { Smartphone } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const RayaGadget = () => {
  return (
    <ServiceDetail
      title="Raya Gadget"
      description="Gadai dan cicilan gadget dengan nilai taksiran tinggi dan tenor pembayaran fleksibel. Solusi cepat untuk kebutuhan dana dengan jaminan smartphone, laptop, dan gadget lainnya."
      icon={<Smartphone className="w-8 h-8" />}
      features={[
        {
          title: "Nilai Taksiran Tinggi",
          description: "Dapatkan nilai taksiran hingga 90% dari harga pasar gadget Anda."
        },
        {
          title: "Proses 15 Menit",
          description: "Proses gadai yang cepat, hanya membutuhkan waktu 15 menit untuk pencairan."
        },
        {
          title: "Penyimpanan Aman",
          description: "Gadget Anda disimpan dengan aman dan terawat selama masa gadai."
        },
        {
          title: "Bunga Rendah",
          description: "Nikmati bunga gadai yang rendah dan bersaing di pasaran."
        },
        {
          title: "Cicilan Gadget Baru",
          description: "Cicilan untuk pembelian gadget baru dengan DP rendah dan bunga kompetitif."
        },
        {
          title: "Tenor Fleksibel",
          description: "Pilih jangka waktu gadai atau cicilan sesuai dengan kemampuan Anda."
        }
      ]}
      benefits={[
        "Gadai smartphone, laptop, kamera, dan gadget lainnya",
        "Nilai pinjaman hingga 90% dari nilai taksir",
        "Bunga gadai mulai dari 0,8% per bulan",
        "Tenor gadai dari 1 hingga 12 bulan",
        "Proses cepat dan pencairan instan",
        "Penyimpanan gadget dengan keamanan tinggi"
      ]}
      requirements={[
        "KTP yang masih berlaku",
        "Gadget dalam kondisi baik dan berfungsi normal",
        "Bukti kepemilikan gadget (nota/box/kartu garansi)",
        "Akun iCloud/Google/Mi yang sudah di-logout (untuk gadai smartphone)",
        "Charger dan aksesoris standar"
      ]}
    />
  );
};

export default RayaGadget;
