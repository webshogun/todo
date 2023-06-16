import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-slate-800 text-slate-100 container mx-auto p-4'>
        {children}
      </body>
    </html>
  );
}
