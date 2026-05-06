import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as lottie from "lottie-web";
import {
  faFaceSmileBeam,
  faFaceMeh,
  faFaceLaugh,
  faFaceFrown,
  faFaceFrownOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import Layout from "../components/Layout";

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
      animations.forEach((animation, i) => {
        if (i !== 0) {
          animation.remove();
        }
      });
    }, 100);
  }, []);

  return (
    <Layout>
      <section className="pb-9">
        <div className="max-w-[600px] px-4 m-auto">
          <div className="animation" ref={el} />
          <div className="mb-6">
            <Link
              href="/chat"
              className="w-full block text-center bg-green-500 rounded text-white py-5 hover:bg-green-600"
            >
              Iniciar Terapia
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
