'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MinistryContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📞',
    },
    {
      title: 'Email',
      value: 'contact@gideonpeprah.com',
      icon: '✉️',
    },
    {
      title: 'Address',
      value: '123 Faith Street, City, State 12345',
      icon: '📍',
    },
    {
      title: 'Service Times',
      value: 'Sun 9 AM & 6:30 PM | Wed 7 PM',
      icon: '🕐',
    },
  ];

  return (
    <div className="section container-max">
      <div className="mb-8 sm:mb-12">
        <h1 className="mb-2">Get in Touch</h1>
        <p className="text-gray-700 max-w-2xl">
          Have questions or want to connect? We'd love to hear from you. Reach out and we'll respond as soon as possible.
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

      {/* Contact Form & Map Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card variant="default" className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
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
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="question">General Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="volunteer">Volunteer Interest</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Side Info */}
        <div>
          <Card variant="elevated" className="bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="font-bold text-primary mb-4">Office Hours</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9 AM - 5 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10 AM - 2 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Service Hours</span>
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            <h3 className="font-bold text-primary mb-3">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors text-lg">
                f
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors text-lg">
                𝕏
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors text-lg">
                ◉
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
