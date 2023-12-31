import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}

function AnimeWrapper({ children }: LayoutProps) {
  return <div className="flex flex-col w-[75%] p-10 text-white translate-x-[400px]">{children}</div>;
}

export default AnimeWrapper;
