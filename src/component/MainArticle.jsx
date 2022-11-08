import React from "react";
import mainArticleImageMobile from "../asset/image-web-3-mobile.jpg";
import mainArticleImageDesktop from "../asset/image-web-3-desktop.jpg";

function MainArticle({ article }) {
  return (
    <section className="md:col-span-2 mx-4 md:m-0 flex flex-col gap-6">
      <picture>
        <source media="(min-width: 768px)" srcSet={mainArticleImageDesktop} />
        <img
          className="col-span-2"
          src={mainArticleImageMobile}
          alt="Main Article Image"
        />
      </picture>

      <div className="md:grid grid-cols-2 gap-x-7">
        <h1 className="font-extrabold text-[40px] tracking-wide leading-10 md:text-[56px] md:leading-[56px]">
          {article.title}
        </h1>

        <div className="mt-3 md:mt-0 md:flex flex-col justify-between items-start">
          <p className="mb-[22px] leading-[170%] text-[15px] md:leading-[160%] text-darkGrayishBlue">
            {article.subtitle}
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 text-offWhite bg-softRed font-bold uppercase text-[15px] tracking-[.25em] hover:bg-veryDarkBlue"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainArticle;
