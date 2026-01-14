import { Suspense } from 'react';
import Menu from './_components/menu/Menu.component';
import Footer from './_components/footer/Footer.component';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Menu />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
