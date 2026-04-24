import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { Fab } from "@/components/organisms/fab";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Fab />
    </>
  );
}
