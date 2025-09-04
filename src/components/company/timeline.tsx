'use client';

import React from 'react';
import { ArrowRight, Users, FileText, Building2, Shield, Clock, Award } from 'lucide-react';
import Image from 'next/image';


interface TimelineStep {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  isImageLeft: boolean;
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Users className="w-5 h-5" />,
    isImageLeft: false
  },
  {
    id: 2,
    title: 'Tailored Strategy',
    description: 'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <FileText className="w-5 h-5" />,
    isImageLeft: true
  },
  {
    id: 3,
    title: 'Document Preparation',
    description: 'Comprehensive preparation of all required documentation including legal forms, financial statements, and regulatory compliance materials.',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Building2 className="w-5 h-5" />,
    isImageLeft: false
  },
  {
    id: 4,
    title: 'Legal Requirements',
    description: 'Navigate complex legal frameworks and ensure full compliance with Andorran regulations for residency or business establishment.',
    imageUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Shield className="w-5 h-5" />,
    isImageLeft: true
  },
  {
    id: 5,
    title: 'Government Review',
    description: 'Professional handling of the government review process, ensuring all submissions meet official requirements and timelines.',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Clock className="w-5 h-5" />,
    isImageLeft: false
  },
  {
    id: 6,
    title: 'Final Approval',
    description: 'Receive your official residency permit or company registration with full support through the final administrative steps.',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Award className="w-5 h-5" />,
    isImageLeft: true
  }
];

export default function ProcessTimeline() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your step-by-step journey to Andorran residency or company formation, 
            guided by our expert team every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-800 hidden lg:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-24">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  {step.isImageLeft ? (
                    <>
                      {/* Image Left */}
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={step.imageUrl}
                            alt={step.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      
                      {/* Text Right */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.id.toString().padStart(2, '0')}
                          </div>
                          <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {step.description}
                          </p>
                          <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                            Discover More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text Left */}
                      <div className="space-y-6 text-right">
                        <div className="flex items-center justify-end space-x-4">
                          <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                            {step.icon}
                          </div>
                          <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.id.toString().padStart(2, '0')}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {step.description}
                          </p>
                          <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                            Discover More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Image Right */}
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={step.imageUrl}
                            alt={step.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <Image
                        src={step.imageUrl}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.id.toString().padStart(2, '0')}
                        </div>
                        <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                        Discover More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot for Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Mobile Timeline Connector */}
                {index < timelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-teal-600 to-teal-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Begin Your Andorra Journey?</h3>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful clients who have established their residency or business in Andorra with our expert guidance.
            </p>
            <button className="bg-white text-teal-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}