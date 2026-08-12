# Altıntaş Personalmanagement GmbH

Statik Kurumsal Web Sitesi — Altıntaş Personalmanagement GmbH.

## 🚀 Vercel ile Yayınlama Talimatları

Proje Vercel üzerinde sorunsuz yayınlanacak şekilde yapılandırılmıştır (`vercel.json`, `package.json`, `.vercelignore` ve özel `404.html` eklendi).

### Yöntem 1: GitHub / GitLab / Bitbucket Üzerinden (Önerilen)
1. Bu projeyi **GitHub** deponuza yükleyin (push edin).
2. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin.
3. **"Add New..."** → **"Project"** butonuna tıklayın.
4. GitHub deponuzu seçip **Import** edin.
5. **Framework Preset**: `Other` seçin.
6. **Build Command** ve **Output Directory** alanlarını boş bırakın (statik site olduğu için otomatiktir).
7. **Deploy** butonuna basın. Siteniz saniyeler içinde canlıya alınacaktır.

---

### Yöntem 2: Vercel CLI (Komut Satırından Tek Komutla)
Terminelde proje klasöründeyken şu komutu çalıştırın:

```bash
npx vercel
```
İstenen adımları (Y/n) onayladıktan sonra siteniz yayınlanacaktır. Üretim (production) canlısına almak için:

```bash
npx vercel --prod
```

---

### Yöntem 3: Masaüstünden Sürükle & Bırak (Vercel Web UI)
1. [Vercel Dashboard](https://vercel.com/dashboard) açın.
2. Proje klasörünü ekranın ortasına sürükleyip bırakın.

---

## ⚡ Özellikler & Konfigürasyon
- **Clean URLs (`cleanUrls: true`)**: `.html` uzantıları adres çubuğunda gizlenir (Örn: `site.com/unternehmen`).
- **Önbellek Optimizasyonu (Cache Control)**: Resim, video, CSS ve JS dosyaları için tarayıcı önbellekleme header'ları aktif.
- **Özel 404 Sayfası**: Hatalı URL ziyaretlerinde marka tasarımına uygun 404 ekranı.
- **Çoklu Dil Desteği (DE / TR / EN)**: Tüm sayfalarda aktif dil seçici.
