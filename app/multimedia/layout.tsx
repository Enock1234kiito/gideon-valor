import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const multimediaNavItems = [
  { label: 'Home', href: '/multimedia' },
  { label: 'Services', href: '/multimedia/services' },
  { label: 'Portfolio', href: '/multimedia/portfolio' },
  { label: 'Contact', href: '/multimedia/contact' },
];

export const metadata = {
  title: 'Valour Multimedia',
  description: 'Professional broadcast, live sound, and video solutions.',
};

export default function MultimediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header brand="multimedia" navItems={multimediaNavItems} />
      <main className="flex-1">
        {children}
      </main>
      <Footer brand="multimedia" />
    </div>
  );
}
