import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      
      {/* Heading */}
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Cards Section */}
      <div className="row text-center">

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Our asset management venture creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/sensibullLogo.svg"
            alt="sensibull"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Options trading platform that lets you create strategies and analyze positions.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/streakLogo.png"
            alt="streak"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/goldenpiLogo.png"
            alt="goldenpi"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Investment research platform offering insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-4 d-flex flex-column align-items-center">
          <img
            src="/font-awesome-4.7.0/media/images/dittoLogo.png"
            alt="ditto"
            style={{
              width: "60%",
              height: "50px",
              objectFit: "contain"
            }}
          />
          <p className="text-muted mt-3" style={{ maxWidth: "280px" }}>
            Personalized advice on life and health insurance.
            No spam and no mis-selling.
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary fs-5 px-4 py-2">
          Signup Now
        </button>
      </div>

    </div>
  );
}

export default Universe;
