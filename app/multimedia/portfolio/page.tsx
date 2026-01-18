import Card from '@/app/components/Card';
import Button from '@/app/components/Button';

export default function MultimediaPortfolio() {
  const projects = [
    {
      title: 'Large Church Broadcast Setup',
      category: 'Broadcast',
      image: 'Broadcast 1',
      description: 'Complete broadcast setup for 5000-member church including multi-camera production and live streaming',
    },
    {
      title: 'Music Festival Sound Engineering',
      category: 'Live Sound',
      image: 'Sound Event 1',
      description: 'Full sound engineering for 3-day music festival with 5 stages and 10,000+ attendees',
    },
    {
      title: 'Corporate Event Video Production',
      category: 'Video Production',
      image: 'Video 1',
      description: 'Complete video production from filming to editing for corporate conference event',
    },
    {
      title: 'Podcast Studio Setup',
      category: 'Studio Setup',
      image: 'Studio 1',
      description: 'Professional podcast and audio recording studio with soundproofing and equipment',
    },
    {
      title: 'Wedding Ceremony Live Stream',
      category: 'Live Streaming',
      image: 'Stream 1',
      description: 'Multi-platform live streaming for wedding ceremony with 500+ remote viewers',
    },
    {
      title: 'Conference Video Editing',
      category: 'Video Editing',
      image: 'Editing 1',
      description: 'Professional color grading and editing for 50+ hours of conference footage',
    },
    {
      title: 'Radio Station Installation',
      category: 'Broadcast',
      image: 'Broadcast 2',
      description: 'Complete radio station setup and technical installation with training',
    },
    {
      title: 'Concert Live Sound Mix',
      category: 'Live Sound',
      image: 'Sound Event 2',
      description: 'Professional live sound mixing for 2000+ capacity concert venue',
    },
    {
      title: 'Corporate Training Videos',
      category: 'Video Production',
      image: 'Video 2',
      description: 'Series of professional training videos for corporate client with motion graphics',
    },
  ];

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  return (
    <div className="section container-max">
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-center">Our Portfolio</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-center">
          A selection of projects showcasing our expertise in broadcast, live sound, video production, and multimedia solutions.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-2 mb-8 sm:mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full text-sm font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
        {projects.map((project, index) => (
          <Card key={index} variant="elevated" className="overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-xs">{project.image}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-accent font-semibold text-xs mb-2 uppercase tracking-wider">
                {project.category}
              </p>
              <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-1">{project.description}</p>

              <Button href="/multimedia/contact" variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 sm:p-8 md:p-12 mb-12 md:mb-16">
        <h2 className="mb-8 text-center">By the Numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-700 text-sm">Projects Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-700 text-sm">Happy Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-700 text-sm">Hours Produced</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-gray-700 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="mb-4">Impressed by Our Work?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Let's discuss how we can bring your multimedia vision to life.
        </p>
        <Button href="/multimedia/contact" size="lg">
          Start Your Project
        </Button>
      </div>
    </div>
  );
}
