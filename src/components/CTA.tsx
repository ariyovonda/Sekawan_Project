
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-financial-800 to-financial-900 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-financial-700/30 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gold/10 filter blur-3xl"></div>
      </div>
      
      <div className="content-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="text-white">
              <h2 className="mb-6">Siap Wujudkan <span className="text-shine">Masa Depan Finansial</span> yang Lebih Baik?</h2>
              <p className="text-financial-100 text-lg mb-8">
                Tim kami siap membantu Anda menemukan solusi keuangan terbaik 
                yang sesuai dengan kebutuhan. Hubungi kami sekarang atau kunjungi kantor 
                cabang DanaSejahtera terdekat.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                <div className="bg-financial-700/40 backdrop-blur-sm rounded-lg p-4 border border-financial-600/30">
                  <Phone className="w-6 h-6 text-gold-light mb-3" />
                  <h4 className="font-medium mb-1">Hubungi Kami</h4>
                  <p className="text-financial-200 text-sm">0800-1234-5678</p>
                </div>
                
                <div className="bg-financial-700/40 backdrop-blur-sm rounded-lg p-4 border border-financial-600/30">
                  <Mail className="w-6 h-6 text-gold-light mb-3" />
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-financial-200 text-sm">info@danasejahtera.id</p>
                </div>
                
                <div className="bg-financial-700/40 backdrop-blur-sm rounded-lg p-4 border border-financial-600/30">
                  <MapPin className="w-6 h-6 text-gold-light mb-3" />
                  <h4 className="font-medium mb-1">Jam Operasional</h4>
                  <p className="text-financial-200 text-sm">Senin - Jumat, 08:00 - 16:00</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-financial-900 button-shine">
                Temukan Cabang Terdekat
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-financial-800 mb-6">Ajukan Pinjaman</h3>
              <form className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-financial-700">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-financial-200 focus:ring-2 focus:ring-financial-500 focus:border-financial-500 outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-financial-700">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-financial-200 focus:ring-2 focus:ring-financial-500 focus:border-financial-500 outline-none transition-all"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-financial-700">Jenis Layanan</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-financial-200 focus:ring-2 focus:ring-financial-500 focus:border-financial-500 outline-none transition-all"
                  >
                    <option value="" disabled selected>Pilih jenis layanan</option>
                    <option value="gadai">Gadai Barang</option>
                    <option value="kredit-mikro">Kredit Mikro</option>
                    <option value="pembiayaan">Pembiayaan Usaha</option>
                    <option value="multiguna">Kredit Multiguna</option>
                    <option value="investasi">Investasi Emas</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-financial-700">Pesan</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-financial-200 focus:ring-2 focus:ring-financial-500 focus:border-financial-500 outline-none transition-all resize-none h-24"
                    placeholder="Jelaskan kebutuhan Anda"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-financial-700 hover:bg-financial-800 button-shine text-white py-4">
                  Kirim Pengajuan
                </Button>
                
                <p className="text-xs text-financial-500 text-center mt-3">
                  Dengan mengirimkan formulir ini, Anda menyetujui{" "}
                  <a href="#" className="text-financial-700 hover:underline">Syarat & Ketentuan</a>{" "}
                  dan <a href="#" className="text-financial-700 hover:underline">Kebijakan Privasi</a> kami.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
