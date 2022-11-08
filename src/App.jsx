import React from "react";

import Header from "./component/Header";
import Aside from "./component/Aside";
import MainArticle from "./component/MainArticle";
import FixedArticle from "./component/FixedArticle";

import mainArticleImage from "./asset/image-web-3-desktop.jpg";
import fixedArticle1Image from "./asset/image-retro-pcs.jpg";
import fixedArticle2Image from "./asset/image-top-laptops.jpg";
import fixedArticle3Image from "./asset/image-gaming-growth.jpg";

function App() {
  const fixedArticles = [
    {
      image: fixedArticle1Image,
      title: "Reviving Retro PCs",
      subtitle: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: fixedArticle2Image,
      title: "Top 10 Laptops 2022",
      subtitle: "Our best picks for various needs and budgets.",
    },
    {
      image: fixedArticle3Image,
      title: "The Growth of Gaming",
      subtitle: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  const mainArticle = {
    image: mainArticleImage,
    title: "The Bright Future of Web 3.0?",
    subtitle:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  };
  return (
    <div className="container mx-auto lg:px-[85px] md:pt-[90px] md:pb-[128px] font-inter text-veryDarkBlue">
      <Header />

      <main className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-x-7 md:gap-y-16">
        <MainArticle article={mainArticle} />

        <Aside />

        <div className="mx-4 md:m-0 md:p-0 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-7">
          {fixedArticles.map((article, index) => (
            <FixedArticle key={index} index={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
