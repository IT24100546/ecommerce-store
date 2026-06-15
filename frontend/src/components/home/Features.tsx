import { Truck, Shield, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Enjoy free delivery on all orders over $50. Fast and reliable shipping to your doorstep.',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your transactions are protected with industry-leading encryption and security protocols.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: 'Not satisfied? Return within 30 days for a full refund, no questions asked.',
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Shop With Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6 group-hover:bg-indigo-200 transition-colors">
                <feature.icon className="h-8 w-8 text-indigo-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
