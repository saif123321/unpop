import React from "react";
import { assetUrl } from "../utils/assetUrl";
import "./pdp.css";
import "./responsivepdp.css";

const ROWS = [
  {
    feature: "Sweetener",
    unpop: "DATE SYRUP + STEVIA",
    bigSoda: "HF CORN SYRUP OR ASPARTAME",
    gutSoda: "STEVIA + SUGAR + PREBIOTICS",
  },
  {
    feature: "Aftertaste",
    unpop: "CLEAN, CRISP, & GONE",
    bigSoda: "CLOYING SUGAR CRASH",
    gutSoda: "CHALKY, FAKE-SWEET",
  },
  {
    feature: "The talk",
    unpop: "HONESTLY",
    bigSoda: "NOSTALGIA & JINGLES",
    gutSoda: "SCIENCE PROJECT MEETS NSYNC",
  },
  {
    feature: "The feels",
    unpop: "ALIVE, FIZZY, REAL",
    bigSoda: "HEAVY",
    gutSoda: "CONFUSED",
  },
  {
    feature: "What you're buying",
    unpop: "SODA, HOW IT OUGHT TO BE",
    bigSoda: "A FEELING FROM 1987",
    gutSoda: "QUESTIONABLE GUT SCIENCE",
  },
];

export default function PdpOurBenefits() {
  return (
    <section
      id="pdp-our-benefits"
      className="pdp-our-benefits"
      aria-labelledby="pdp-our-benefits-title"
    >
      <div className="pdp-our-benefits__inner">
        <h2 id="pdp-our-benefits-title" className="pdp-our-benefits__title">
          Our Benefits
        </h2>

        <div className="pdp-our-benefits__scroll">
          <div
            className="pdp-our-benefits__table"
            role="table"
            aria-label="UnPop compared to Big Soda and Gut Soda"
          >
            <div className="pdp-our-benefits__row pdp-our-benefits__row--head" role="row">
              <div
                className="pdp-our-benefits__cell pdp-our-benefits__cell--feature pdp-our-benefits__cell--head"
                role="columnheader"
              >
                Features
              </div>
              <div
                className="pdp-our-benefits__cell pdp-our-benefits__cell--unpop pdp-our-benefits__cell--head"
                role="columnheader"
              >
                <img
                  src={assetUrl("/images/logo.png")}
                  alt="unPop!"
                  className="pdp-our-benefits__logo"
                />
              </div>
              <div
                className="pdp-our-benefits__cell pdp-our-benefits__cell--brand pdp-our-benefits__cell--head"
                role="columnheader"
              >
                BIG SODA
              </div>
                <div
                className="pdp-our-benefits__cell pdp-our-benefits__cell--brand pdp-our-benefits__cell--head"
                role="columnheader"
              >
                GUT SODA
              </div>
            </div>

            {ROWS.map((row, index) => (
              <div
                key={row.feature}
                className={`pdp-our-benefits__row${index === ROWS.length - 1 ? " pdp-our-benefits__row--last" : ""}`}
                role="row"
              >
                <div
                  className="pdp-our-benefits__cell pdp-our-benefits__cell--feature"
                  role="rowheader"
                >
                  {row.feature}
                </div>
                <div
                  className="pdp-our-benefits__cell pdp-our-benefits__cell--unpop"
                  role="cell"
                >
                  {row.unpop}
                </div>
                <div
                  className="pdp-our-benefits__cell pdp-our-benefits__cell--brand"
                  role="cell"
                >
                  {row.bigSoda}
                </div>
                <div
                  className="pdp-our-benefits__cell pdp-our-benefits__cell--brand"
                  role="cell"
                >
                  {row.gutSoda}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
