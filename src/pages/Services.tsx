import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      {/* Hero Section */}
      <div className="px-4 md:px-0 py-10 md:py-16 max-w-7xl mx-auto">
        <div
          className="flex min-h-[380px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("/arka_plan.jpg")',
          }}
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Hayalinizdeki Organizasyonu Gerçekleştirelim
            </h1>
            <h2 className="text-white text-base md:text-lg font-normal leading-normal">
              Organizar ile unutulmaz anlar yaratın. Profesyonel ekibimizle düğün, kurumsal
              etkinlik ve özel kutlamalarınızı kusursuz bir şekilde planlayalım.
            </h2>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-7xl mx-auto pb-16">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT6tJZdA5_s90Q42_-891wJR1dNHdj5j93psuD67swBbzBk5ka4mrsYHfaMPQg2lgKMJ7mahcKWscMThTocrtrQX4-kJO_zb5CW9V5lVC2nrVPuohpTuoYmVRWlfmF5BN2KQ4NMVs5j3xiPuR9EAyEzvtiaPDMlShmZRQZjKeRIFiPGNASqltSRPL70c2BNYfGv5dZ-auHS1ktMiaDr9kI2f2mJx2WEkRqRRiHqyfzhDyiZvDTaPGP6T5_rMW4lMLkFpsx-u3ajRA")',
            }}
          ></div>
          <div>
            <p className="text-xl font-bold text-text-dark dark:text-text-light">
              Düğün Organizasyonu
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">
              Hayallerinizdeki düğünü gerçeğe dönüştürüyoruz. Her detayı sizin için düşünüyor, size
              sadece anın tadını çıkarmak kalıyor.
            </p>
            <a className="text-primary font-bold mt-2 inline-block" href="#dugun">
              Detayları İncele →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("/salon_2.jpg")',
            }}
          ></div>
          <div>
            <p className="text-xl font-bold text-text-dark dark:text-text-light">
              Kına & Bekarlığa Veda
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">
              Geleneksel ve moderni bir araya getiren, eğlence dolu kına ve bekarlığa veda partileri
              organize ediyoruz.
            </p>
            <Link className="text-primary font-bold mt-2 inline-block" to="/contact">
              Detayları İncele →
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("/salon_1.jpg")',
            }}
          ></div>
          <div>
            <p className="text-xl font-bold text-text-dark dark:text-text-light">
              Kurumsal Etkinlik
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">
              Markanızın prestijini yansıtacak, kusursuz ve etkileyici kurumsal etkinlikler için
              profesyonel çözümler sunuyoruz.
            </p>
            <Link className="text-primary font-bold mt-2 inline-block" to="/contact">
              Detayları İncele →
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdOW_4kxNeB2zo2dPi513mLk3yShxjTJHKCBQGRN0GIoIg8BroV8a68wD8KrgoFUTtih5yZ4_SJYxVZ1Vt6789OxcTZmQCqEbmXk1dPbXDhDTpfidvZA30O_KDz10zdnbNLrWpagkTk-yowGop0T61erys2RCDL6MDV-fgzDwviPeiyH69SvWgkP6jTq_N6lLs3jWCCjOqRXjujsEOz5fTPjAMC4yc7kAdrk5SQiUJZU3ynBVfDudAMILoX6P9Zn7btEfXTg4dWdQ")',
            }}
          ></div>
          <div>
            <p className="text-xl font-bold text-text-dark dark:text-text-light">
              Doğum Günü & Özel Kutlamalar
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">
              Sevdiklerinizle unutulmaz anılar biriktireceğiniz, size özel konseptlerle doğum günü ve
              kutlamalarınızı planlıyoruz.
            </p>
            <Link className="text-primary font-bold mt-2 inline-block" to="/contact">
              Detayları İncele →
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-primary/20 max-w-7xl mx-auto" id="dugun" />

      {/* Wedding Detail Section */}
      <div className="flex flex-col gap-10 md:gap-12 px-4 md:px-0 py-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex min-w-72 flex-col gap-3 max-w-2xl">
            <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-dark dark:text-text-light">
              Düğün Organizasyonu
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal">
              Hayatınızın en özel gününü kusursuz kılmak için buradayız. Profesyonel ekibimizle,
              davetiyeden dekorasyona, müzikten menüye kadar her detayı sizin için planlıyoruz. Siz
              sadece 'Evet' demenin heyecanını yaşayın.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
          >
            <span className="truncate">Teklif Al</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 text-text-dark dark:text-text-light">
              Neler Dahil?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">celebration</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Mekan Seçimi ve Koordinasyonu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">restaurant</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Catering ve Menü Planlaması
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">palette</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Dekorasyon ve Konsept Tasarımı
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">music_note</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Müzik ve Eğlence Organizasyonu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">photo_camera</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Fotoğraf ve Video Çekimi
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 text-text-dark dark:text-text-light">
              Opsiyonel Eklentiler
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">add_circle_outline</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Canlı Müzik Grubu veya DJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">add_circle_outline</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Özel Davetiye Tasarımı
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">add_circle_outline</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Havai Fişek Gösterisi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">add_circle_outline</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Fotoğraf Köşesi (Photo Booth)
                </span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 italic">
              Örnek Fiyat Aralığı: Detaylı görüşme sonrası kişiye özel teklif oluşturulur.
            </p>
          </div>
        </div>

        {/* Reference Gallery */}
        <div>
          <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 text-text-dark dark:text-text-light">
            Referanslarımız
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtWfQuFVnhKeAUt82rdpKg8Q_Iwd5x28ooaU_fJ8TL95Je_gAQa82-fG13FCS_McjJuoC4Zdg_kuefWg98ecmtr0Au680T84DQ2-qfww1JLhkun9FiJn9kAB_tx5QAJio1QzsgZLXicom_MoKJMNMDbYwLSNNTPxJfAQxwUygFPg8WCvI6NDTdQLvz4ECAX5rtwi0nqVphJv82_QRqsEW0MsaLU_nohZioKwiCGq_xJp_eMfEBs-kQw6YpNIfREux8gkgTTQEANOI")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZemKnx1kk-pf-__lzxczBFMnqWh4m0bJoLBF9gPhklKvPOdUTIA57F7iFQAFEugHF36Lpe48Y9GEAHEo74lxu97aUAmDFzQlBxEo6BEjB7g67ZlbH8BgikYGGtHraFVRPtZd84qSWSSdk9xUmZ1NZoRY5rmlEZ9Lt-JSeecj7fvrNJoLhIy0X67V1A-DeIU_ArYtr2MkC99x0MF4BLEakmPVgPgUe03CmXS4nK_zg3A9lli-oqdnO4s6b4jorgPId0eCKUw4rcp8")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWeP4pC4-kBUg-w9YB6QCUB0PHb2XJQow1MdpjlLef5Ful-SyGrDlpxZnCmhy4mE0L3xTaI_181LtFTJhcE3oaJ3kv63T949hxgxo2VhZ4ZBNG3WGGkY-nawMK1kFkK6uUx48AdLOcKTIPb-tATEpudfAbre5e0QoSkG2gPwNzOBUDyraHqBeRVS8ewF1qQl0RwPsYnDSpOChb72Z3o3tp2Wi7V-OqR17_GSQ5Oj0pyyY4GLXEQwujGvrah_uRw160RFPOrMif7DA")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuo0tbLJL6-vMAwTQmsFRB7k4eJ33P9iX1AmgoAgThasJRLU-yJD5jU9hoIswXRrsM7IF4zK1Xg_1z_VpOtV6cVgPuR7Ardl3TKeI4JG8sLBqtTLlDsPfB82AYihOs_hw1FcpgyPLZkD35yVjac8CiKJwmGbrQQrhAwlFc3T5PBJo0f6xZJ-C-VhcK6LgGgApWUrhzeRmQT6zEM31mUXFDCa6aGYwFk8r7naPnmaTXNhZ15WHW9-SxXuCzLCRaVf_UpAFkk_JW5J0")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtcnGa_pTL-w-IRmeNak3-d0aqr1PKcGbkdVCm9_b1Hh4x1X6hI4wpXL_jq4E1aZJb3jK_jcE-M1Gcb4TpusTGBDi1Gpeif4LzVyEsIeCnq1E_K0vycta1_HUs7jiCFZ6BpAFc7fW7GNNVb2cLzSqiZkmFDCJSRdqfWELDIKYgUOGDZ5GDQ8XezVz3WQhnYEp4196pRQwidihEe8BG4VhrCufOByeyka2tDVBk_5w4VVy5VhmXyVO7-iYR2YjF1Fq-O56DqxZ3hL0")',
              }}
            ></div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDerQifT-ds8U5-h3DGWbvZ4s4cTmDdBxNk3UesnnoK73sUdtDx3e3qu4_WPPJJSI0MNQO9rP95qTTZ-owsh7yHXG07ogjGl00V5ZO4Xzbc1YSwXCbSM5ublzkm7ShI6LkkxOfKOffuRMJuu8r7_EiJfU06RsOwejhQZCL59h9n3t-asFxSlCsxGcZDOw2NZ0XKaLlsRnufgwvJXQy8x-BndI8IE_ZOSoWEQOb9_luwVNgxcOlF2nM36sd4As_hEN5qOPBmgxoICY0")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

