import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MinistryHome() {
  const upcomingEvents = [
    { date: 'Sunday, Jan 26', title: 'Covenant Service', time: '9:00 AM' },
    { date: 'Wednesday, Jan 29', title: 'Prayer & Worship Night', time: '7:00 PM' },
    { date: 'Sunday, Feb 2', title: 'Special Anointing Service', time: '10:00 AM' },
  ];

  return (
    <div className="section container-max">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-center mb-4">Welcome to Gideon Peprah Ministries</h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Growing in faith, knowledge, and impact. Join us for transformative services and connect with our faith community.
        </p>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
          <Button href="/ministry/live" size="lg" className="flex-1">
            Join the Service
          </Button>
          <Button href="/ministry/give" size="lg" variant="accent" className="flex-1">
            Give
          </Button>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="mb-6 text-center md:text-left">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <Card key={index} variant="elevated">
              <div className="flex flex-col h-full">
                <p className="text-accent font-semibold text-sm mb-2">{event.date}</p>
                <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{event.time}</p>
                <Button href="/ministry/events" variant="outline" size="sm" className="w-full">
                  View More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* About Preview Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-4">About Our Ministry</h2>
            <p className="text-gray-700 mb-4">
              Gideon Peprah Ministries is a faith-based community dedicated to spiritual growth, prophetic teaching, and community service. We believe in the power of God's Word and its transformative impact on lives.
            </p>
            <p className="text-gray-700 mb-6">
              Through dynamic services, powerful prayers, and prophetic ministry, we equip believers to walk in purpose and power.
            </p>
            <Button href="/ministry/contact" variant="primary">
              Learn More
            </Button>
          </div>
          <div className="hidden md:block h-64 bg-gradient-to-br from-primary to-accent rounded-lg opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
