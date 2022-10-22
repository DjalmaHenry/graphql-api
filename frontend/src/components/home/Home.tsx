import React from "react";
import HomeCard from "./home-card/HomeCard";

export default function Home() {
  const abc = [
    {
      id: 1,
      name: "Detalhes",
      description:
        "iPhone 14 pro max, de 512gb com 3 cameras, tela de 6.7 polegadas e processador A15 Bionic de 5nm com 6 núcleos.",
      image:
        "https://www.apple.com/v/iphone/home/ae/images/overview/compare/compare_iphone_14_pro__f2x.png",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: "Detalhes",
      description:
        "iPhone 14 pro max, de 512gb com 3 cameras, tela de 6.7 polegadas e processador A15 Bionic de 5nm com 6 núcleos.",
      image:
        "https://www.apple.com/v/iphone/home/ae/images/overview/compare/compare_iphone_14_pro__f2x.png",
      like: 0,
      dislike: 0,
    },
  ];
  return (
    <main>
      <h1>Home</h1>
      <div>
        {abc.map((item) => (
          <HomeCard></HomeCard>
        ))}
      </div>
    </main>
  );
}
