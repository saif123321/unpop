import React, { useCallback, useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils/assetUrl";
import "./pdp.css";
import "./responsivepdp.css";

const FAN_VIDEOS = [
  {
    id: "fan-1",
    poster: assetUrl("/images/pdp/fansay/fan-1.png"),
    src: assetUrl("/images/pdp/fansay/fan-1.mp4"),
    label: "Fan video 1",
  },
  {
    id: "fan-2",
    poster: assetUrl("/images/pdp/fansay/fan-2.png"),
    src: assetUrl("/images/pdp/fansay/fan-2.mp4"),
    label: "Fan video 2",
  },
  {
    id: "fan-3",
    poster: assetUrl("/images/pdp/fansay/fan-3.png"),
    src: assetUrl("/images/pdp/fansay/fan-3.mp4"),
    label: "Fan video 3",
  },
  {
    id: "fan-4",
    poster: assetUrl("/images/pdp/fansay/fan-4.png"),
    src: assetUrl("/images/pdp/fansay/fan-4.mp4"),
    label: "Fan video 4",
  },
  {
    id: "fan-5",
    poster: assetUrl("/images/pdp/fansay/fan-2.png"),
    src: assetUrl("/images/pdp/fansay/fan-2.mp4"),
    label: "Fan video 5",
  },
  {
    id: "fan-6",
    poster: assetUrl("/images/pdp/fansay/fan-3.png"),
    src: assetUrl("/images/pdp/fansay/fan-3.mp4"),
    label: "Fan video 6",
  },
  {
    id: "fan-7",
    poster: assetUrl("/images/pdp/fansay/fan-4.png"),
    src: assetUrl("/images/pdp/fansay/fan-4.mp4"),
    label: "Fan video 7",
  },
];

const AUTO_MS = 30000;
const LOOP_COPIES = 3;
const DRAG_THRESHOLD = 12;

function buildLoopSlides(items) {
  const slides = [];
  for (let copy = 0; copy < LOOP_COPIES; copy += 1) {
    items.forEach((item, index) => {
      slides.push({
        ...item,
        key: `${copy}-${item.id}-${index}`,
        copy,
        baseIndex: index,
      });
    });
  }
  return slides;
}

export default function PdpFansay() {
  const trackRef = useRef(null);
  const videoRefs = useRef({});
  const dragRef = useRef({
    active: false,
    dragging: false,
    startX: 0,
    startScroll: 0,
    suppressClick: false,
    pointerId: null,
  });
  const autoPausedRef = useRef(false);
  const [activeId, setActiveId] = useState(null);
  const [posterOk, setPosterOk] = useState({});
  const slides = buildLoopSlides(FAN_VIDEOS);

  const pauseOthers = useCallback((exceptKey) => {
    Object.entries(videoRefs.current).forEach(([key, el]) => {
      if (!el || key === exceptKey) return;
      el.pause();
      el.currentTime = 0;
    });
  }, []);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 280;
    const card = track.querySelector(".pdp-fansay__card");
    if (!card) return 280;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 16;
    return card.offsetWidth + gap;
  }, []);

  const getSetWidth = useCallback(() => getStep() * FAN_VIDEOS.length, [getStep]);

  const normalizeLoop = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const setWidth = getSetWidth();
    if (setWidth <= 0) return;

    if (track.scrollLeft <= setWidth * 0.15) {
      track.scrollLeft += setWidth;
    } else if (track.scrollLeft >= setWidth * 1.85) {
      track.scrollLeft -= setWidth;
    }
  }, [getSetWidth]);

  const scrollByCard = useCallback(
    (dir, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollBy({
        left: dir * getStep(),
        behavior: smooth ? "smooth" : "auto",
      });
      window.setTimeout(normalizeLoop, smooth ? 420 : 0);
    },
    [getStep, normalizeLoop]
  );

  const togglePlay = useCallback(
    async (slideKey) => {
      const el = videoRefs.current[slideKey];
      if (!el) return;

      if (activeId === slideKey && !el.paused) {
        el.pause();
        setActiveId(null);
        return;
      }

      pauseOthers(slideKey);

      try {
        // Prefer unmuted from a user tap; fall back to muted if blocked
        el.muted = false;
        await el.play();
        setActiveId(slideKey);
      } catch {
        try {
          el.muted = true;
          await el.play();
          setActiveId(slideKey);
        } catch {
          setActiveId(null);
        }
      }
    },
    [activeId, pauseOthers]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const place = () => {
      track.scrollLeft = getSetWidth();
    };

    place();
    requestAnimationFrame(place);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [getSetWidth]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (autoPausedRef.current || dragRef.current.active) return;
      scrollByCard(1, true);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [scrollByCard]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (dragRef.current.dragging) return;
      normalizeLoop();
    };

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragRef.current = {
        active: true,
        dragging: false,
        startX: e.clientX,
        startScroll: track.scrollLeft,
        suppressClick: false,
        pointerId: e.pointerId,
      };
      autoPausedRef.current = true;
    };

    const onPointerMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;

      if (!dragRef.current.dragging && Math.abs(dx) >= DRAG_THRESHOLD) {
        dragRef.current.dragging = true;
        dragRef.current.suppressClick = true;
        track.classList.add("is-dragging");
        try {
          track.setPointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
        pauseOthers(null);
        setActiveId(null);
      }

      if (!dragRef.current.dragging) return;
      track.scrollLeft = dragRef.current.startScroll - dx;
    };

    const endDrag = (e) => {
      if (!dragRef.current.active) return;
      const wasDragging = dragRef.current.dragging;
      dragRef.current.active = false;
      dragRef.current.dragging = false;
      track.classList.remove("is-dragging");

      if (wasDragging) {
        normalizeLoop();
      }

      window.setTimeout(() => {
        autoPausedRef.current = false;
        dragRef.current.suppressClick = false;
      }, 50);

      if (e?.pointerId != null) {
        try {
          track.releasePointerCapture(e.pointerId);
        } catch {
          /* ignore */
        }
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [normalizeLoop, pauseOthers]);

  useEffect(() => () => pauseOthers(null), [pauseOthers]);

  const onMediaClick = (event, slideKey) => {
    event.preventDefault();
    if (dragRef.current.suppressClick) return;
    togglePlay(slideKey);
  };

  return (
    <section
      id="reviews"
      className="pdp-fansay"
      aria-labelledby="pdp-fansay-title"
    >
      <div className="pdp-fansay__inner">
        <h2 id="pdp-fansay-title" className="pdp-fansay__title">
          What Our Fans Say
        </h2>

        <div className="pdp-fansay__slider">
          <div
            className="pdp-fansay__track"
            ref={trackRef}
            role="list"
            aria-label="Fan videos carousel"
          >
            {slides.map((item) => {
              const isPlaying = activeId === item.key;
              const hasPoster = posterOk[item.key];

              return (
                <article
                  key={item.key}
                  className="pdp-fansay__card"
                  role="listitem"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className={`pdp-fansay__media${isPlaying ? " is-playing" : ""}`}
                    onClick={(e) => onMediaClick(e, item.key)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        togglePlay(item.key);
                      }
                    }}
                    aria-label={
                      isPlaying ? `Pause ${item.label}` : `Play ${item.label}`
                    }
                  >
                    {!hasPoster && (
                      <span
                        className="pdp-fansay__poster-fallback"
                        aria-hidden="true"
                      />
                    )}
                    <img
                      src={item.poster}
                      alt=""
                      className="pdp-fansay__poster"
                      loading="lazy"
                      draggable={false}
                      onLoad={() =>
                        setPosterOk((prev) => ({ ...prev, [item.key]: true }))
                      }
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <video
                      ref={(node) => {
                        if (node) videoRefs.current[item.key] = node;
                        else delete videoRefs.current[item.key];
                      }}
                      className="pdp-fansay__video"
                      src={item.src}
                      poster={item.poster}
                      playsInline
                      preload="auto"
                      loop
                      draggable={false}
                      onEnded={() => setActiveId(null)}
                    />
                    <span
                      className="pdp-fansay__play"
                      aria-hidden="true"
                      data-playing={isPlaying ? "true" : "false"}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
