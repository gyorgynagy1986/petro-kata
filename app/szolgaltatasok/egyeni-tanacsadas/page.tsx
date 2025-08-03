
'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function EgyeniTanacsadasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl font-light text-gray-800 mb-6">Egyéni Tanácsadás</h1>
                <div className="w-24 h-px bg-teal-600 mb-8"></div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Személyre szabott terápiás folyamat, amely teljes mértékben az Ön egyedi igényeihez, céljaihoz és élethelyzetéhez igazodik.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#booking" className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                    Időpont foglalás
                  </Link>
                  <Link href="/szolgaltatasok/kapcsolat" className="border border-teal-600 text-teal-600 px-8 py-3 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                    Kérdés feltétele
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20individual%20therapy%20session%20in%20modern%20office%2C%20therapist%20and%20client%20sitting%20comfortably%20facing%20each%20other%2C%20warm%20natural%20lighting%2C%20plants%20and%20books%20creating%20safe%20therapeutic%20environment%2C%20confidential%20and%20supportive%20atmosphere&width=600&height=400&seq=individual_therapy_main&orientation=landscape"
                  alt="Egyéni tanácsadás"
                  className="w-full rounded-lg shadow-md object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Hogyan zajlik az egyéni terápia?</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  1
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Első konzultáció</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Megismerkedünk, és felmérjük az Ön céljait és igényeit. Ez egy 60 perces ingyenes beszélgetés.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  2
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Terápiás terv</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Közösen kialakítjuk a terápiás tervet, meghatározzuk a célokat és a módszereket.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  3
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Terápiás folyamat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rendszeres ülések keretében dolgozunk a kitűzött célokon és a személyes fejlődésen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  4
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Értékelés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rendszeresen értékeljük a haladást és szükség szerint módosítjuk a terápiás megközelítést.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Szakterületek</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Széles körű tapasztalattal rendelkezem különböző mentális egészségügyi területeken
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-emotion-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Szorongás és pánik</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Szorongásos zavarok, pánikrohamok és fóbiák kezelése gyakorlati eszközök és technikák segítségével.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-cloudy-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Depresszió</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hangulatzavarok kezelése, az életöröm visszanyerése és a mindennapi működőképesség javítása.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-flashlight-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Trauma feldolgozás</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Traumatikus élmények feldolgozása biztonságos környezetben, PTSD tünetek enyhítése.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-heart-pulse-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Stresszkezelés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stressz csökkentése, kiégés megelőzése és egészséges megküzdési stratégiák kialakítása.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-user-star-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Önértékelés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Egészséges önkép kialakítása, önbizalom fejlesztése és személyes értékek feltárása.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-compass-3-line text-teal-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Életvezetés</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Életcélok tisztázása, döntéshozatal támogatása és személyes fejlődés elősegítése.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Booking */}
        <section id="booking" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Árak és időpontfoglalás</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Egyéni ülés</h3>
                <div className="text-3xl font-light text-teal-600 mb-4">15.000 Ft</div>
                <p className="text-gray-600 mb-6">60 perces személyes konzultáció</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Személyre szabott megközelítés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Biztonságos környezet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Gyakorlati eszközök</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-teal-200">
                <div className="bg-teal-600 text-white px-3 py-1 rounded text-sm inline-block mb-4">Népszerű</div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Terápiás csomag</h3>
                <div className="text-3xl font-light text-teal-600 mb-4">55.000 Ft</div>
                <p className="text-gray-600 mb-6">4 alkalom (13.750 Ft/ülés)</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Folyamatos terápiás folyamat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Kedvezményes ár</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Rugalmas időpont egyeztetés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-8">
                Az első konzultáció ingyenes! Ez lehetőséget ad a megismerkedésre és annak eldöntésére, hogy a terápia megfelelő-e Önnek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                  Ingyenes konzultáció foglalása
                </button>
                <Link href="/szolgaltatasok/kapcsolat" className="border border-teal-600 text-teal-600 px-8 py-3 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                  Kérdés feltétele
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
