import { Figtree, Inter } from 'next/font/google';

// Figtree as a modern alternative to TT Firs Neue
export const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

// Inter as complementary font for body text
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
