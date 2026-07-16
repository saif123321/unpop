import React, { useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils/assetUrl";
import "./pdp.css";
import "./responsivepdp.css";

function useHandshakeScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // Starts when section is still below; finishes when it reaches the top
      const start = vh * 0.95;
      const end = vh * 0.08;
      const next = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, next)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

export default function PdpSipSection() {
  const handshakeRef = useRef(null);
  const progress = useHandshakeScrollProgress(handshakeRef);

  // Move in from the sides while scrolling (0 → together)
  const outward = (1 - progress) * 80;

  // Last step only: fade still → play near the end of the scroll
  const fade = Math.min(1, Math.max(0, (progress - 0.92) / 0.08));
  const stillOpacity = 1 - fade;
  const playOpacity = fade;

  const leftTransform = `translate3d(${-outward}%, 0, 0)`;
  const rightTransform = `translate3d(${outward}%, 0, 0)`;

  return (
    <>
      <div className="pdp-sip-section__container-bg">
        <img
          src={assetUrl("/images/pdp/patten-bg1.png")}
          alt=""
          aria-hidden="true"
          className="pdp-sip-section__pattern"
        />

        <section id="pdp-sip-section" className="pdp-sip-section">
          <div className="pdp-sip-section__inner">
            <div className="pdp-sip-section__copy">
              <h2 className="pdp-sip-section__title">Sip And Uplift</h2>
              <p className="pdp-sip-section__desc">
                Naturally sweetened with real dates and crafted for clean,
                refreshing energy that supports your daily lifestyle without
                compromise.
              </p>

              <div className="pdp-sip-section__ingredients">
                <h3 className="pdp-sip-section__ingredients-label">
                  Ingredients:
                </h3>
                <p className="pdp-sip-section__ingredients-text">
                  Filtered Water, Organic Date Syrup, Natural Flavors, Fruit
                  Juice (for color), Organic Cardamom Extract, Citric Acid,
                  Tartaric Acid, Organic Cloves Extract, Reb M. Caffeine (from
                  Green Tea)
                </p>
              </div>
            </div>

            <div className="pdp-sip-section__visual">
              <div className="pdp-sip-section__can-wrap">
                <img
                  src={assetUrl("/images/pdp/sip-img.png")}
                  alt="UnPop! Sublime Cola nutrition facts"
                  className="pdp-sip-section__can"
                />
              </div>
            </div>
          </div>
        </section>

        <img
          src={assetUrl("/images/pdp/Joy Without the junk.png")}
          alt="Joy Without the junk"
          className="pdp-sip-section__joy"
        />
      </div>

      <div className="pdp-handshake-section__container-bg">
        <section
          ref={handshakeRef}
          id="pdp-handshake-section"
          className="pdp-handshake-section"
          aria-label="UnPop product handshake"
        >
          <div className="pdp-handshake-section__inner">
            <div
              className="pdp-handshake-section__side pdp-handshake-section__side--left"
              style={{ transform: leftTransform }}
            >
              <img
                src={assetUrl("/images/pdp/left-unpop.png")}
                alt=""
                className="pdp-handshake-section__img pdp-handshake-section__img--still"
                style={{ opacity: stillOpacity }}
                aria-hidden="true"
                draggable={false}
              />
              <img
                src={assetUrl("/images/pdp/left-unpop-play.png")}
                alt=""
                className="pdp-handshake-section__img pdp-handshake-section__img--play"
                style={{ opacity: playOpacity }}
                aria-hidden="true"
                draggable={false}
              />
            </div>

            <div
              className="pdp-handshake-section__side pdp-handshake-section__side--right"
              style={{ transform: rightTransform }}
            >
              <img
                src={assetUrl("/images/pdp/right-unpop.png")}
                alt=""
                className="pdp-handshake-section__img pdp-handshake-section__img--still"
                style={{ opacity: stillOpacity }}
                aria-hidden="true"
                draggable={false}
              />
              <img
                src={assetUrl("/images/pdp/right-unpop-play.png")}
                alt=""
                className="pdp-handshake-section__img pdp-handshake-section__img--play"
                style={{ opacity: playOpacity }}
                aria-hidden="true"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <div className="pdp-pattern-section" aria-hidden="true">
          <img
            src={assetUrl("/images/pdp/patten-bg2.png")}
            alt=""
            className="pdp-pattern-section__bg"
          />
        </div>
      </div>
    </>
  );
}
