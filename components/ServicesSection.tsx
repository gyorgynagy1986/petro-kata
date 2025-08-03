'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one sessions focused on your personal growth and healing journey.',
      areas: ['Depression & Anxiety', 'Life Transitions', 'Self-Esteem', 'Stress Management']
    },
    {
      title: 'Couples Counseling',
      description: 'Strengthen your relationship through improved communication and understanding.',
      areas: ['Communication Skills', 'Conflict Resolution', 'Intimacy Building', 'Trust Issues']
    },
    {
      title: 'Family Therapy',
      description: 'Work together as a family to build stronger, healthier relationships.',
      areas: ['Family Dynamics', 'Teen Issues', 'Parenting Support', 'Blended Families']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Services</h2>
          <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mental health services tailored to meet your unique needs and support your journey toward wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.areas.map((area, areaIndex) => (
                  <div key={areaIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
}