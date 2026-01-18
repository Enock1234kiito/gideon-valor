'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MultimediaContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' });
  };

  const contactInfo = [
    {
      title: 'Phone',
      value: '+1 (555) 987-6543',
      icon: '📞',
    },
    {
      title: 'Email',
      value: 'contact@valourmultimedia.com',
      icon: '✉️',
    },
    {
      title: 'Studio Address',
      value: '456 Media Lane, City, State 12345',
      icon: '📍',
    },
    {
      title: 'Available',
      value: 'Monday - Saturday, 8 AM - 6 PM',
      icon: '🕐',
    },
  ];

  return (
    <div className="section container-max">
      <div className="mb-8 sm:mb-12">
        <h1 className="mb-2">Let's Work Together</h1>
        <p className="text-gray-700 max-w-2xl">
          Tell us about your project and we'll provide a professional quote and timeline.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:mb-16">
        {contactInfo.map((info, index) => (
          <Card key={index} variant="elevated">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{info.icon}</div>
              <div>
                <h3 className="font-bold text-primary mb-1">{info.title}</h3>
                <p className="text-gray-700 text-sm">{info.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Contact Form & Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card variant="default" className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="broadcast">TV & Radio Broadcast</option>
                    <option value="sound">Live Sound Engineering</option>
                    <option value="rental">Equipment Rental</option>
                    <option value="editing">Video Editing</option>
                    <option value="streaming">Live Streaming</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="1000">Under $1,000</option>
                    <option value="5000">$1,000 - $5,000</option>
                    <option value="10000">$5,000 - $10,000</option>
                    <option value="custom">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project, event, or requirements"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Get a Quote
              </Button>
            </form>
          </Card>
        </div>

        {/* Services Sidebar */}
        <div>
          <Card variant="elevated" className="bg-gradient-to-br from-primary/5 to-accent/5 mb-6">
            <h3 className="font-bold text-primary mb-4">Quick Response</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Typical Response:</span> Within 24 hours
              </p>
              <p>
                <span className="font-semibold">Quote Delivery:</span> 2-3 business days
              </p>
              <p>
                <span className="font-semibold">Project Start:</span> Within 1-2 weeks
              </p>
            </div>
          </Card>

          <Card variant="default" className="border-l-4 border-primary">
            <h3 className="font-bold text-primary mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Broadcast Setup</li>
              <li>✓ Live Sound</li>
              <li>✓ Video Production</li>
              <li>✓ Equipment Rental</li>
              <li>✓ Live Streaming</li>
              <li>✓ Consultation</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
