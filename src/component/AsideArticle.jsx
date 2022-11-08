import React from "react";
import MainArticle from "./MainArticle";

function AsideArticle({ title, subtitle }) {
  return (
    <div className="pt-8">
      <h3 className="font-bold text-[20px]">
        <a href="#" className="hover:text-softOrange">
          {title}
        </a>
      </h3>
      <p className="mt-[10px] text-[15px] leading-6 text-grayishBlue">
        {subtitle}
      </p>
    </div>
  );
}

export default AsideArticle;
