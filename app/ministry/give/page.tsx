import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function MinistryGive() {
  const amounts = [
    { label: '$10', value: 10 },
    { label: '$25', value: 25 },
    { label: '$50', value: 50 },
    { label: '$100', value: 100 },
    { label: '$250', value: 250 },
    { label: 'Custom', value: 'custom' },
  ];

  return (
    <div className="section container-max">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 md:mb-16 text-center">
        <h1 className="mb-4">Support the Ministry</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          Your generous giving helps us continue the work of ministry, reach more people, and serve our community with the love of Christ.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every contribution, whether large or small, makes a real difference in transforming lives through the Gospel.
        </p>
      </div>

      {/* Giving Options */}
      <div className="mb-12 md:mb-16">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-6">
          {amounts.map((amount) => (
            <button
              key={amount.value}
              className="px-3 py-2 sm:px-4 sm:py-3 text-sm font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              {amount.label}
            </button>
          ))}
        </div>
      </div>

      {/* Why We Give Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
        <Card variant="elevated">
          <div className="text-center">
            <div className="text-4xl mb-3">🙏</div>
            <h3 className="font-bold text-primary mb-3">Spiritual Impact</h3>
            <p className="text-gray-700 text-sm">
              Your giving advances the Gospel and supports transformative ministry work.
            </p>
          </div>
        </Card>
        <Card variant="elevated">
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-primary mb-3">Community Care</h3>
            <p className="text-gray-700 text-sm">
              We serve vulnerable populations through outreach and compassionate ministry.
            </p>
          </div>
        </Card>
        <Card variant="elevated">
          <div className="text-center">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-bold text-primary mb-3">Growth & Development</h3>
            <p className="text-gray-700 text-sm">
              Support equips us to develop leaders and expand our ministry reach.
            </p>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-12 text-center">
        <h2 className="text-white mb-4">Ready to Give?</h2>
        <p className="mb-8 text-white/90 max-w-xl mx-auto">
          Click below to securely process your giving. All transactions are safe and your privacy is protected.
        </p>
        <Button
          href="#payment-gateway"
          variant="accent"
          size="lg"
        >
          Give Securely
        </Button>
      </div>

      {/* Payment Gateway Placeholder */}
      <div id="payment-gateway" className="mt-12 md:mt-16">
        <Card variant="default" className="bg-gray-50">
          <div className="text-center py-12">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-primary mb-3">Payment Processing</h3>
            <p className="text-gray-600 mb-6">
              Secure payment gateway integration
            </p>
            <p className="text-gray-500 text-sm">
              Accepts Credit Cards, Debit Cards, Bank Transfers, and Digital Wallets
            </p>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 md:mt-16">
        <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <Card variant="default">
            <h3 className="font-bold text-primary mb-2">Is my giving secure?</h3>
            <p className="text-gray-700 text-sm">
              Yes. We use industry-standard encryption and secure payment processors to protect your information.
            </p>
          </Card>
          <Card variant="default">
            <h3 className="font-bold text-primary mb-2">Is my gift tax-deductible?</h3>
            <p className="text-gray-700 text-sm">
              Yes. Gideon Peprah Ministries is a registered 501(c)(3) non-profit. Receipts are provided for all gifts.
            </p>
          </Card>
          <Card variant="default">
            <h3 className="font-bold text-primary mb-2">Can I set up recurring gifts?</h3>
            <p className="text-gray-700 text-sm">
              Absolutely. You can establish monthly, weekly, or custom recurring donations through our platform.
            </p>
          </Card>
          <Card variant="default">
            <h3 className="font-bold text-primary mb-2">How is my money used?</h3>
            <p className="text-gray-700 text-sm">
              Funds support ministry operations, community outreach, staff, facilities, and expanding our Gospel reach.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
