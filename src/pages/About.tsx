import { useState } from 'react';

// TeamMember arayüzünü tanımlıyoruz
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Ekip üyeleri verisi
  const teamMembers: TeamMember[] = [
    {
      name: 'Elif Yılmaz',
      role: 'Kurucu & Kreatif Direktör',
      bio: 'Elif Yılmaz, 10 yılı aşkın deneyimiyle her detayı bir tutkuya dönüştürüyor ve Organizar\'ı sektördeki öncü isimlerden biri haline getirdi. Misyonu, hayal gücünü gerçeğe dönüştürerek her etkinliği unutulmaz kılmaktır.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO0M8zD9GfFZgkQV-AKjMjX_wIssQsYAq2pA6UiYPZZ1fXtOOylXGpk_S2tw12twsn4NW63Ya5pIsvMZB1T5NeLi4jgjrqkLDn1N4PVxhgg7wB56XRUddLZztQcIPDzwf04nG9e8Pb2bkyaVRAwFOBHa018bNeJI21WoAE_IAnH_Gd5Ail7_UpjQvaP54EcQDEKJbxAdUFiEYA4n5nYE-3hApWu724pTwvVGzzx8Jrv-uCFqnr6XLoktmdeCPozgrW1N4OWzHo434',
    },
    {
      name: 'Ahmet Kaya',
      role: 'Operasyon Direktörü',
      bio: 'Ahmet Kaya, Organizar\'ın operasyonel mükemmelliğinin arkasındaki beyin. Lojistik ve planlama konusundaki uzmanlığıyla her etkinliğin sorunsuz ve zamanında gerçekleşmesini sağlar.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs_e_CapPEAxoXTgNUca_4Kjm0dDId3Ipld2k754nnYCABHdRdUwAMVI3tX2HqutfcmR60-ZdVt277XK4WQDSyZC__pTd-O_WCs111UzYojS1KCEgof6uPM160lzrhlqFr6UmoX3k53b-6HIe-neoVslWWZLpvKvO7WhrBYnN159KpifxMD9a4rACFgYceP_D2oyJScl65n-tOplHMUnyigrpGVR3Yl-AYwZRhZ9T3r2IjYf63fiYB1x2St6rd-8gi1hW2bePAqGk',
    },
    {
      name: 'Zeynep Demir',
      role: 'Etkinlik Tasarımcısı',
      bio: 'Zeynep Demir, Organizar\'ın sanatsal vizyonunu hayata geçiren yetenekli tasarımcı. Mekanları masalsı atmosferlere dönüştüren yaratıcı ruhuyla tanınır.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Hju7bCo1PUpHL4Pz7alMT1jHwYt6Zeg3OFUjWpYJmlQB5vVZLxwoupnVurGUc4M1haUY6yrWMpD2MnrpP6kVmQ1FKTCjMA6hxFbRgpdNpmmrOjvidYBDkOktHBbSXSifQKfYhBeHwy0hONXvlfhfWJPTFdi5cGv9YZU5u9cXdMTDgOvewmcK7RBVhOzVIpSnzmWwzr-6X10UzXLy2JuPV6dWqn8TFd0dP-r6gNGMaRx8Mr22EWqVF90z7WjGd-MMaD-mCB75hgw',
    },
    {
      name: 'Burak Can',
      role: 'Etkinlik Koordinatörü',
      bio: 'Burak Can, detaylara olan düşkünlüğü ve kusursuz organizasyon yeteneği ile tanınır. Müşteri memnuniyetini ön planda tutarak her etkinliğin beklentileri aşmasını sağlar.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwvGwYYLvglYX88EZODlt1do53_Gfc9JI-3BOmCmvsN629RUZugvO3uPkyyj7_ooaq60KHzibq-ofKVYIjmhT0PGinO5-zzi7Nk8bSW4lghLgOBfLGKYrxlSwe_FLahlA4TZpNDbm4BWxMgtYGA_s8RXaeROCFzAXPeWhChaS4hWMdVTv0DoyZVSoraDe9d3mg9wKgK6JU3T_gGwNeZwRS8S2s0h6PktiAFAnYT4Uzak9DHVGiugOQKm_qZ1MF-Fe4oyYwrFArrog',
    },
  ];

  // Proje verileri
  const projects = [
    { category: 'wedding', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN4HI4kydumF6VbU_OBkdyXGYzHLPTvehpy9HMXe-ORaoJqrmK1bEEdgRdYQEabSEDt3RnGmlTYKlMWfFBJnKGw5vzchgb3d4Ct7kqqXvIsk2fuKTfDpWsHe3u_Q59qi-7pBoO-TMf25jyreX_pmTi5Ups8RYXRJVL0PxLrtnCcEP24XhlYI_ELLelpV9mI8-wyM9X0XEJ_O-woTBYNwTT5UK0o5sEiLnTZSZS2-sRkOw36ZEwbZ15WMc6hEp56hHubvhdes-AnOs', title: 'Boğaz\'da Rüya Düğün' },
    { category: 'corporate', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTP3G_gPy3_6uzfEJUODEeiUFaVH1OXGmb-VvI71dpiSphLU9rdxpRjWIbPT6JCA1HkAJu8BlmxyUkJR119f8sCE9IkNeS6Zrmr2zDf7fkkCSdNJvlOZlIRhGi9EmqkyOupSPTRHhFaF19WTJAjmHNSlYJYeWQeWKCLU_kx3cI6o6sh2peJimQ-4g-I_MFCDw4UEDUHFPtnTdam-bbGg6Qe7gBFH4eDrOkOXg6br0L4kA5Mgf4-ltOezrvbCYZe0udsgX8ekQFZ3Y', title: 'Teknoloji Zirvesi Lansmanı' },
    { category: 'private', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2vq4M8lFPXvnN2Aw0yGoBeripv02o367XZYsGuKVpoPT7G30_5LerUKL45-rmA2Oixd1C4mmelDVH-peRYyUPee3SzEuVNpn7XB8ZSgp2JncdZ9VKK6iha8SFI93yGd_gcliSQjuzUi8f7GwO0trx0RgtlnIehRfs3Y2lMS_sqlEp36nUdck3tWG_L3kvD21tp0otRGvnrzwBipop865sFL-Qo_JNnvQS0VwDFtpsb8QNYQvd125F_3PY8JeatZ4XnA1nrr-Rmjs', title: 'Yasemin\'in 30. Yaş Günü' },
    { category: 'wedding', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWvyXHyxD-K_TdL0w5zJP7FznMkPiaCxmHYDiXP6qhrFrCdVI1Til2vQo_IjSQZUdDiGU89FcLmrRvTlLDsPNzovxiwmFLWlMjyr-b-ktyAyJZKrsLKpPIvQc1tHPIgVetSaJ4kn0JcULMcS_fp-b8p8cDMKE78ZhwLjRi96EnJPXFTBXlUT2HIM0xZgHfjPXNqbLedQWDe0ohrq65-SjtL4oqtV-j1KnjdBx4PgIk30oAwBam7G5pygyyXc-IGq86sfzWZMCqt2o', title: 'Tarihi Konakta Nişan' },
    { category: 'corporate', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQV4WZ98cycI5Ra6rMEicrLrhsXkD_c0mNUTEg_uL8Zc-v3JfKAFTgFXy2pT9h3IiObdjsR789-DLtYixlQjeezYlRoosBTeNiobpGSK0KeaRKksEi_Myl_xJsREZ6Wyi8SAgbvarvXgoLyDSLbhlYFRROZoQYSOdeVd0EkzfVuRzWeC6TtMKKnnVOTI0wYFGZtRWsRJcXCM7kaImWUbsElBpGPlzmpCfZp1_y3OkElsMy3w5s8EQGZcJz9HS01JZcZUQcIjFmNsI', title: 'Şirket Yıl Sonu Balosu' },
    { category: 'private', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB08hkN5N7xwAAO80tBgVxGpd2avUThhSVB_Oq7ZYlsOVLy7pQRxQCKNwwH59tiAqB_hudTOfSNvjfUcniJrW1lP9zjVynoxFl0WxMNMGS9tHgO7AAhqXX-DmB_w1szH8zmn7cLtP9aF-Gq1yd4-nlxAKw2WJyuESTWScObMmbs5lkDT0OeKP8juhYnkIQZbQpAd8aKAiuUMCIXT4MeOumebQ-e9bmrIgFveek5zVeQLFPJxL76nMsbChAYEGLEzH1LmuGwk92fpb0', title: 'Hoş Geldin Bebek Partisi' },
  ];

  // Filtrelenmiş projeler
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="textured-background">
      {/* Hero Section */}
      <section
        className="relative w-full h-[450px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("/arka_plan.jpg")',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight">
            Hayallerinizi Şekillendiriyoruz
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-12 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-amber-900 dark:text-amber-100">
              Tutkumuzla Tanışın
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-full"></div>
            <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
              Organizar, 15 yılı aşkın tecrübesiyle en özel anlarınızı unutulmaz kılmak için kuruldu. Kurucumuz Elif Yılmaz'ın vizyonuyla, her etkinliği bir sanat eseri gibi titizlikle işliyoruz.
            </p>
            <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
              Yaratıcılık, detaylara gösterilen özen ve kusursuz uygulama tutkumuzla, hayallerinizdeki etkinlikleri gerçeğe dönüştürüyoruz. Size sadece anın tadını çıkarmak kalır.
            </p>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                alt="Organizar ekibinin profesyonel bir fotoğrafı"
                src="/public/yonetici_foto.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto text-center">
          <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
            Ekibimizle Tanışın
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center gap-4 cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 border-4 border-white dark:border-gray-700"
                  alt={member.name}
                  src={member.image}
                />
                <div>
                  <h3 className="text-lg font-bold font-display text-amber-900 dark:text-amber-100">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl max-w-sm w-full relative border-2 border-amber-200 dark:border-amber-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100 transition"
              onClick={() => setSelectedMember(null)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <img
              className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white"
              alt={selectedMember.name}
              src={selectedMember.image}
            />
            <h3 className="text-2xl font-bold font-display text-center text-amber-900 dark:text-amber-100">
              {selectedMember.name}
            </h3>
            <p className="text-amber-600 dark:text-amber-400 font-medium text-center mb-4">
              {selectedMember.role}
            </p>
            <p className="text-base text-amber-800 dark:text-amber-200 text-center leading-relaxed">
              {selectedMember.bio}
            </p>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section className="py-16 md:py-12 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
            Öne Çıkan Projelerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-y-2">
            <FilterButton label="Tümü" filter="all" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <FilterButton label="Düğün" filter="wedding" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <FilterButton label="Kurumsal" filter="corporate" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <FilterButton label="Özel" filter="private" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-bold font-display">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for filter buttons to keep the main component cleaner
const FilterButton = ({ label, filter, activeFilter, setActiveFilter }: any) => {
    const isActive = activeFilter === filter;
    return (
        <button
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
                    : 'bg-amber-100/50 dark:bg-gray-700/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveFilter(filter)}
        >
            {label}
        </button>
    );
};