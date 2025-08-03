'use client';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Professional',
      content: 'Dr. Johnson helped me work through years of anxiety and self-doubt. Her compassionate approach and practical techniques have completely transformed my life. I finally feel like myself again.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Teacher',
      content: 'After struggling with depression for months, I found hope again through our sessions. Dr. Johnson created a safe space where I could heal and grow. I cannot recommend her enough.',
      rating: 5
    },
    {
      name: 'Sarah & Mike Thompson',
      role: 'Married Couple',
      content: 'Our marriage was falling apart before we started couples therapy. Dr. Johnson helped us rebuild trust and communication. We are stronger than ever and grateful for her guidance.',
      rating: 5
    },
    {
      name: 'Jennifer Chen',
      role: 'College Student',
      content: 'Dealing with family trauma seemed impossible until I met Dr. Johnson. Her trauma-informed approach helped me process difficult emotions and find peace. Life-changing experience.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      role: 'Business Owner',
      content: 'The stress of running a business was overwhelming me. Through therapy sessions, I learned healthy coping mechanisms and work-life balance. My mental health has never been better.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Single Mother',
      content: 'Raising three kids alone while dealing with my own mental health challenges felt impossible. Dr. Johnson provided the support and tools I needed to thrive as both a person and a parent.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read what my clients have to say about their healing journey and transformation through therapy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <div key={i} className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div>
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-left-line text-xl"></i>
            </div>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-right-line text-xl"></i>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}