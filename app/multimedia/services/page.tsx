import Card from '@/app/components/Card';
import Button from '@/app/components/Button';

export default function MultimediaServices() {
  const services = [
    {
      title: 'TV & Radio Broadcast Setup',
      description: 'Complete broadcast production setup for TV and radio stations. Includes equipment configuration, technical testing, and on-site support.',
      features: ['Equipment setup', 'Signal testing', 'Quality assurance', 'On-site support'],
      icon: '📡',
    },
    {
      title: 'Live Sound Engineering',
      description: 'Professional audio mixing and sound design for live events, services, conferences, and performances. Expert acoustic treatment and equipment optimization.',
      features: ['Audio mixing', 'Sound design', 'Equipment rental', 'Technical support'],
      icon: '🎙️',
    },
    {
      title: 'Video & Sound Equipment Rental',
      description: 'High-quality professional equipment available for short-term and long-term rental. Full inventory of cameras, microphones, mixing boards, and lighting.',
      features: ['Equipment rental', 'Setup assistance', 'Technical support', 'Flexible terms'],
      icon: '🎬',
    },
    {
      title: 'Video Editing & Post-Production',
      description: 'Professional video editing, color grading, sound design, and post-production services. Transform raw footage into polished, professional content.',
      features: ['Video editing', 'Color grading', 'Sound design', 'Motion graphics'],
      icon: '✂️',
    },
    {
      title: 'Live Streaming for Organizations',
      description: 'Full-service live streaming setup for churches, conferences, webinars, and events. Multi-platform streaming with professional quality and reliability.',
      features: ['Platform setup', 'Multi-platform support', 'Real-time monitoring', 'Archive support'],
      icon: '🎥',
    },
    {
      title: 'Consultation & Planning',
      description: 'Professional consultation for multimedia projects, technical planning, and strategic recommendations to optimize your broadcast or event production.',
      features: ['Project planning', 'Technical analysis', 'Budget planning', 'Timeline development'],
      icon: '📋',
    },
  ];

  return (
    <div className="section container-max">
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-2xl">
          Comprehensive multimedia solutions tailored to your specific needs. From broadcast setup to video production, we handle it all with professional expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
        {services.map((service, index) => (
          <Card key={index} variant="elevated">
            <div className="flex flex-col h-full">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4 flex-1">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/multimedia/contact" variant="outline" size="sm" className="w-full">
                Get Quote
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 md:p-12 mb-12 md:mb-16">
        <h2 className="mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-3">1</div>
            <h3 className="font-bold text-primary mb-2">Consultation</h3>
            <p className="text-gray-700 text-sm">Understand your needs and goals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-3">2</div>
            <h3 className="font-bold text-primary mb-2">Planning</h3>
            <p className="text-gray-700 text-sm">Develop technical strategy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-3">3</div>
            <h3 className="font-bold text-primary mb-2">Setup</h3>
            <p className="text-gray-700 text-sm">Deploy equipment & systems</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-3">4</div>
            <h3 className="font-bold text-primary mb-2">Support</h3>
            <p className="text-gray-700 text-sm">On-site support & monitoring</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Contact us for a free consultation. We'll discuss your project and provide a customized solution.
        </p>
        <Button href="/multimedia/contact" size="lg">
          Schedule Consultation
        </Button>
      </div>
    </div>
  );
}
