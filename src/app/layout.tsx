```typescript
import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Paws & Whiskers Veterinary Clinic',
  description: 'Compassionate care for your best friends at Paws & Whiskers Veterinary Clinic.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plusJakarta.className}`}>
        {children}
      </body>
    </html>
  );
}
```