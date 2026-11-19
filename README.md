# Server Website JULL

Paket ini sudah berisi file website JULL milikmu sebagai `index.html`, ditambah server Node.js.

## Menjalankan di komputer
1. Instal Node.js versi LTS.
2. Ekstrak ZIP ini.
3. Buka terminal/command prompt di folder hasil ekstrak.
4. Jalankan:

```bash
npm install
npm start
```

5. Buka `http://localhost:3000`.
6. Cek server di `http://localhost:3000/api/health`.

## Supabase
Website ini sudah menggunakan Supabase Auth dan konfigurasi project yang tertanam pada HTML.
Server Node.js ini hanya menyajikan file website; autentikasi dan database tetap diproses oleh Supabase.
Jangan pernah memasukkan `service_role` key ke HTML atau membagikannya. Gunakan hanya anon/publishable key di sisi browser dengan RLS yang benar.

## Agar bisa diakses orang lain
`localhost` hanya bisa diakses dari perangkat/server yang menjalankannya. Untuk akses publik, deploy folder ini ke layanan hosting Node.js yang mendukung aplikasi Express, lalu atur domain dan HTTPS. Jangan menganggap server sudah online di internet hanya dengan menjalankan file ini di HP.
