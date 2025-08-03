
'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function KapcsolatPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) {
      setSubmitStatus('A üzenet túl hosszú (maximum 500 karakter)');
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('Üzenetét sikeresen elküldtük! 24 órán belül válaszolunk.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredTime: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('Hiba történt az üzenet küldése során. Kérjük próbálja újra.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-light text-gray-800 mb-6">Kapcsolat</h1>
            <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Vegye fel velem a kapcsolatot bizalmasan. Minden megkeresésre 24 órán belül válaszolok.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-light text-gray-800 mb-8">Írjon nekem</h2>
                
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Név *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonszám
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Érdekes szolgáltatás
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8 appearance-none"
                        >
                          <option value="">Válasszon...</option>
                          <option value="egyeni">Egyéni tanácsadás</option>
                          <option value="online">Online tanácsadás</option>
                          <option value="par">Párterápia</option>
                          <option value="egyeb">Egyéb</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 flex items-center justify-center"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferált időpont
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      placeholder="pl. hétfő délután, szerda reggel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Írja le röviden, miben tudok segíteni..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical"
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 karakter</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
                  </button>

                  {submitStatus && (
                    <div className={`p-4 rounded-md ${submitStatus.includes('sikeresen') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-8">Elérhetőségek</h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mt-1">
                        <i className="ri-phone-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Telefon</h3>
                        <p className="text-gray-600">+36 30 123 4567</p>
                        <p className="text-sm text-gray-500 mt-1">Hétfő-Péntek: 9:00-18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mt-1">
                        <i className="ri-mail-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">dr.sarah@pszichologus.hu</p>
                        <p className="text-sm text-gray-500 mt-1">24 órán belül válaszolok</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mt-1">
                        <i className="ri-map-pin-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Rendelő</h3>
                        <p className="text-gray-600">Budapest, V. kerület</p>
                        <p className="text-gray-600">Váci utca 12., 2. emelet</p>
                        <p className="text-sm text-gray-500 mt-1">Előzetes időpontfoglalással</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mt-1">
                        <i className="ri-time-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Sürgős esetek</h3>
                        <p className="text-gray-600">Krízishelyzet esetén:</p>
                        <p className="text-gray-600 font-medium">Lelki Első Segély: 116-123</p>
                        <p className="text-sm text-gray-500 mt-1">Ingyenes, 24/7 elérhető</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Gyakran ismételt kérdések</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-teal-200 pl-4">
                      <h4 className="font-medium text-gray-800 mb-2">Milyen gyorsan kapok választ?</h4>
                      <p className="text-gray-600 text-sm">Minden megkeresésre 24 órán belül válaszolok, sürgős esetekben még aznap.</p>
                    </div>
                    <div className="border-l-4 border-teal-200 pl-4">
                      <h4 className="font-medium text-gray-800 mb-2">Biztonságos a kapcsolatfelvétel?</h4>
                      <p className="text-gray-600 text-sm">Igen, minden információ szigorúan bizalmas és védett.</p>
                    </div>
                    <div className="border-l-4 border-teal-200 pl-4">
                      <h4 className="font-medium text-gray-800 mb-2">Tudok telefonon is egyeztetni?</h4>
                      <p className="text-gray-600 text-sm">Természetesen, telefonos konzultáció is lehetséges előzetes egyeztetés alapján.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4">Rendelő helyszíne</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Könnyen megközelíthető helyen, a belváros szívében
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.2944481706845!2d19.05200401543989!3d47.49801997917655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc14f3b1b6a7%3A0x8c9db3b6e6b6c4a2!2zVsOhY2kgdXRjYSAxMiwgMTA1MiBCdWRhcGVzdA!5e0!3m2!1shu!2shu!4v1625123456789!5m2!1shu!2shu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                <strong>Tömegközlekedés:</strong> M1, M2, M3 metróval a Deák Ferenc térre, 
                onnan 3 perc séta | Több busz- és villamosjárat is megáll a közelben
              </p>
              <p className="text-gray-600">
                <strong>Parkolás:</strong> Váci utca környékén fizetős parkolózónák, 
                illetve közeli parkolóházak állnak rendelkezésre
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
