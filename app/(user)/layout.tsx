import "../../styles/output.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner></Banner>
        {children}
      </body>
    </html>
  );
}
