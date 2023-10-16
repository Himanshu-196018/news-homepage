// import React from "react";

const Bottom = () => {
  return (
    <section className="bottom-section">
      <div className="news-card">
        <img src="/images/image-retro-pcs.jpg" alt="Retro PC" />

        <div className="info">
          <span>01</span>
          <h3>
            <a className="hover hover-red">Reviving Retro PCs</a>
          </h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="news-card">
        <img src="/images/image-top-laptops.jpg" alt="Laptop" />

        <div className="info">
          <span>02</span>
          <h3>
            <a className="hover hover-red">Top 10 Laptops of 2022</a>
          </h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="news-card">
        <img src="/images/image-gaming-growth.jpg" alt="" />

        <div className="info">
          <span>03</span>
          <h3>
            <a className="hover hover-red">The Growth of Gaming</a>
          </h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
