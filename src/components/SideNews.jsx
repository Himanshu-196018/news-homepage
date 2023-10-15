// import React from "react";

const SideNews = () => {
  return (
    <aside>
      <h2>New</h2>

      <div className="box">
        <h3>
          <a className="hover hover-orange">Hydrogen VS Electric Cars</a>
        </h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>

      <hr />

      <div className="box">
        <h3>
          <a className="hover hover-orange">The Downsides of AI Artistry</a>
        </h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <hr />

      <div className="box">
        <h3>
          <a className="hover hover-orange">Is VC Funding Drying Up?</a>
        </h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
};

export default SideNews;
