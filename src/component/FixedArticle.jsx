import React from "react";

function FixedArticle({ index, article }) {
  return (
    <div className="article__fixed flex gap-4">
      <img
        className="block w-[100px] h-[128px] object-cover object-bottom"
        src={article.image}
        alt="fixed article image"
      />
      <div className="article__content flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-grayishBlue">{`0${
          index + 1
        }`}</h2>
        <div className="article__content">
          <h3 className="text-xl font-bold">
            <a href="#" className="hover:text-softRed">
              {article.title}
            </a>
          </h3>
          <p className="text-darkGrayishBlue mt-2">{article.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default FixedArticle;
