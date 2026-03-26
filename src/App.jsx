import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "capo";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "هنوشه",
      heroSub: "أجمل بنوته في الدنيا كلها ❤️",
      heroText:
        "بحبك حب كبير أوي، وكل يوم بيعدي بتأكديلي إنك أجمل نعمة في حياتي، وإن وجودك جنبي هو الأمان والفرحة والراحة اللي بدور عليهم من زمان ❤️",
      meetTitle: "أول مرة عرفنا بعض ❤️",
      meetDate: "2024-05-25",
      timerTitle: "من يوم ما عرفنا بعض ❤️",
      timerText:
        "من يوم 25/5/2024 وحياتي بقت أحلى، وكل لحظة بتعدي بتأكدلي إنك أجمل حد دخل حياتي، وإن قلبي اختارك من أول مرة ❤️",
      longMessage:
        "إنتي مش مجرد حد بحبه… إنتي حته من قلبي، وفرحتي، وسبب ضحكتي، وراحة روحي. وجودك في حياتي مخلّي كل حاجة أحلى وأحنّ وأهدى. وكل يوم بقضي منه دقيقة معاكي بحس إني محظوظ أوي، وبحبك أكتر من اليوم اللي قبله، وبشوف فيكي كل المعاني الحلوة اللي نفسي أفضل عايش بيها طول عمري ❤️",
      cuteText:
        "يا هنوشه يا أجمل وأحن وأرق قلب في الدنيا… الموقع ده معمول ليكي إنتي وبس يا كل دنيتي 💖",
      footerText: "بحبك يا هنوشه ❤️🌷",
      birthTitle: "اليوم اللي اتولدت فيه أجمل إنسانة ❤️",
      birthDate: "2009-01-13",
      birthText:
        "في يوم 13/1/2009 اتولدت أجمل إنسانة شافتها عيني، اتولدت الضحكة الحلوة، والروح الطيبة، والقلب اللي يقدر يطمن أي حد بكلمة واحدة. ومن اليوم ده والدنيا بقى فيها حد مميز جدًا… حد اسمه هنوشه ❤️",
    }),
    []
  );

 const memoryCards = useMemo(
  () => [
    {
      id: 1,
      title: "من أول معرفة",
      image: "/1.jpg",
      date: "2024-05-25",
      text: "من أول يوم عرفنا بعض… قلبي حس إنك مختلفة ومميزة أوي ❤️",
    },
    {
      id: 2,
      title: "هنوشه",
      image: "/2.jpg",
      date: "أجمل ذكرى",
      text: "إنتي أجمل حد دخل حياتي، وأحن قلب، وألطف روح شافها قلبي 💞",
    },
    {
      id: 3,
      title: "كل دنيتي",
      image: "/3.jpg",
      date: "أحلى لحظة",
      text: "بحبك حب كبير أوي، وكل يوم بتكبري جوا قلبي أكتر ❤️",
    },
    {
      id: 4,
      title: "عيد ميلاد أجمل بنوته",
      image: "/4.jpg",
      date: "2009-01-13",
      text: "في اليوم ده اتولدت أجمل إنسانة… اتولدت هنوشه، وأشرقت الدنيا بيها ❤️",
    },
    {
      id: 5,
      title: "ضحكتك",
      image: "/5.jpg",
      date: "ذكرى جميلة",
      text: "ضحكتك بالنسبالي راحة وطمأنينة، وأجمل حاجة ممكن تخلّي يومي ينوّر 💖",
    },
    {
      id: 6,
      title: "أحلى أيام",
      image: "/6.jpg",
      date: "لحظة مميزة",
      text: "كل صورة ليكي عندي هي حكاية حب جديدة، وكل تفصيلة فيكي بتخليني أحبك أكتر ❤️",
    },
  ],
  []
);

  const timelineItems = useMemo(
    () => [
      {
        title: "يوم ما عرفنا بعض",
        date: "2024-05-25",
        text: "اليوم اللي بدأت فيه أجمل حكاية وأحلى شعور في قلبي.",
      },
      {
        title: "أول ذكرى حلوة",
        date: "بعدها بفترة",
        text: "أول تفاصيل جميلة بدأت تفضل محفورة جوايا بسببك.",
      },
      {
        title: "يوم ميلادك",
        date: "2009-01-13",
        text: "في اليوم ده اتولدت أجمل وأحن وأرق إنسانة في الدنيا كلها.",
      },
      {
        title: "وكل يوم حب أكتر",
        date: "كل يوم",
        text: "وكل يوم بيعدي بحبك فيه أكتر وبشوفك أجمل من اليوم اللي قبله.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "أجمل ضحكة", value: "100%" },
      { title: "مستوى الحب", value: "∞" },
      { title: "الفرحة", value: "معاكي" },
      { title: "الأمان", value: "في قربك" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["ضحكتك", "طيبتك", "عيونك", "حنانك", "صوتك", "قلبك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2024-05-25T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا هنوشه");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أحلى مفاجأة لهنوشه 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="هنوشه" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💖 خاص بهنوشه</div>

          <h1>اكتبي كلمة السر يا أجمل هنوشه</h1>

          <p className="password-subtext">
            الموقع ده معمول مخصوص ليكي، ومش هيفتح غير لما تكتبي كلمة السر يا
            أجمل وأحن قلب ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للموقع ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ معمول بحب كبير جدًا</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزلي تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="هنوشه" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم مع بعض</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة حب</span>
          </div>
          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>ذكريات</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="هنوشه" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحكاية</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة مخصوص ليكي</span>
          <h2>كل الكلام الحلو ده ليكي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">🎂 يوم مميز جدًا</span>
          <h2>{content.birthTitle}</h2>
          <p>{content.birthText}</p>
          <div className="scene-date">{content.birthDate}</div>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها فيكي</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بكون معاكي</h3>
            <ul>
              <li>مرتاح</li>
              <li>مبسوط</li>
              <li>مطمّن</li>
              <li>بحب الدنيا</li>
              <li>بضحك من قلبي</li>
              <li>حاسس بالأمان</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>ترتيب بسيط وجميل لأحلى لحظاتنا</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>الكروت المتحركة</h3>
              <p>كل صورة ومعاها ذكرى وكلام حلو يليق بهنوشه</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “من يوم ما عرفنا بعض… وأنا قلبي عرف إنك أجمل حد فيه ❤️”
          </div>
          <div className="quote-box">
            “في يوم 13/1/2009 اتولدت أجمل بنوته نورت الدنيا كلها 💖”
          </div>
          <div className="quote-box">
            “بحبك حب كبير أوي… وكل يوم بحبك فيه أكتر من اليوم اللي قبله ❤️”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري أكبر</h3>
            <p>صور أكتر بشكل أنضف وأوسع</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>وجودك فرق</h3>
            <p>وجودك خلّى كل حاجة في حياتي أهدى وأجمل وأحنّ ❤️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>قلبي مطمّن</h3>
            <p>لأنك ساكنة فيه، ومفيش مكان لحد غيرك 💖</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أجمل هدية</h3>
            <p>إنتي أحلى نصيب وأجمل حاجة دخلت حياتي يا هنوشه 🌷</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>
            هتفضلي أجمل حد في عيني، وأحن قلب في الدنيا، وأحلى حكاية أنا عايشها
            ❤️
          </p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}