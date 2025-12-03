import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Operate AI Studio',
  description: 'The Next-Gen AI Writer and Agent Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Simple Top Navigation Bar using Tailwind CSS */}
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Name */}
              <Link href="/" className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-900">
                  OPERATE <span className="text-blue-600">AI</span>
                </span>
              </Link>

              {/* Navigation Links (Placeholder) */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/writer"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Writer Studio
                </Link>
                <Link
                  href="/studio"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Image Studio
                </Link>
              </div>

              {/* Auth Button Placeholder - Correctly links to /auth */}
              <div className="ml-4 flex items-center">
                <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                  Sign Up / Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow min-h-[calc(100vh-4rem)] bg-gray-50">
            {children}
        </main>
      </body>
    </html>
  );
}