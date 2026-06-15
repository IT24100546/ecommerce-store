import { useState } from 'react';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  cartItemCount?: number;
}

export default function Header({ cartItemCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Shop<span className="text-indigo-600">Ease</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Login/Register */}
            <div className="hidden sm:flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-600" />
              <a href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Login
              </a>
              <span className="text-gray-400">/</span>
              <a href="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Register
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-2 pt-2 border-t border-gray-200 mt-2">
                <User className="h-5 w-5 text-gray-600" />
                <a href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                  Login
                </a>
                <span className="text-gray-400">/</span>
                <a href="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Register
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
