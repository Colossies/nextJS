import '../styles/global.css';
import Header from  './ui/header';
import Footer from './ui/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "h-full bg-gray-100">
      <body className = "h-full">
        {/* <Header /> */}
        <div className = "flex flex-col flex-start z-[1]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}