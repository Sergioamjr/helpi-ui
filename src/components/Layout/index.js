import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main className={`h-full ${inter.className}`}>
      <header className="bg-blue-500 mb-5">
        <nav className="py-5 max-w-[1200px] px-4 m-auto flex items-center justify-between">
          <h1 className="text-white">Helpi</h1>
          <ul className="flex">
            <li className="ml-7">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="ml-7">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="ml-7">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="ml-7">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}
