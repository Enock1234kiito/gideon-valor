import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MinistryLive() {
  return (
    <div className="section container-max">
      {/* Live Status */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
          <h1>Join Us Live</h1>
        </div>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Experience our services in real-time. Join us across multiple platforms to stay connected with our faith community.
        </p>
      </div>

      {/* Video Container */}
      <div className="mb-8 sm:mb-12">
        <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4 shadow-lg">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">▶️</div>
            <p className="text-gray-400">Live video player embed goes here</p>
            <p className="text-gray-500 text-sm mt-2">Supports YouTube Live or custom embed</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Service Time: Sundays 9:00 AM & 6:30 PM | Wednesdays 7:00 PM
        </p>
      </div>

      {/* Platform Links */}
      <div className="mb-12 md:mb-16">
        <h2 className="mb-6">Watch on Your Favorite Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card variant="elevated">
            <div className="text-center">
              <div className="text-4xl mb-3">📺</div>
              <h3 className="font-bold text-primary mb-2">YouTube Live</h3>
              <p className="text-gray-600 text-sm mb-4">Watch our latest broadcasts</p>
              <Button
                href="https://youtube.com"
                external
                size="sm"
                variant="primary"
                className="w-full"
              >
                Open YouTube
              </Button>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="text-center">
              <div className="text-4xl mb-3">f</div>
              <h3 className="font-bold text-primary mb-2">Facebook Live</h3>
              <p className="text-gray-600 text-sm mb-4">Join our Facebook community</p>
              <Button
                href="https://facebook.com"
                external
                size="sm"
                variant="primary"
                className="w-full"
              >
                Open Facebook
              </Button>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="text-center">
              <div className="text-4xl mb-3">♪</div>
              <h3 className="font-bold text-primary mb-2">TikTok</h3>
              <p className="text-gray-600 text-sm mb-4">Follow our TikTok channel</p>
              <Button
                href="https://tiktok.com"
                external
                size="sm"
                variant="primary"
                className="w-full"
              >
                Open TikTok
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8">
        <h2 className="mb-6">Live Schedule</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Sunday Morning</h3>
            <p className="text-gray-700">9:00 AM - Praise & Worship Service</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Sunday Evening</h3>
            <p className="text-gray-700">6:30 PM - Main Service</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Wednesday Evening</h3>
            <p className="text-gray-700">7:00 PM - Prayer & Worship Night</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-primary mb-1">Special Events</h3>
            <p className="text-gray-700">Check Events page for announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
}
