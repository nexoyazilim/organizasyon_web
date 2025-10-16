import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight mb-4">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Hayalinizdeki etkinliği birlikte planlayalım. Size en uygun çözümü bulmak ve unutulmaz anlar yaratmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-12 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
          Teklif Alın & Bize Ulaşın
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
                <InfoItem icon="location_on" title="Adres">
                    Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123
                    <br />
                    Şişli / İstanbul
                </InfoItem>
                <InfoItem icon="phone" title="Telefon">
                    +90 (212) 555 12 34 <br />
                    +90 (555) 123 45 67
                </InfoItem>
                <InfoItem icon="mail" title="E-posta">
                    info@organizar.com <br/>
                    iletisim@organizar.com
                </InfoItem>
                <InfoItem icon="schedule" title="Çalışma Saatleri">
                    Pazartesi - Cuma: 09:00 - 18:00 <br />
                    Cumartesi: 10:00 - 16:00
                </InfoItem>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold font-display text-amber-900 dark:text-amber-100 mb-4">
                Bizi Takip Edin
              </h3>
              <div className="flex space-x-3">
                <SocialLink href="#" ariaLabel="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </SocialLink>
                <SocialLink href="#" ariaLabel="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.51.01-4.745.068-2.68.122-3.824 1.264-3.946 3.946-.058 1.235-.068 1.595-.068 4.745s.01 3.51.068 4.745c.122 2.682 1.266 3.824 3.946 3.946 1.235.058 1.595.068 4.745.068s3.51-.01 4.745-.068c2.68-.122 3.824-1.264 3.946-3.946.058-1.235.068-1.595.068-4.745s-.01-3.51-.068-4.745c-.122-2.682-1.266-3.824-3.946-3.946C15.51 3.975 15.15 3.965 12 3.965zm0 3.225c-2.404 0-4.35 1.946-4.35 4.35s1.946 4.35 4.35 4.35 4.35-1.946 4.35-4.35-1.946-4.35-4.35-4.35zm0 7.15c-1.544 0-2.8-1.256-2.8-2.8s1.256-2.8 2.8-2.8 2.8 1.256 2.8 2.8-1.256 2.8-2.8 2.8zm4.965-7.825c-.78 0-1.415.635-1.415 1.415s.635 1.415 1.415 1.415 1.415-.635 1.415-1.415-.635-1.415-1.415-1.415z"/></svg>
                </SocialLink>
                <SocialLink href="#" ariaLabel="Twitter">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-amber-900 dark:text-amber-100 mb-6">
              Bize Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput id="name" name="name" type="text" label="Adınız Soyadınız" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} required />
                <FormInput id="email" name="email" type="email" label="E-posta Adresiniz" placeholder="ornek@email.com" value={formData.email} onChange={handleChange} required />
                <FormInput id="phone" name="phone" type="tel" label="Telefon Numaranız" placeholder="+90 (555) 123 45 67" value={formData.phone} onChange={handleChange} required />

                <div>
                    <label htmlFor="eventType" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2">Etkinlik Türü *</label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full p-3 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white/50 dark:bg-gray-700/50 text-amber-900 dark:text-amber-100 placeholder-amber-600/70 focus:ring-amber-500 focus:border-amber-500 transition duration-300">
                        <option value="">Seçiniz...</option>
                        <option value="wedding">Düğün</option>
                        <option value="corporate">Kurumsal Etkinlik</option>
                        <option value="henna">Kına Gecesi</option>
                        <option value="engagement">Nişan</option>
                        <option value="birthday">Doğum Günü</option>
                        <option value="other">Diğer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2">Mesajınız *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white/50 dark:bg-gray-700/50 text-amber-900 dark:text-amber-100 placeholder-amber-600/70 focus:ring-amber-500 focus:border-amber-500 transition duration-300" placeholder="Etkinlik tarihi, konuk sayısı, mekan ve diğer detayları buraya yazabilirsiniz..."></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:from-amber-800 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                    Teklif Al
                </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
         <h2 className="text-amber-900 dark:text-amber-100 text-3xl md:text-5xl font-bold font-display text-center mb-4">
            Ofisimiz
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mx-auto mb-12 rounded-full"></div>
        <div className="w-full h-[450px] rounded-2xl shadow-2xl overflow-hidden">
            {/* Replace with your actual Google Maps iframe */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.248381836743!2d29.00699297666244!3d41.04207901614915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a3434289e1%3A0xe5343517833a652a!2zVGVşdmlraXllLCBBbGFiYWzEsW5kYSBTay4gTm86MTIsIDM0MzY1IMSiacWfbGkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1672848984215!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </section>
    </div>
  );
}

// --- Helper Components for cleaner code ---

const InfoItem = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="text-amber-600 text-3xl mt-1">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-1">{title}</h3>
            <p className="text-amber-800 dark:text-amber-200 text-lg leading-relaxed">{children}</p>
        </div>
    </div>
);

const SocialLink = ({ href, ariaLabel, children }: { href: string, ariaLabel: string, children: React.ReactNode }) => (
    <a href={href} aria-label={ariaLabel} className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        {children}
    </a>
);

const FormInput = ({ id, name, type, label, placeholder, value, onChange, required = false }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2">{label} *</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full p-3 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white/50 dark:bg-gray-700/50 text-amber-900 dark:text-amber-100 placeholder-amber-600/70 focus:ring-amber-500 focus:border-amber-500 transition duration-300"
            placeholder={placeholder}
        />
    </div>
);