import React from "react";
import AsideArticle from "./AsideArticle";

function Aside() {
  const asideArticles = [
    {
      title: "Hydrogen VS Electric Cars",
      subtitle: "Will hydrogen-fueled cars even catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      subtitle:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      subtitle:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section className="px-4 py-6 mx-4 md:m-0 bg-veryDarkBlue text-offWhite">
      <h2 className="text-[32px] font-bold text-softOrange">News</h2>
      <div className="flex flex-col gap-8 divide-y">
        {asideArticles.map((article, index) => (
          <AsideArticle
            key={index}
            title={article.title}
            subtitle={article.subtitle}
          />
        ))}
      </div>
    </section>
  );
}

export default Aside;
