import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <main className={`h-full ${inter.className}`}>
      <header className="bg-blue-500 mb-5">
        <nav className="py-5 max-w-[1200px] px-4 m-auto flex items-center justify-between">
          <h1 className="text-white">Helpi</h1>
          <ul className="flex">
            <li className="ml-7">
              <Link className="text-white" href="/">
                Início
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}
