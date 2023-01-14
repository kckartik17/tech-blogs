import "../../styles/output.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Providers from "../Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Providers>
          <Header />
          <Banner></Banner>
          {children}
        </Providers>
      </body>
    </html>
  );
}
