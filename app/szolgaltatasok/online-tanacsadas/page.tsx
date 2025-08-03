
'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function OnlineTanacsadasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl font-light text-gray-800 mb-6">Online Tanácsadás</h1>
                <div className="w-24 h-px bg-teal-600 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professzionális pszichológiai támogatás otthonának kényelméből, biztonságos online platformon keresztül.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#online-booking" className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                    Online időpont
                  </Link>
                  <Link href="/szolgaltatasok/kapcsolat" className="border border-teal-600 text-teal-600 px-8 py-3 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                    Technikai kérdések
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20online%20therapy%20session%20setup%20with%20laptop%20showing%20video%20call%20interface%2C%20comfortable%20home%20office%20environment%20with%20good%20lighting%2C%20therapist%20visible%20on%20screen%2C%20modern%20technology%20meeting%20healthcare%2C%20secure%20and%20private%20atmosphere&width=600&height=400&seq=online_therapy_main&orientation=landscape"
                  alt="Online tanácsadás"
                  className="w-full rounded-lg shadow-md object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Az online terápia előnyei</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-home-4-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Kényelem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Otthonának biztonságából vehet részt a terápiás üléseken, utazás nélkül.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Rugalmasság</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rugalmas időpontfoglalás, amely illeszkedik az Ön napirendjéhez.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Biztonság</h3>
                <p className="text-gray-600 leading-relaxed">
                  Titkosított kapcsolat és teljes anonimitás garantálása.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-global-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Elérhetőség</h3>
                <p className="text-gray-600 leading-relaxed">
                  Földrajzi korlátok nélkül elérhető szakmai segítség.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-3-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Komfort</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ismerős környezetben könnyebb megnyílni és beszélni.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-money-dollar-circle-line text-2xl text-teal-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Költséghatékonyság</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utazási költségek spórolása és időmegtakarítás.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Hogyan működik?</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  1
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Regisztráció</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Egyszerű online regisztráció és technikai felkészítés.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  2
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Időpontfoglalás</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rugalmas időpontok közül választhat a naptáramban.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  3
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Online ülés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Biztonságos videohívás platformon keresztüli konzultáció.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  4
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Követés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Folyamatos támogatás és haladás nyomon követése.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Technikai követelmények</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-6">Minimális követelmények</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Internetkapcsolat</p>
                      <p className="text-gray-600 text-sm">Stabil szélessávú kapcsolat (min. 5 Mbps)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Eszköz</p>
                      <p className="text-gray-600 text-sm">Számítógép, tablet vagy okostelefon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Kamera és mikrofon</p>
                      <p className="text-gray-600 text-sm">Beépített vagy külön webkamera és mikrofon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-6">Támogatott platformok</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Zoom</p>
                      <p className="text-gray-600 text-sm">Elsődleges videokonferencia platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Google Meet</p>
                      <p className="text-gray-600 text-sm">Alternatív platform igény szerint</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Biztonság</p>
                      <p className="text-gray-600 text-sm">End-to-end titkosítás minden platformon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Technikai támogatást nyújtok a beállításban és a kapcsolódásban.
              </p>
              <Link href="/szolgaltatasok/kapcsolat" className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
                Technikai kérdések esetén vegye fel velem a kapcsolatot →
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing and Booking */}
        <section id="online-booking" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Online árak és foglalás</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Online ülés</h3>
                <div className="text-3xl font-light text-teal-600 mb-4">12.000 Ft</div>
                <p className="text-gray-600 mb-6">50 perces online konzultáció</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Biztonságos videohívás</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Rugalmas időpontok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Technikai támogatás</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-2 border-teal-200">
                <div className="bg-teal-600 text-white px-3 py-1 rounded text-sm inline-block mb-4">Kedvezmény</div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Online csomag</h3>
                <div className="text-3xl font-light text-teal-600 mb-4">44.000 Ft</div>
                <p className="text-gray-600 mb-6">4 alkalom (11.000 Ft/ülés)</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Folyamatos online terápia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">8% megtakarítás</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Prioritásos időpontfoglalás</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Első online konzultáció 50% kedvezménnyel! Próbálja ki kockázat nélkül.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                  Kedvezményes próbaülés
                </button>
                <Link href="/szolgaltatasok/kapcsolat" className="border border-teal-600 text-teal-600 px-8 py-3 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                  További információ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
