
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BemutatkozasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light text-gray-800 mb-6">Dr. Sarah Johnson</h1>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Klinikai pszichológus, aki több mint 15 éves tapasztalattal segít az embereknek életük kihívásainak leküzdésében és belső erejük megtalálásában.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20in%20modern%20therapy%20office%2C%20warm%20and%20approachable%20demeanor%2C%20sitting%20in%20comfortable%20chair%2C%20natural%20lighting%20from%20window%2C%20books%20and%20plants%20in%20background%2C%20creating%20safe%20therapeutic%20environment&width=600&height=400&seq=psychologist_office_detailed&orientation=landscape"
                  alt="Dr. Sarah Johnson a rendelőjében"
                  className="w-full rounded-lg shadow-md object-top"
                />
              </div>
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-6">Szakmai háttér</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Pszichológusi pályafutásom során számos különböző terápiás megközelítést tanultam és alkalmaztam. Hiszem, hogy minden ember egyedi, ezért a terápiás módszereket mindig az egyéni igényekhez igazítom.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Képzettség</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">• Ph.D. Klinikai Pszichológia - Stanford University (2008)</p>
                      <p className="text-gray-600">• Kognitív Viselkedésterápiás Szakképzés</p>
                      <p className="text-gray-600">• Trauma-informált Terápiás Képzés</p>
                      <p className="text-gray-600">• Családterápiás Specializáció</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Engedélyek & Tagságok</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">• Klinikai Pszichológus Engedély - California State Board</p>
                      <p className="text-gray-600">• Magyar Pszichológiai Társaság tagja</p>
                      <p className="text-gray-600">• Kognitív Terápiás Egyesület tagja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Szakmai tapasztalat */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Szakmai tapasztalat</h2>
              <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Terápiás megközelítés</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Munkám során integrált megközelítést alkalmazok, amely ötvözi a kognitív viselkedésterápia, a humanisztikus pszichológia és a mindfulness-alapú technikák elemeit.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Biztonságos és ítélkezésmentes környezet megteremtése</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Egyéni igényekre szabott terápiás terv kidolgozása</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Praktikus eszközök és stratégiák átadása</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Szakterületek</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specializációim között szerepel a szorongás és depresszió kezelése, traumafeldolgozás, valamint kapcsolati problémák megoldása.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Szorongásos és hangulatzavarok</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Trauma és PTSD kezelése</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Kapcsolati és kommunikációs nehézségek</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">Életvezetési és döntéshozatali kihívások</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Személyes filozófia */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light text-gray-800 mb-8">Személyes filozófia</h2>
            <div className="w-24 h-px bg-teal-600 mx-auto mb-12"></div>
            <blockquote className="text-xl text-gray-600 leading-relaxed italic mb-8">
              "Hiszem, hogy minden emberben megvan a képesség a gyógyulásra és a növekedésre. A terápia egy közös utazás, ahol együtt fedezzük fel az Ön belső erőforrásait és építjük fel az egészségesebb jövőt."
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed">
              Munkám során fontos számomra, hogy klienseim biztonságban érezzék magukat, és hogy a terápiás folyamat az ő tempójukhoz igazodjon. Célom, hogy ne csak a tünetek enyhítésében segítsek, hanem abban is, hogy hosszú távon fenntartható változásokat érjenek el életükben.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
