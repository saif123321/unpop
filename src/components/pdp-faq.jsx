import React, { useState } from "react";
import { assetUrl } from "../utils/assetUrl";
import "./pdp.css";
import "./responsivepdp.css";

const FAQ_ITEMS = [
  {
    question: "different how?",
    answer:
      "big soda uses artificial everything. functional foods use questionnaire science. we use real ingredients to make something that tastes like what you wanted all along.",
  },
  {
    question: "what's in it?",
    answer:
      "natural fruit sweetener, real cola flavor, carbonated water, and ingredients you can actually pronounce. full list in the section above.",
  },
  {
    question: "does it taste exactly like coke?",
    answer:
      "no. it tastes like what cola would be if it started with real ingredients instead of 40 artificial ones. the flavor is recognizably cola, but cleaner, less chemical finish, more natural sweetness. most people prefer it. some need a can or two to adjust.",
  },
  {
    question: "i'm used to diet soda, will i like this?",
    answer:
      "if you love aspartame zero calories, unpop isn't that. if you tolerate diet colas because regular soda makes you crash, try unpop. it tastes more like traditional cola than diet sodas, while making you crash less.",
  },
  {
    question: "does it have caffeine?",
    answer:
      "it does. roughly the same amount you'd find in regular cola. plan accordingly if you're watching your caffeine intake.",
  },
  {
    question: "is it good for me?",
    answer:
      "it's better than what you're drinking now. also, we use dates specifically because they don't spike blood sugar or cause sugar cravings.",
  },
  {
    question: "will this make me bloated?",
    answer:
      "unlikely. we use natural fruit sweetener instead of loading it with prebiotics or fiber that can upset your stomach. just carbonated cola made with real ingredients.",
  },
  {
    question: "sugar crash?",
    answer:
      "not with natural fruit sweetener. your blood sugar stays steady. your afternoon stays productive.",
  },
  {
    question: "shipping speed?",
    answer:
      "we ship within 24 hours and you'll have it within 3 business days. could be faster. rarely slower.",
  },
  {
    question: "subscription flexibility?",
    answer:
      "pause, skip, change frequency, or cancel anytime. we built it to be easy because we're not trying to trap you.",
  },
];

export default function PdpFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="pdp-faq__section">
    <img src={assetUrl("/images/pdp/patten-bg1.png")} alt="Pattern background" className="pdp-faq__pattern-bg" />
    <div
      id="pdp-faq"
      className="pdp-faq"
      aria-labelledby="pdp-faq-title"
    >
      <div className="pdp-faq__inner">
        <div className="pdp-faq__visual">
          <img
            src={assetUrl("/images/pdp/faq-pack.png")}
            alt="Hand reaching into an unPop! Sublime Cola 12-pack"
            className="pdp-faq__image"
          />
        </div>

        <div className="pdp-faq__content">
          <h2 id="pdp-faq-title" className="pdp-faq__title">
            Frequently Asked Questions
          </h2>

          <div className="pdp-faq__list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={`pdp-faq__item${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="pdp-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`pdp-faq-answer-${index}`}
                    id={`pdp-faq-question-${index}`}
                    onClick={() => toggle(index)}
                  >
                    <span className="pdp-faq__question-text">
                      {item.question}
                    </span>
                    <span className="pdp-faq__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`pdp-faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`pdp-faq-question-${index}`}
                    className="pdp-faq__answer"
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <img src={assetUrl("/images/pdp/patten-bg1.png")} alt="Pattern background" className="pdp-faq__pattern-bg" />
    </section>
  );
}
