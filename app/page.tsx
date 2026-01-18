import Button from './components/Button';
import Card from './components/Card';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Ministry Card - Mobile Stack / Desktop Left */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary from-20% via-white via-50% to-white">
        <Card variant="elevated" className="w-full max-w-md">
          <div className="text-center">
            <div className="text-5xl mb-4">⛪</div>
            <h1 className="text-3xl font-bold text-primary mb-2">Gideon Peprah Ministries</h1>
            <p className="text-gray-600 mb-6">
              Experience the Word, embrace prophecy, and transform your life through faith.
            </p>
            <Button href="/ministry" size="lg" className="w-full">
              Enter Ministry
            </Button>
          </div>
        </Card>
      </div>

      {/* Multimedia Card - Mobile Stack / Desktop Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Card variant="elevated" className="w-full max-w-md">
          <div className="text-center">
            <div className="text-5xl mb-4">🎬</div>
            <h1 className="text-3xl font-bold text-primary mb-2">Valour Multimedia</h1>
            <p className="text-gray-600 mb-6">
              Professional broadcast, live sound, and video solutions that bring your vision to life.
            </p>
            <Button href="/multimedia" size="lg" className="w-full">
              Enter Multimedia
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
