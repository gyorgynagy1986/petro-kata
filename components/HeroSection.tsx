'use client';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Professional
              <br />
              <span className="font-medium text-teal-600">Psychological</span>
              <br />
              Counseling
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Individual therapy sessions in a safe, supportive environment. 
              Helping you navigate life's challenges and discover your inner strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </button>
              <button className="border border-teal-600 text-teal-600 px-8 py-4 rounded hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:order-last">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20minimalist%20therapy%20office%20interior%20with%20modern%20furniture%2C%20clean%20design%2C%20natural%20lighting%2C%20plants%2C%20calm%20atmosphere%2C%20white%20and%20teal%20color%20scheme%2C%20peaceful%20counseling%20space%2C%20contemporary%20psychology%20practice&width=600&height=700&seq=minimalist_therapy_office&orientation=portrait"
              alt="Professional Therapy Office"
              className="w-full h-auto rounded-lg shadow-lg object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}