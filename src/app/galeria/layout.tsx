import { Suspense } from 'react';
import Loading from '@/app/loading';
import Menu from './components/menu/Menu.component';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Menu />
      </Suspense>
      {children}
    </>
  );
}

export default Layout;
