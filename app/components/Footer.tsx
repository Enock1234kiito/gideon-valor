import Link from 'next/link';

interface FooterProps {
  brand: 'ministry' | 'multimedia';
}

export default function Footer({ brand }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const brandName = brand === 'ministry' ? 'Gideon Peprah Ministries' : 'Valour Multimedia';

  const ministryLinks = [
    { label: 'Home', href: '/ministry' },
    { label: 'Live', href: '/ministry/live' },
    { label: 'Events', href: '/ministry/events' },
    { label: 'Give', href: '/ministry/give' },
    { label: 'Contact', href: '/ministry/contact' },
  ];

  const multimediaLinks = [
    { label: 'Home', href: '/multimedia' },
    { label: 'Services', href: '/multimedia/services' },
    { label: 'Portfolio', href: '/multimedia/portfolio' },
    { label: 'Contact', href: '/multimedia/contact' },
  ];

  const links = brand === 'ministry' ? ministryLinks : multimediaLinks;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container-max">
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 md:mb-12">
            {links.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div>
              <Link
                href={brand === 'ministry' ? '/multimedia' : '/ministry'}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {brand === 'ministry' ? 'Valour' : 'Ministry'}
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {currentYear} {brandName}. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-lg">𝕏</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-lg">◉</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
