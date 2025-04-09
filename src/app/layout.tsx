import '../styles/globals.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Yoliday Assignment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="bg-gray-100">
        <div className="flex min-h-screen max-h-screen overflow-hidden">
          {/* Sidebar fixed on the left */}
          <div className="w-64 flex-shrink-0 fixed top-0 bottom-0 left-0 z-10">
            <Sidebar />
          </div>

          {/* Right section with topbar and scrollable content */}
          <div className="flex flex-col flex-1 md:ml-64 w-full md:w-[calc(100%-16rem)]">
            <div className="fixed top-0 left-0 md:left-64 right-0 z-10">
              <Topbar />
            </div>

            {/* Scrollable children area */}
            <main className="mt-16 overflow-y-auto h-[calc(100vh-4rem)] p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
