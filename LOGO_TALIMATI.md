# Logo Ekleme Talimatı

Sitenizin logosunu eklemek için aşağıdaki adımları takip edin:

## Adım 1: Logo Dosyasını Hazırlayın

Gönderdiğiniz logo görselini aşağıdaki formatlarda kaydedin:

- **PNG formatı** (önerilen): Şeffaf arka plan için ideal
- **Dosya adı**: `logo.png`
- **Önerilen boyut**: Yükseklik 200-300px (genişlik orantılı)

## Adım 2: Dosyayı Public Klasörüne Kopyalayın

Logo dosyanızı projenizin `public` klasörüne kopyalayın:

```
organizasyon_web/
└── public/
    └── logo.png  ← Buraya
```

## Adım 3: Favicon (Site İkonu) Ekleyin (Opsiyonel)

Logo'nuzdan bir favicon de oluşturabilirsiniz:

1. Logo'nun küçük bir versiyonunu (32x32px veya 64x64px) oluşturun
2. `favicon.ico` veya `favicon.png` olarak kaydedin
3. `public` klasörüne kopyalayın
4. `index.html` dosyasındaki bu satırı güncelleyin:

```html
<!-- Şu anki -->
<link rel="icon" type="image/svg+xml" href="/vite.svg" />

<!-- Yeni -->
<link rel="icon" type="image/png" href="/favicon.png" />
```

## Adım 4: Sonucu Kontrol Edin

1. Tarayıcınızda `http://localhost:3000` adresini açın
2. Logo header'da görünüyor olmalı
3. Eğer görünmüyorsa, tarayıcıyı yenileyin (Ctrl+F5)

## Logo Boyutunu Ayarlama

Logo çok büyük veya küçük görünüyorsa, `src/components/Header.tsx` dosyasında şu satırı değiştirin:

```tsx
<img 
  src="/logo.png" 
  alt="Organizar Logo" 
  className="h-12 w-auto"  // h-12 yerine h-8, h-10, h-16 gibi değerler deneyin
/>
```

## Yedek Çözüm: URL Kullanma

Eğer dosyayı public klasörüne ekleyemiyorsanız, logo görselini bir hosting servisine yükleyip direkt URL kullanabilirsiniz:

```tsx
<img 
  src="https://your-image-host.com/logo.png" 
  alt="Organizar Logo" 
  className="h-12 w-auto"
/>
```

## Sorun Giderme

- **Logo görünmüyor**: Dosya adının tam olarak `logo.png` olduğundan emin olun
- **Logo bozuk görünüyor**: PNG formatında ve şeffaf arka planlı olduğundan emin olun
- **Logo çok büyük/küçük**: `className="h-12"` değerini değiştirin (h-8, h-10, h-14, h-16)

