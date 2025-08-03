'use client';

export default function ApproachSection() {
  const principles = [
    {
      title: 'Client-Centered',
      description: 'Your needs and goals are at the center of our therapeutic work together.'
    },
    {
      title: 'Evidence-Based',
      description: 'Using proven therapeutic techniques and approaches backed by research.'
    },
    {
      title: 'Collaborative',
      description: 'We work together as a team in your healing and growth process.'
    },
    {
      title: 'Compassionate',
      description: 'Providing a safe, non-judgmental space for your healing journey.'
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-800 mb-6">My Approach</h2>
            <div className="w-24 h-px bg-teal-600 mb-8"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in creating a safe, supportive environment where you can explore your thoughts and feelings without judgment. My approach is tailored to your unique needs and circumstances.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="text-center p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20therapy%20session%20room%20with%20comfortable%20seating%2C%20soft%20natural%20lighting%2C%20plants%2C%20clean%20white%20and%20teal%20decor%2C%20peaceful%20atmosphere%2C%20professional%20counseling%20environment%2C%20contemporary%20design%20elements&width=600&height=500&seq=modern_therapy_room&orientation=landscape"
              alt="Therapy Approach"
              className="w-full h-auto rounded-lg shadow-md object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}