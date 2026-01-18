import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const ministryNavItems = [
  { label: 'Home', href: '/ministry' },
  { label: 'Live', href: '/ministry/live' },
  { label: 'Events', href: '/ministry/events' },
  { label: 'Give', href: '/ministry/give' },
  { label: 'Contact', href: '/ministry/contact' },
];

export const metadata = {
  title: 'Gideon Peprah Ministries',
  description: 'Experience the Word, embrace prophecy, and transform your life through faith.',
};

export default function MinistryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header brand="ministry" navItems={ministryNavItems} />
      <main className="flex-1">
        {children}
      </main>
      <Footer brand="ministry" />
    </div>
  );
}
