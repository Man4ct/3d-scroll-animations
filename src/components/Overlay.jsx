import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-lg lg:text-2xl">
            Hello, I'm Fahmi
          </h1>
          <p className="text-gray-500 text-sm lg:text-base">
            Welcome to my short portfolio
          </p>
          <p className="mt-3 text-sm lg:text-base">I know:</p>
          <ul className="leading-9 text-sm lg:text-base">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6 text-sm lg:text-base">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-lg lg:text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="mt-3 text-sm lg:text-base">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9 text-sm lg:text-base">
            <li>ReactJS</li>
            <li>Tailwind</li>
            <li>ThreeJS</li>
          </ul>
          <p className="mt-3 text-sm lg:text-base">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9 text-sm lg:text-base">
            <li>NodeJS</li>
            <li>Express</li>
            <li>GraphQL</li>
          </ul>
          <p className="animate-bounce mt-6 text-sm lg:text-base">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-lg lg:text-2xl">
            Curious about my work? 🤔
          </h1>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg text-sm lg:text-base">
            <a href="https://github.com/Man4ct">Visit my Github Page</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
