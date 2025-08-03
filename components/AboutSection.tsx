'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">About Dr. Sarah Johnson</h2>
          <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in clinical psychology, I am dedicated to helping individuals navigate life's challenges and discover their inner strength. My approach combines evidence-based therapeutic techniques with genuine care and understanding.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Ph.D. in Clinical Psychology</p>
                    <p className="text-gray-600">Stanford University, 2008</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Licensed Clinical Psychologist</p>
                    <p className="text-gray-600">California State Board</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Specializations</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">• Cognitive Behavioral Therapy</p>
                  <p className="text-gray-600">• Trauma-Informed Care</p>
                  <p className="text-gray-600">• Anxiety & Depression</p>
                  <p className="text-gray-600">• Relationship Counseling</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20portrait%20in%20clean%20modern%20office%20setting%2C%20warm%20approachable%20smile%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20minimalist%20background%2C%20trustworthy%20appearance%2C%20mid-30s%20woman%20with%20kind%20demeanor&width=400&height=500&seq=clean_psychologist_portrait&orientation=portrait"
              alt="Dr. Sarah Johnson"
              className="w-full max-w-xs mx-auto rounded-lg shadow-md object-top mb-6"
            />
            <button className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
              View Full Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}