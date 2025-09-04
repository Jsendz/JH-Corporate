import './globals.css';

export const metadata = { title: 'Your App' };
export default function Root({children}:{children:React.ReactNode}) {
  return children; // IMPORTANT: no <html> or <body> here
}