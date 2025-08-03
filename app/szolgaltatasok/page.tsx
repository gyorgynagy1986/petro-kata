
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SzolgaltatasokPage() {
  const services = [
    {
      title: 'Egyéni Terápia',
      description: 'Személyre szabott terápiás folyamat, amely az Ön egyedi igényeihez és céljaihoz igazodik.',
      areas: ['Szorongás és depresszió', 'Életátmenetek kezelése', 'Önértékelés fejlesztése', 'Stresszkezelés'],
      link: '/szolgaltatasok/egyeni-tanacsadas',
      image: 'Individual therapy session in comfortable office setting, therapist and client in conversation, warm natural lighting, modern furniture, plants and books creating calming atmosphere'
    },
    {
      title: 'Párterápia',
      description: 'Kapcsolatok megerősítése jobb kommunikáció és megértés kialakításával.',
      areas: ['Kommunikációs készségek', 'Konfliktuskezelés', 'Intimitás építése', 'Bizalmi problémák'],
      link: '/szolgaltatasok/kapcsolat',
      image: 'Couple therapy session with therapist facilitating conversation between partners, comfortable seating arrangement, soft lighting, professional yet warm environment'
    },
    {
      title: 'Online Konzultáció',
      description: 'Kényelmes és biztonságos online terápiás lehetőség otthonról.',
      areas: ['Videohívás terápia', 'Rugalmas időpontok', 'Biztonságos platform', 'Személyre szabott megközelítés'],
      link: '/szolgaltatasok/online-tanacsadas',
      image: 'Professional online therapy session setup with laptop showing video call interface, comfortable home office environment, good lighting and professional background'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light text-gray-800 mb-6">Szolgáltatások</h1>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Átfogó mentálhigiénés szolgáltatások, amelyek az Ön egyedi igényeihez igazodnak és támogatják az egészség felé vezető utat.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Bservice.image%7D&width=400&height=250&seq=service_${index}&orientation=landscape`}
                    alt={service.title}
                    className="w-full h-48 object-top"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-8">
                      {service.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link} className="inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                      Részletek megtekintése
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Terápiás megközelítés</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-3-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Empatikus megközelítés</h3>
                <p className="text-gray-600 text-sm">Megértő és támogató környezet</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-brain-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Tudományos alapon</h3>
                <p className="text-gray-600 text-sm">Bizonyított hatékonyságú módszerek</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Személyre szabott</h3>
                <p className="text-gray-600 text-sm">Egyéni igényekhez igazított terápia</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Biztonságos tér</h3>
                <p className="text-gray-600 text-sm">Titkosság és bizalom</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Készen áll az első lépésre?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vegye fel velem a kapcsolatot egy ingyenes konzultációért, ahol megbeszélhetjük, hogyan segíthetek Önnek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                Időpont foglalás
              </Link>
              <Link href="/szolgaltatasok/kapcsolat" className="border border-teal-600 text-teal-600 px-8 py-3 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                Kapcsolatfelvétel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
