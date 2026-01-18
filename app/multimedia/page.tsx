import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MultimediaHome() {
  const services = [
    {
      title: 'TV & Radio Broadcast',
      description: 'Professional setup and technical support for broadcast productions',
      icon: '📺',
    },
    {
      title: 'Live Sound Engineering',
      description: 'Expert audio mixing and sound design for events and services',
      icon: '🎙️',
    },
    {
      title: 'Video Editing',
      description: 'Professional video post-production and content creation',
      icon: '🎬',
    },
    {
      title: 'Live Streaming',
      description: 'Full-service live streaming setup for organizations',
      icon: '🎥',
    },
  ];

  return (
    <div className="section container-max">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-center mb-4">Professional Broadcast & Multimedia Solutions</h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          TV & Radio Broadcast Technician • Live Sound Engineer • Video Editor
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
          <Button href="/multimedia/contact" size="lg" className="flex-1">
            Hire Valour Multimedia
          </Button>
          <Button href="/multimedia/portfolio" size="lg" variant="accent" className="flex-1">
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Services Preview */}
      <div className="mb-12 md:mb-16">
        <h2 className="mb-6 text-center">Featured Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Card key={index} variant="elevated">
              <div className="text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 md:p-12 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-4">About Valour Multimedia</h2>
            <p className="text-gray-700 mb-4">
              With years of professional experience in broadcast and multimedia production, we deliver high-quality technical solutions for organizations, churches, and events.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you need live sound engineering, broadcast setup, video editing, or complete streaming solutions, our expertise and attention to detail ensure professional results.
            </p>
            <Button href="/multimedia/services" variant="primary">
              Explore Services
            </Button>
          </div>
          <div className="hidden md:block h-64 bg-gradient-to-br from-primary to-accent rounded-lg opacity-20"></div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="mb-8 text-center">Why Choose Valour?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card variant="default">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Professional Quality</h3>
                <p className="text-gray-700 text-sm">Industry-standard equipment and expertise</p>
              </div>
            </div>
          </Card>
          <Card variant="default">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Reliable & Fast</h3>
                <p className="text-gray-700 text-sm">Quick turnaround with excellent support</p>
              </div>
            </div>
          </Card>
          <Card variant="default">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Custom Solutions</h3>
                <p className="text-gray-700 text-sm">Tailored to your specific needs</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
