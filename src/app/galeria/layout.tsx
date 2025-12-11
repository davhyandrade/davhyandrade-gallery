import { Suspense } from 'react';
import Menu from './_components/menu/Menu.component';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Menu />
      </Suspense>
      {children}
    </>
  );
}

export default Layout;
