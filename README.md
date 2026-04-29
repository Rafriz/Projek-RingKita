# RINGKITA Monorepo

Struktur proyek sekarang dipisah jelas antara `frontend` dan `backend` agar lebih mudah dipahami dan dikembangkan.

## Struktur Folder

```text
ringkita-react/
  backend/                 # API / server
    package.json
    src/
      app.js
      server.js
    README.md

  frontend/                # React admin dashboard
    package.json
    package-lock.json
    public/
    src/
      app/
      components/
      data/
      features/
      styles/

  build/                   # build lama di root
  node_modules/            # dependency yang sudah ada di workspace
  package.json             # root scripts untuk menjalankan frontend/backend
  README.md
```

## Menjalankan Project

### Frontend

```bash
npm run start:frontend
```

### Backend

```bash
npm run start:backend
```

### Build Frontend

```bash
npm run build
```

## Catatan

- `frontend/` berisi aplikasi React admin desktop.
- `backend/` masih berupa starter structure agar nanti mudah disambungkan ke database dan API.
- Root `package.json` dipakai sebagai command entry agar lebih rapi saat kerja di monorepo.
