import { Open_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as lottie from "lottie-web";
import {
  faFaceSmileBeam,
  faFaceMeh,
  faFaceLaugh,
  faFaceFrown,
  faFaceFrownOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: el.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "animation.json",
    });
    setTimeout(() => {
      const animations = document.querySelectorAll(".animation svg");
      console.log(animations);
      animations.forEach((animation, i) => {
        if (i !== 0) {
          animation.remove();
        }
      });
    }, 100);
  }, []);

  return (
    <main className={` ${inter.className}`}>
      <header className="bg-blue-500 mb-10">
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
      <section className="pb-9">
        <div className="max-w-[600px] px-4 m-auto">
          <p className="mb-4">Olá, Sérgio, como está se sentindo hoje?</p>
          <div className="flex items-center gap-6 justify-between mb-5">
            <button className="rounded bg-blue-400 w-20 h-20">
              <FontAwesomeIcon className="text-white" icon={faFaceLaugh} />
            </button>
            <button className="rounded bg-blue-400  w-20 h-20">
              <FontAwesomeIcon className="text-white" icon={faFaceSmileBeam} />
            </button>
            <button className="rounded bg-blue-400  w-20 h-20">
              <FontAwesomeIcon className="text-white" icon={faFaceMeh} />
            </button>
            <button className="rounded bg-blue-400  w-20 h-20">
              <FontAwesomeIcon className="text-white" icon={faFaceFrownOpen} />
            </button>
            <button className="rounded bg-blue-400  w-20 h-20">
              <FontAwesomeIcon className="text-white" icon={faFaceFrown} />
            </button>
          </div>
          <div className="animation" ref={el} />
          <div className="mb-6">
            <button className="w-full bg-green-500 rounded text-white py-5 hover:bg-green-600">
              Iniciar Terapia
            </button>
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="bg-blue-100 rounded-xl rounded-bl-none p-2 text-base text-gray-700 max-w-xs mb-1 self-start w-full">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              </p>
              <p className="w-full text-left text-gray-500 text-xs">5:22</p>
            </div>
            <div className="mb-4 self-end">
              <p className="bg-blue-500  rounded-xl rounded-br-none p-2 text-base text-white max-w-xs mb-1 w-full">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              </p>
              <p className="w-full text-right text-gray-500 text-xs">5:22</p>
            </div>
            <div className="mb-4 self-end">
              <p className="bg-blue-500  rounded-xl rounded-br-none p-2 text-base text-white max-w-xs mb-1 w-full">
                lorem ipsum dolor
              </p>
              <p className="w-full text-right text-gray-500 text-xs">5:22</p>
            </div>
            <div className="mb-4">
              <p className="bg-blue-100 rounded-xl rounded-bl-none p-2 text-gray-700 max-w-xs self-start mb-1 text-base w-full">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="w-full text-left text-gray-500 text-xs">5:22</p>
            </div>
            <div className="flex gap-2">
              <textarea className="w-full h-20 border border-gray-300 rounded p-2" />
              <button
                disabled
                className="bg-gray-700 text-white rounded px-4 disabled:bg-gray-300"
              >
                Enviar
              </button>
            </div>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="text-gray-500 text-sm">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="text-gray-500 text-sm">
                Telefone
              </label>
              <input
                id="telefone"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="contato_emergencia"
                className="text-gray-500 text-sm"
              >
                Contato de emergência
              </label>
              <input
                id="contato_emergencia"
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex gap-5">
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-blue-500 text-white h-12 rounded w-full"
              >
                Cadastrar
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-gray-300 rounded h-12 w-full"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
