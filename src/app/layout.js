import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Smooth Parallax Scroll',
    description: 'Created using nextjs, framer-motion & Lenis scroll',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
