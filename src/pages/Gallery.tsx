import { useState } from 'react';

interface CaseStudy {
  title: string;
  image: string;
  description: string;
  client: string;
  category: string;
}

export default function Gallery() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      title: 'Aslı & Can Düğünü',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI2cUBS_OxC5xtXsZQjP05bIprCAl-nc2nAtzaQllaohW2EC0n_VpxnecSVBJzIzaHt9vwIT2v6QKgZeXJjK8FrK_MmyAnF5JuX3_Rw9iW3gIkjrt-1ZvuV_ZKaL2aV0y66cunmcqJ0PAcTI-jI2Y0NRcyjgd72NlfVKmluftBKWu4yjGI-ibILwK907utV_v2UB3T5IP1uidSZO7NGE7MyAatQGe7fpOJ3IfDKbBhGFKFGjUA59_FscfV_cW-UPIQgRIgI_-2To4',
      description: 'Rüya gibi bir düğün için her detayı özenle planladık. Beyaz güller ve sıcak mum ışıkları ile romantik bir atmosfer yarattık.',
      client: 'Aslı ve Can',
      category: 'wedding',
    },
    {
      title: 'Kurumsal Lansman',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC_H738BICsyU5ozv4oYF1cwMmXBDg5mqVEmB2Ma5BXLCUN_DLqEXTj5CoroYho8sXrZ1fBPrasdibVlQ8YWVHtptIGjDulJJXS_GUOoE_mB92d_fevWW84vmZaCO9ryPetOvmCLBjy_wkTO8MkCzTZ8AEk9u8OBDRdKo0riBDLsadW-Th9-CRGrXDkCAQaI7fPAoxQunbMeJpwCIW_ElLIXUSS5DDB0l59jLy1YM5HjY9bc6jERzfTLX9GaJDZGTEaiGcwk8VAhw',
      description: 'Şirketinizin marka imajını en iyi şekilde yansıtacak, unutulmaz bir kurumsal lansman etkinliği tasarladık.',
      client: 'Büyük Holding',
      category: 'corporate',
    },
    {
      title: 'Zeynep\'in Kına Gecesi',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlcZMEoXNiArDy5PEZ-ASCRDZrFx3rnZ_LEd2bHe22Jq-8ccKKYX0zEltHd7_p8uYBbTtphneEw7l5g4kD7lx_qd9LH8VDkbqqI1VB4NBgEL4eYzFpoRmWnuwgdvr5mvj9p3UdmnHDLWQHzGl_zddtp7usQm4dKfWSGhHlRTJVgs53bNAtORdQsX8POrR7q88jOIXanMgenoIadgtXKLNbX95ne02AyikvMxrDCBt_QXA1iVsOvAOgU9X_saO0Dt809RK06E0lo7Y',
      description: 'Geleneksel ve moderni bir araya getiren, unutulmaz bir kına gecesi için detaylı bir planlama yaptık.',
      client: 'Zeynep Yılmaz',
      category: 'henna',
    },
    {
      title: 'Ahmet\'in 40. Yaş Günü',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvaOz4rjCNFzZmXcftlDYtmkVxRhOfiw1s35MOR6bNhBxN-Luwv6_1hnBJ-Y-2FxYN4Zoh7DBWYtSbdF9PNAII72e5udwsuUFfK9MVg5VgWgBETkevuexXgQ4eylSbmhBf5fq8bVJBYsunNphPxU2bpF9QB60MZ38_EgQD9grExGoNI1Se2qVQkst4gOuP1k5QeyXC7PbZJe3Y-fAH5oWJFKwiTPdocP3FSFevUfgnTg6kGfh1irblqsSivwg5CmwdcrRMRt99Eeo',
      description: 'Ahmet Bey için özel olarak tasarladığımız 40. yaş günü partisi, eğlence ve şıklığı bir araya getirdi.',
      client: 'Ahmet Demir',
      category: 'birthday',
    },
    {
      title: 'Yaz Düğünü Konsepti',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU_68KMZGxfdAF6fxAkVZpEmJoeEyTND0hxydePYN4t4QNFfYrQDPZcDK84vsCwbf7R2hpYZ_ee_O815GnVD1oGwn118iFT1i_tbYgej-lhqETTDgeSYTycMGzwOUtxh60DIxZ3BzRP3xV0LMdTmrhJfvl5lMBDSAQxH_cTGL8FPKWE8mG4-5x_vfNqMaqO3TJK-lTBHd4ebFuft-fjhqESAxwrhC0xVrjokOo0U6l_c78Nmb_fEBm-7Ugj_MBTKMOxPrQ_GepTWI',
      description: 'Deniz kenarında, gün batımının eşliğinde romantik bir yaz düğünü konsepti.',
      client: 'Ebru & Deniz',
      category: 'wedding',
    },
    {
      title: 'Şirket Yıl Sonu Balosu',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaYQjvPsrmSdrKhbyMMqYwsj3EwvE28s2VLo3KmT87Kp8OCLdbff9tgiP-XoA2Le-QvgLtt6tpXyg2-EhCi-Oz0wfNWvnntwx9K-QRDkysEamM7qH4Vm7s6JrVUwvlk0nODvShHxF-2z1t6msb-1zR--vRrUUYwCD3pI98pgIMGXTwsnTulDvA1-gQfhno1oVGPq7z5uz1wa7sffR3AAmXL3f0V8azmTvHMFXuLym94UUGji6qylZRScTuWFiBQ5UfRWLoS_wCWlM',
      description: 'Yılın yorgunluğunu atmak ve başarıları kutlamak için düzenlediğimiz şık yıl sonu balosu.',
      client: 'Global Şirket A.',
      category: 'corporate',
    },
    {
      title: 'Geleneksel Kına Organizasyonu',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAN_01JrZrPH0i0XkdyTWSHFoMQRaCeKLqrTnYaAM-Oq-j6DCQTdr8vitVZTMbHMYYJM8g1Z4Uc1w4OPStlmjKfaKcn59xlKZb7aV2H8tl-xbA3u8hN5zacyftCNy2fih8EiJL-NqNHeFimMQc9QSLqTKdzojs4TMfS_PUkyYMTUuAn2fTXSYfaSZJDDRKhlFkbpzV-5PRbg8R0LvDYRcHjFJfHErwcUe7ifBL3hdCOPy_lgvRcWVw0sIJTkwPqO70hqJv-9rPxic',
      description: 'Anadolu\'nun zengin kına geleneklerini modern dokunuşlarla birleştiren bir organizasyon.',
      client: 'Ayşe Hanım',
      category: 'henna',
    },
    {
      title: 'Çocuklar için Parti',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB28CD4djJTHGItRNFTjwGnb5R9uP06_38cOT-pTMJk3qR8sSSyZpWL9oz5TcWgOhgYACwqDO8ty_X7bnd0gVq-qcj0hbnfhu4qnQJHQhBpdGtvdBRQ2z_Hc7wnlBJMla2i4LHSJZbSfp1CZAR-3ojb7mxD-uk4ShlvOXEpKTWxkU8m0d4JxdipLPc6BiU2cEwqlUrUzdmWHzKP3pIbL8l1wigD3TcA6qiRtw5BQ2EZ76nyVTtYSw3lQr7D8pECD6jnb2wmBKriEeI',
      description: 'Minik misafirlerimiz için renkli ve eğlenceli bir parti konsepti.',
      client: 'Caner Ailesi',
      category: 'birthday',
    },
  ];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <div className="textured-background min-h-screen">
      <div className="flex justify-center">
        <div className="layout-content-container flex flex-col w-full max-w-6xl">
          <main className="flex-1 px-4 py-8 sm:px-10 sm:py-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <h1 className="text-text-dark dark:text-text-light text-4xl sm:text-5xl font-bold font-display leading-tight tracking-tight">
                  Galeri & Referanslar
                </h1>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 sm:gap-3 p-1 flex-wrap">
                <button
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
                    activeFilter === 'all'
                      ? 'bg-primary/20 dark:bg-primary/30'
                      : 'bg-transparent dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  <p className={`text-sm font-${activeFilter === 'all' ? 'bold' : 'medium'} leading-normal ${activeFilter === 'all' ? 'text-primary' : 'text-text-dark dark:text-text-light/80'}`}>
                    Tümü
                  </p>
                </button>
                <button
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
                    activeFilter === 'wedding'
                      ? 'bg-primary/20 dark:bg-primary/30'
                      : 'bg-transparent dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFilter('wedding')}
                >
                  <p className={`text-sm font-${activeFilter === 'wedding' ? 'bold' : 'medium'} leading-normal ${activeFilter === 'wedding' ? 'text-primary' : 'text-text-dark dark:text-text-light/80'}`}>
                    Düğün
                  </p>
                </button>
                <button
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
                    activeFilter === 'corporate'
                      ? 'bg-primary/20 dark:bg-primary/30'
                      : 'bg-transparent dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFilter('corporate')}
                >
                  <p className={`text-sm font-${activeFilter === 'corporate' ? 'bold' : 'medium'} leading-normal ${activeFilter === 'corporate' ? 'text-primary' : 'text-text-dark dark:text-text-light/80'}`}>
                    Kurumsal
                  </p>
                </button>
                <button
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
                    activeFilter === 'henna'
                      ? 'bg-primary/20 dark:bg-primary/30'
                      : 'bg-transparent dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFilter('henna')}
                >
                  <p className={`text-sm font-${activeFilter === 'henna' ? 'bold' : 'medium'} leading-normal ${activeFilter === 'henna' ? 'text-primary' : 'text-text-dark dark:text-text-light/80'}`}>
                    Kına
                  </p>
                </button>
                <button
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
                    activeFilter === 'birthday'
                      ? 'bg-primary/20 dark:bg-primary/30'
                      : 'bg-transparent dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFilter('birthday')}
                >
                  <p className={`text-sm font-${activeFilter === 'birthday' ? 'bold' : 'medium'} leading-normal ${activeFilter === 'birthday' ? 'text-primary' : 'text-text-dark dark:text-text-light/80'}`}>
                    Doğum Günü
                  </p>
                </button>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredCases.map((caseStudy, index) => (
                  <div
                    key={index}
                    className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[3/4] cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("${caseStudy.image}")`,
                    }}
                    onClick={() => setSelectedCase(caseStudy)}
                  >
                    <p className="text-white text-lg font-bold font-display leading-tight line-clamp-3">
                      {caseStudy.title}
                    </p>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-5xl">
                        visibility
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Case Study Modal */}
          {selectedCase && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 sm:p-8 z-50 opacity-100 transition-opacity duration-300"
              onClick={() => setSelectedCase(null)}
            >
              <div
                className="bg-background-light dark:bg-background-dark rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-text-dark dark:text-text-light p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-white/10 z-10"
                  onClick={() => setSelectedCase(null)}
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
                <div className="p-6 sm:p-10 flex flex-col gap-6">
                  <img
                    alt="Case Study Image"
                    className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
                    src={selectedCase.image}
                  />
                  <h2 className="text-text-dark dark:text-text-light text-3xl sm:text-4xl font-bold font-display leading-tight mb-2">
                    {selectedCase.title}
                  </h2>
                  <p className="text-text-dark/80 dark:text-text-light/70 text-base leading-relaxed mb-4">
                    {selectedCase.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <img
                      alt="Thumbnail 1"
                      className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity shadow-sm"
                      src={selectedCase.image}
                    />
                  </div>
                  <div className="bg-ten-rengi-2 dark:bg-ten-rengi-3 rounded-lg p-6 shadow-inner border border-ten-rengi-3 dark:border-ten-rengi-4">
                    <p className="text-text-dark dark:text-background-dark text-lg font-display italic">
                      "Organizar, hayallerimizdeki etkinliği gerçeğe dönüştürdü. Detaylara
                      gösterdikleri özen ve profesyonellikleri sayesinde her şey kusursuzdu. Sonsuz
                      teşekkürler!"
                    </p>
                    <p className="text-text-dark/70 dark:text-background-dark/80 text-sm font-medium mt-4 text-right">
                      - {selectedCase.client}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

