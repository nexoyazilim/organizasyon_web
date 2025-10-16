import { useState } from 'react';

export default function Concierge() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[700px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${import.meta.env.BASE_URL}arka_plan.jpg")`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight mb-4">
            Concierge Hizmeti: Size Özel Bir Dokunuş
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mb-12">
            Her detayı sizin adınıza düşünen, ayrıcalıklı ve kişiselleştirilmiş organizasyon çözümleri.
          </p>
          <div className="bg-white/90 dark:bg-gray-900/90 p-8 md:p-12 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-text-dark dark:text-text-light text-2xl font-bold font-display mb-6">
              Konsültasyon Talep Edin
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-text-dark dark:text-text-light placeholder-gray-500 focus:ring-primary focus:border-primary"
                  placeholder="Adınız Soyadınız"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-text-dark dark:text-text-light placeholder-gray-500 focus:ring-primary focus:border-primary"
                  placeholder="E-posta Adresiniz"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-text-dark dark:text-text-light placeholder-gray-500 focus:ring-primary focus:border-primary"
                  placeholder="Telefon Numaranız"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-text-dark dark:text-text-light placeholder-gray-500 focus:ring-primary focus:border-primary"
                  placeholder="Etkinlik Türü ve Detayları (Örnek: Lüks Düğün, Kurumsal Gala)"
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="w-full flex items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide shadow-md hover:bg-opacity-90 transition-all"
                type="submit"
              >
                <span className="truncate">Konsültasyon Talep Et</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-text-dark dark:text-text-light text-3xl font-bold font-display text-center mb-12">
            Özel Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-1 flex-col gap-4 rounded-xl border border-primary-light dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center items-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-text-light text-xl font-bold font-display">
                  Lüks Düğünler
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Hayallerinizdeki lüks düğünü gerçeğe dönüştürüyoruz.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 rounded-xl border border-primary-light dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center items-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-text-light text-xl font-bold font-display">
                  Özel Kurumsal Etkinlikler
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Marka imajınızı yücelten prestijli etkinlikler.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 rounded-xl border border-primary-light dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center items-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl">
                <span className="material-symbols-outlined">celebration</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-text-light text-xl font-bold font-display">
                  VIP Kutlamalar
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Unutulmaz anılarla dolu kişiye özel kutlamalar.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 rounded-xl border border-primary-light dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center items-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl">
                <span className="material-symbols-outlined">stylus_note</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-text-light text-xl font-bold font-display">
                  Birebir Konsültasyon
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Deneyimli ekibimizle size özel danışmanlık.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl font-bold font-display text-text-dark dark:text-text-light mb-4">
                Organizar Hakkında
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                15 yılı aşkın tecrübemizle, her biri birer sanat eseri niteliğinde, kişiselleştirilmiş ve
                lüks etkinlikler tasarlıyor, hayata geçiriyoruz. Müşterilerimizin hayallerini aşan
                deneyimler sunmak için detaylara gösterdiğimiz özen ve kusursuziyet taahhüdümüzle
                tanınıyoruz.
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Ekibimiz, yaratıcılığı, planlama ustalığı ve sektördeki derin bilgi birikimiyle, sıradan
                anları olağanüstü anlara dönüştürmek için çalışır. Organizar olarak, her etkinliği
                özel bir hikaye olarak görüyor ve bu hikayeyi en ince ayrıntısına kadar işliyoruz.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                alt="Organizar hakkında görsel"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTP3G_gPy3_6uzfEJUODEeiUFaVH1OXGmb-VvI71dpiSphLU9rdxpRjWIbPT6JCA1HkAJu8BlmxyUkJR119f8sCE9IkNeS6Zrmr2zDf7fkkCSdNJvlOZlIRhGi9EmqkyOupSPTRHhFaF19WTJAjmHNSlYJYeWQeWKCLU_kx3cI6o6sh2peJimQ-4g-I_MFCDw4UEDUHFPtnTdam-bbGg6Qe7gBFH4eDrOkOXg6br0L4kA5Mgf4-ltOezrvbCYZe0udsgX8ekQFZ3Y"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Approach Section */}
      <div className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-text-dark dark:text-text-light text-3xl font-bold font-display text-center mb-12">
            Hizmet Anlayışımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <img
                alt="Hizmet detayları görseli"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzwobAI0j-4sxvfYhhXUAybb0Km6aPKcuXZ21n_VdxR8p9XsoV9L97pjPkzR8CmUeTT8TfW1x6vsPUJNrJ0JbeT0-n67Zflw18XDVlVA4Bd_iL-gvA1I3D5DjNJmNRtcuIdoMIt6G4NeqaIOivYIDVc3nj8ixxNmWNIs4KeeorApPdSvWpc-E536yemJSEH8sVVZIe7meHPgnVlhVQ8Ue6gxzxtMG8G6ZpDXKTygqDQ5oVgCSneltZIxkqKo3D0gNUmMxi1oHnKdc"
              />
            </div>
            <div className="order-2 text-center md:text-left">
              <h3 className="text-3xl font-bold font-display text-text-dark dark:text-text-light mb-4">
                Bespoke Etkinlik Tasarımı
              </h3>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Her etkinlik, sizin benzersiz vizyonunuzu yansıtan, size özel bir sanat eseri olarak
                tasarlanır. Konsept geliştirmeden uygulama aşamasına kadar her adımda kişisel
                tercihlerinizi ön planda tutuyoruz.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Kişiye özel tema ve konsept geliştirme</li>
                <li>Seçkin mekan ve tedarikçi yönetimi</li>
                <li>Detaylı bütçe ve zaman çizelgesi yönetimi</li>
                <li>Etkinlik günü tam koordinasyon ve denetim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-text-dark dark:text-text-light text-3xl font-bold font-display text-center mb-12">
            Referans Galerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Wedding detail shot"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzwobAI0j-4sxvfYhhXUAybb0Km6aPKcuXZ21n_VdxR8p9XsoV9L97pjPkzR8CmUeTT8TfW1x6vsPUJNrJ0JbeT0-n67Zflw18XDVlVA4Bd_iL-gvA1I3D5DjNJmNRtcuIdoMIt6G4NeqaIOivYIDVc3nj8ixxNmWNIs4KeeorApPdSvWpc-E536yemJSEH8sVVZIe7meHPgnVlhVQ8Ue6gxzxtMG8G6ZpDXKTygqDQ5oVgCSneltZIxkqKo3D0gNUmMxi1oHnKdc"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Corporate event setup"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTP3G_gPy3_6uzfEJUODEeiUFaVH1OXGmb-VvI71dpiSphLU9rdxpRjWIbPT6JCA1HkAJu8BlmxyUkJR119f8sCE9IkNeS6Zrmr2zDf7fkkCSdNJvlOZlIRhGi9EmqkyOupSPTRHhFaF19WTJAjmHNSlYJYeWQeWKCLU_kx3cI6o6sh2peJimQ-4g-I_MFCDw4UEDUHFPtnTdam-bbGg6Qe7gBFH4eDrOkOXg6br0L4kA5Mgf4-ltOezrvbCYZe0udsgX8ekQFZ3Y"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Joyful celebration"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5vRW9GH6c0oXEXujyjWd9Jn09FJpDgCR-0YpfiW18sN_am7i6Bw0b0h-bvICbH3zw1ymlCIjLY-bdIbl2s9WD67etQhj3EsESWXRBRWvzME1uLkvdAGw-Qc4bswPVYcunoJMQbU4bVPuzzn0fJcLeELt3rVjogX0bLvCwpNk7QDmTN_ZusGBEPATncvDdTW2b7kZN2baMDYHSkeKtld90OiZqxyJdGdyuu1s2foJ4NFpjnyqnSbNCi05Z7hds3PgkCsQK2eZghs"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Elegant party decor"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxjMZMBH0jOlyUDd5kzR21_pze8uHDxcXWWdRMeRpzZEiYizpC2lUNX7xi6yFpE-hEpVJzNoeUnc0Z-zE71w2VDjCG1i8TM69sGYGYYMuplzn5gGFtP-I6MlLPnYi2YJrQMDckvBLy4rocMTRVG88SQFHLqnjht4sYI37Bzc5eeglHzLTkWK8eLaJ5Ar9ustyYHKKDlqOMkaNhSvRatGQoy5cIRomM0Kk5ye1XKJA9mu09huMVsyRmFlENoyQRiWLcOgm44hJH04"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Happy couple at wedding"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD-u7e7_HY2SSm-lNYw1XTD_pQsB34hzh4f8QyPrq3nx2eDT4UOjdrPMCvbxY4OlAeV66rjkA2afPrm_7M0_cN5ExqUKqDTI2eXnEyfRy09YxwGRhULs3oo9FP0EF3P0xiPLhDC7b6yhG8nxJMNK0KxJHvQg_owk_u5CFPSFvVhxDm1BHwpzZHflD_tbM93ZFwbupz-RyiUBQneEdllxUkAXPurjJb7tRAbaGU7iVnoFAQv7yvV9jXSvMCgVddhwE8WfGuAosDC5k"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                alt="Birthday party details"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfW2_L365L4SKLh_-qhZNDGZ-is3UiMYQmAXK-MOVP6ZZcl6uCN1FHhI6HIbdHk0soUZBiVyAi9kcRipPkgmqJsiIapwfgcaxopmEKKA_-1uVNMgma3SJ_-ueoRnwPviykoI1CWix0jIVVhPO6nIoKaj8gsb9MgXWh93_XTeHrIKrgAvldObCADD6jA33p71zjVSgdBdi4lNmbr2qX0tXubhcsTqOHcPOwtIU0YNGTbBREeTKVzeef4sOMQu1NemdL9ZrX2rNYyA"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-accent text-white text-base font-bold tracking-wide shadow-md hover:bg-opacity-90 transition-all">
              <span className="truncate">Tüm Galeriyi Keşfedin</span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-light dark:bg-gray-800">
        <div className="max-w-4xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display text-text-dark dark:text-text-light">
            Size Özel Teklifinizi Alın
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Konsültasyon talebinizin ardından, hayallerinizdeki etkinliğe özel detaylı teklifimizi
            hazırlayalım.
          </p>
          <div className="mt-8">
            <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide shadow-md hover:bg-opacity-90 transition-all">
              <span className="truncate">Şimdi Teklif Talebi Oluşturun</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

