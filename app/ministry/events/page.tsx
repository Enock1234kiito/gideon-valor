import Card from '@/app/components/Card';
import Button from '@/app/components/Button';

export default function MinistryEvents() {
  const events = [
    {
      date: 'Sunday, Jan 26, 2025',
      time: '9:00 AM - 11:00 AM',
      title: 'Covenant Service',
      description: 'Join us for a powerful time of worship, word, and covenant commitment. This service focuses on renewing our commitment to God and building deeper foundations of faith.',
      location: 'Main Sanctuary',
    },
    {
      date: 'Wednesday, Jan 29, 2025',
      time: '7:00 PM - 8:30 PM',
      title: 'Prayer & Worship Night',
      description: 'An intimate gathering for prayer, worship, and prophetic ministry. Come expecting God\'s presence and powerful moves of the Holy Spirit.',
      location: 'Prayer Room',
    },
    {
      date: 'Sunday, Feb 2, 2025',
      time: '10:00 AM - 12:00 PM',
      title: 'Special Anointing Service',
      description: 'A special service dedicated to divine impartation and anointing. Come for prayer ministry and receive the touch of God on your life.',
      location: 'Main Sanctuary',
    },
    {
      date: 'Friday, Feb 7, 2025',
      time: '6:00 PM - 9:00 PM',
      title: 'Faith Conference 2025',
      description: 'A three-day conference featuring teachings on faith, purpose, and spiritual growth. Featuring guest speakers and powerful ministry sessions.',
      location: 'Convention Center',
    },
    {
      date: 'Saturday, Feb 15, 2025',
      time: '10:00 AM - 2:00 PM',
      title: 'Community Outreach',
      description: 'Join us as we serve our community through practical acts of kindness and sharing the gospel. All are welcome to participate.',
      location: 'Community Park',
    },
    {
      date: 'Sunday, Feb 23, 2025',
      time: '6:30 PM - 8:00 PM',
      title: 'Healing & Deliverance Service',
      description: 'A special night focused on healing from physical, emotional, and spiritual ailments. Come expecting miracles and restoration.',
      location: 'Main Sanctuary',
    },
  ];

  return (
    <div className="section container-max">
      <div className="mb-8 sm:mb-12">
        <h1 className="mb-4">Upcoming Events</h1>
        <p className="text-gray-700 max-w-2xl">
          Join us for special events, services, and gatherings. All events welcome everyone seeking to grow in faith and community.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index} variant="elevated">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <p className="text-accent font-semibold text-sm mb-1">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.time}</p>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-4 flex-1">{event.description}</p>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                <span>📍</span>
                <span>{event.location}</span>
              </div>
              <Button href="/ministry/contact" variant="primary" size="sm" className="w-full">
                Register Interest
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 sm:p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Never Miss an Event</h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter to stay updated on all upcoming services and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
