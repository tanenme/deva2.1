const { MessageMedia } = require("whatsapp-web.js");

class Restitusi {
  static menuGigi() {
    return (
      "Informasi Syarat Reimburse *Pemeriksaan Gigi*\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Regio Gigi\n2. Kwitansi, yang berisi tindakan yang dilakukan (Cabut, Tambal, Jenis Tambalan, Scaling). \n\n" + 
      "Berkas yang sudah lengkap bisa di scan (PDF) dan diupload melalui Portal HC (portalhc.pln.co.id)\n\n"+
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatJalan() {
    return (
      "Informasi Syarat Reimburse *Rawat Jalan*\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Kwitansi Pemeriksaan (Diagnosa)\n" +
      "2. Kwitansi Obat dan Copy Resep\n\n" +
      "Berkas yang sudah lengkap bisa di scan (PDF) dan diupload melalui Portal HC (portalhc.pln.co.id)\n\n"+
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatInap() {
    return (
      "Informasi Syarat Reimburse *Rawat Inap*\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Resume Medis\n" +
      "2. Semua Hasil Lab\n" +
      "3. Kwitansi Pembayaran\n" +
      "4. Detail Resep Obat\n\n" +
      "Berkas yang sudah lengkap bisa di scan (PDF) dan diupload melalui Portal HC (portalhc.pln.co.id)\n\n"+
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuKacamata() {
    return (
      "Informasi Syarat Reimburse *Kacamata*\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Kwitansi Hasil Pemeriksaan Mata\n" +
      "2. Kwitansi Rincian Pembelian Kacamata\n\n" +
      "Berkas yang sudah lengkap bisa di scan (PDF) dan diupload melalui Portal HC (portalhc.pln.co.id)\n\n"+
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static faskesPDF() {
    const media = MessageMedia.fromFilePath(
      './doc/DAFTAR FASKES JAWA TIMUR.pdf'
    );
    return media;
  }
}

module.exports = Restitusi;
