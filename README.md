# RINGKITA

Prototype aplikasi mobile-first untuk absensi dan manajemen sesi latihan fitness/boxing gym berbasis paket sesi fleksibel.

## Yang sudah dibuat

- UI/UX modern untuk role `Member` dan `Admin`
- Alur pembelian paket sesi, booking jadwal, dan QR check-in
- Dashboard statistik admin
- Riwayat kehadiran dan penggunaan sesi
- Dokumentasi teknis langsung di halaman aplikasi:
  - struktur database
  - daftar endpoint API
  - flow sistem
  - rekomendasi stack backend

## Konsep sistem

1. Admin membuat paket sesi dan jadwal latihan.
2. Member membeli paket sesi seperti 4, 8, atau 12 sesi.
3. Member bebas memilih kelas yang tersedia.
4. Saat hadir, member scan QR untuk check-in.
5. Sistem memvalidasi waktu check-in dan otomatis mengurangi 1 sesi.
6. Jika sesi habis, member harus membeli paket baru.

## Struktur teknis yang direkomendasikan

- Frontend: React.js / React Native
- Backend: Node.js + Express
- Database: Firestore atau MySQL
- Authentication: JWT atau Firebase Auth
- Notification: Firebase Cloud Messaging / OneSignal

## Menjalankan project

```bash
npm install
npm start
```

## Testing

```bash
npm test
```

## Catatan pengembangan lanjutan

- Tambahkan router agar tiap screen menjadi halaman terpisah.
- Hubungkan data dummy ke backend nyata.
- Integrasikan QR scanner kamera dan generator token server-side.
- Tambahkan payment gateway untuk pembelian paket sesi.
