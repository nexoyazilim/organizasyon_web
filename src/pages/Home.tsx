import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="textured-background">
      {/* Hero Section */}
      <section
        className="relative w-full h-[700px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${import.meta.env.BASE_URL}arka_plan.jpg")`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight mb-4">
            Organizar Organizasyon
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            
            
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
          Hizmetlerimiz
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-16 rounded-full"></div>

        {/* First Service Row - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="order-1 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}hizmet_1.jpg`}
                alt="Organizasyon Hizmeti 1"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="order-2 space-y-6">
            <h3 className="text-amber-900 dark:text-amber-100 text-2xl md:text-4xl font-bold font-display">
              Özel Etkinlik Organizasyonu
            </h3>
            <p className="text-amber-800 dark:text-amber-200 text-lg leading-relaxed">
              Düğünlerden kurumsal etkinliklere, özel kutlamalardan VIP davetlere kadar her türlü etkinliğinizi 
              kusursuz bir şekilde planlıyor ve hayata geçiriyoruz. Detaylara gösterdiğimiz özen ve profesyonel 
              yaklaşımımızla, hayallerinizdeki etkinliği gerçeğe dönüştürüyoruz.
            </p>
            <ul className="space-y-4 text-amber-800 dark:text-amber-200">
              <li className="flex items-start gap-3 transform transition-transform hover:translate-x-2 duration-300">
                <span className="material-symbols-outlined text-amber-600 mt-1 text-2xl">check_circle</span>
                <span>Mekan seçimi ve dekorasyon</span>
              </li>
              <li className="flex items-start gap-3 transform transition-transform hover:translate-x-2 duration-300">
                <span className="material-symbols-outlined text-amber-600 mt-1 text-2xl">check_circle</span>
                <span>Catering ve menü planlaması</span>
              </li>
              <li className="flex items-start gap-3 transform transition-transform hover:translate-x-2 duration-300">
                <span className="material-symbols-outlined text-amber-600 mt-1 text-2xl">check_circle</span>
                <span>Müzik ve eğlence organizasyonu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Service Row - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-amber-900 dark:text-amber-100 text-2xl md:text-4xl font-bold font-display">
              Profesyonel Danışmanlık
            </h3>
            <p className="text-amber-800 dark:text-amber-200 text-lg leading-relaxed">
              Deneyimli ekibimizle size özel danışmanlık hizmeti sunuyoruz. Etkinliğinizin her aşamasında 
              yanınızdayız. Bütçe planlamasından tedarikçi seçimine, konsept tasarımından koordinasyona 
              kadar tüm süreçlerde profesyonel destek sağlıyoruz.
            </p>
            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105"
              >
                Hizmet Al
              </Link>
              <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
                Size özel teklif almak için iletişime geçin
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}hizmet_2.jpg`}
                alt="Organizasyon Hizmeti 2"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Tüm Hizmetleri Görüntüle
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-amber-900 dark:text-amber-100 mb-6">
                Organizar Hakkında
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="mt-4 text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                15 yılı aşkın tecrübemizle, her biri birer sanat eseri niteliğinde, kişiselleştirilmiş ve
                lüks etkinlikler tasarlıyor, hayata geçiriyoruz.
              </p>
              <p className="mt-4 text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                Müşterilerimizin hayallerini aşan deneyimler sunmak için detaylara gösterdiğimiz özen ve
                kusursuzluk taahhüdümüzle tanınıyoruz.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt="Organizar hakkında görsel"
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTP3G_gPy3_6uzfEJUODEeiUFaVH1OXGmb-VvI71dpiSphLU9rdxpRjWIbPT6JCA1HkAJu8BlmxyUkJR119f8sCE9IkNeS6Zrmr2zDf7fkkCSdNJvlOZlIRhGi9EmqkyOupSPTRHhFaF19WTJAjmHNSlYJYeWQeWKCLU_kx3cI6o6sh2peJimQ-4g-I_MFCDw4UEDUHFPtnTdam-bbGg6Qe7gBFH4eDrOkOXg6br0L4kA5Mgf4-ltOezrvbCYZe0udsgX8ekQFZ3Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-8 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
          Referanslarımız
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Wedding detail shot"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzwobAI0j-4sxvfYhhXUAybb0Km6aPKcuXZ21n_VdxR8p9XsoV9L97pjPkzR8CmUeTT8TfW1x6vsPUJNrJ0JbeT0-n67Zflw18XDVlVA4Bd_iL-gvA1I3D5DjNJmNRtcuIdoMIt6G4NeqaIOivYIDVc3nj8ixxNmWNIs4KeeorApPdSvWpc-E536yemJSEH8sVVZIe7meHPgnVlhVQ8Ue6gxzxtMG8G6ZpDXKTygqDQ5oVgCSneltZIxkqKo3D0gNUmMxi1oHnKdc"
            />
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Corporate event setup"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTP3G_gPy3_6uzfEJUODEeiUFaVH1OXGmb-VvI71dpiSphLU9rdxpRjWIbPT6JCA1HkAJu8BlmxyUkJR119f8sCE9IkNeS6Zrmr2zDf7fkkCSdNJvlOZlIRhGi9EmqkyOupSPTRHhFaF19WTJAjmHNSlYJYeWQeWKCLU_kx3cI6o6sh2peJimQ-4g-I_MFCDw4UEDUHFPtnTdam-bbGg6Qe7gBFH4eDrOkOXg6br0L4kA5Mgf4-ltOezrvbCYZe0udsgX8ekQFZ3Y"
            />
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Joyful celebration"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5vRW9GH6c0oXEXujyjWd9Jn09FJpDgCR-0YpfiW18sN_am7i6Bw0b0h-bvICbH3zw1ymlCIjLY-bdIbl2s9WD67etQhj3EsESWXRBRWvzME1uLkvdAGw-Qc4bswPVYcunoJMQbU4bVPuzzn0fJcLeELt3rVjogX0bLvCwpNk7QDmTN_ZusGBEPATncvDdTW2b7kZN2baMDYHSkeKtld90OiZqxyJdGdyuu1s2foJ4NFpjnyqnSbNCi05Z7hds3PgkCsQK2eZghs"
            />
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Elegant party decor"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxjMZMBH0jOlyUDd5kzR21_pze8uHDxcXWWdRMeRpzZEiYizpC2lUNX7xi6yFpE-hEpVJzNoeUnc0Z-zE71w2VDjCG1i8TM69sGYGYYMuplzn5gGFtP-I6MlLPnYi2YJrQMDckvBLy4rocMTRVG88SQFHLqnjht4sYI37Bzc5eeglHzLTkWK8eLaJ5Ar9ustyYHKKDlqOMkaNhSvRatGQoy5cIRomM0Kk5ye1XKJA9mu09huMVsyRmFlENoyQRiWLcOgm44hJH04"
            />
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Happy couple at wedding"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD-u7e7_HY2SSm-lNYw1XTD_pQsB34hzh4f8QyPrq3nx2eDT4UOjdrPMCvbxY4OlAeV66rjkA2afPrm_7M0_cN5ExqUKqDTI2eXnEyfRy09YxwGRhULs3oo9FP0EF3P0xiPLhDC7b6yhG8nxJMNK0KxJHvQg_owk_u5CFPSFvVhxDm1BHwpzZHflD_tbM93ZFwbupz-RyiUBQneEdllxUkAXPurjJb7tRAbaGU7iVnoFAQv7yvV9jXSvMCgVddhwE8WfGuAosDC5k"
            />
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              alt="Birthday party details"
              className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfW2_L365L4SKLh_-qhZNDGZ-is3UiMYQmAXK-MOVP6ZZcl6uCN1FHhI6HIbdHk0soUZBiVyAi9kcRipPkgmqJsiIapwfgcaxopmEKKA_-1uVNMgma3SJ_-ueoRnwPviykoI1CWix0jIVVhPO6nIoKaj8gsb9MgXWh93_XTeHrIKrgAvldObCADD6jA33p71zjVSgdBdi4lNmbr2qX0tXubhcsTqOHcPOwtIU0YNGTbBREeTKVzeef4sOMQu1NemdL9ZrX2rNYyA"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Tüm Galeriyi Keşfedin
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-6 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
          Sıkça Sorulan Sorular
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-12 rounded-full"></div>
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Başlamak için süreç nedir?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200 space-y-4">
              <p>İlk toplantınızı planlamak için lütfen bizimle iletişime geçin.</p>
              <p>İlk görüşmede size aşağıdaki soruları soracağız:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmet vermemizi istediğiniz etkinlik nedir?</li>
                <li>Seçtiğiniz mekan nedir?</li>
                <li>Beklenen konuk sayınız nedir?</li>
                <li>Bütçeniz nedir?</li>
                <li>Hangi renk düzenini kullanmak istiyorsunuz?</li>
                <li>Hangi dekoratif objeleri kullanmak istiyorsunuz?</li>
                <li>Hangi çiçek aranjmanını kullanmak istiyorsunuz (gerçek, yapay vb.)</li>
                <li>Hangi ek hizmetleri istersiniz? (DJ, fotoğrafçı, kameraman, hukuk hizmetleri)</li>
              </ul>
              <p className="italic">
                Sunduğumuz tüm dekorasyon ürünlerini ofisimizde şahsen kontrol edebilecek veya Instagram sayfamızdaki 
                fotoğraflardan seçim yapmaktan çekinmeyeceksiniz. Seçimleriniz üzerine sizin için bir finansal teklif 
                (tahmin) hazırlayacağız.
              </p>
            </div>
          </details>

          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Düğünler dışında hangi tür etkinliklere hizmet veriyorsunuz?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200">
              <p>
                Tüm organizasyonlarınız için size hizmet verebiliriz. Başlıca hizmetlerimiz; Düğün, Kına, 
                Nişan Organizasyonları ve Kurumsal Etkinliklerdir. Hizmetlerimiz hakkında daha fazla bilgi 
                için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </details>

          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Hizmetlerinizin ücreti nedir?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200 space-y-3">
              <p>Nihai fiyat aşağıdakilere bağlıdır:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Seçtiğiniz mekan</li>
                <li>Haftanın günü</li>
                <li>Seçtiğiniz dekor</li>
                <li>Misafir sayısı</li>
                <li>Seçeceğiniz belirli hizmetler (fotoğrafçı, kameraman)</li>
              </ul>
              <Link 
                to="/contact"
                className="inline-block mt-2 text-amber-700 font-semibold hover:text-amber-900 hover:underline transition-colors"
              >
                Teklifinizi alın →
              </Link>
            </div>
          </details>

          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Hazır paketleriniz var mı?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200">
              <p>
                Hazır paketlerimiz yok. Tarzınıza, zevkinize ve bütçenize uygun kişiye özel çözümler ve 
                teklifler hazırlıyoruz.
              </p>
            </div>
          </details>

          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Düğünümden ne kadar önce sizinle iletişime geçmeliyim?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200">
              <p>
                Etkinliğinizden önce istediğiniz zaman bizimle iletişime geçebilirsiniz. Ancak, daha uygun 
                fiyat teklifleri almak ve daha çok hizmet çeşidi arasından seçimde bulunabilmek için ideal 
                olarak düğün tarihinizden 2-3 ay öncesinde bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </details>

          <details className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 group hover:shadow-xl transition-shadow duration-300">
            <summary className="font-bold text-lg text-amber-900 dark:text-amber-100 cursor-pointer list-none flex items-center justify-between">
              <span>Kaç Yıldır Organizasyon Sektöründe Hizmet Veriyorsunuz?</span>
              <span className="text-amber-600 text-2xl group-open:rotate-180 transition-transform duration-300">▼</span>
            </summary>
            <div className="mt-4 text-amber-800 dark:text-amber-200">
              <p>
                Organizar olarak 2008 yılından beri organizasyon sektöründe faaliyet gösteriyoruz. 
                Bugüne kadar 1500'den fazla etkinliğe hizmet verdik.
              </p>
            </div>
          </details>
        </div>
      </section>


    </div>
  );
}