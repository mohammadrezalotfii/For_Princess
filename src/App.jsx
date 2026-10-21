import { useEffect, useMemo, useState } from 'react'
import { chapters, confessionLines, questions } from './content.js'
import { CatSticker, StickerText, moodFor, plainStickerText } from './CatSticker.jsx'
import StoryIcon from './StoryIcon.jsx'

const HeartIcon = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={filled ? 'heart-icon filled' : 'heart-icon'}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </svg>
)

function FloatingHearts({ intense = false, count = 11 }) {
  const hearts = useMemo(() => Array.from({ length: intense ? 28 : count }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 8) % 96}%`,
    delay: `${-((i * 1.73) % 12)}s`,
    duration: `${8 + (i % 5) * 1.8}s`,
    size: `${10 + (i % 4) * 5}px`,
  })), [intense, count])

  return <div className={`floating-hearts ${intense ? 'intense' : ''}`} aria-hidden="true">
    {hearts.map((heart) => <span key={heart.id} style={{ left: heart.left, animationDelay: heart.delay, animationDuration: heart.duration, width: heart.size, height: heart.size }}><HeartIcon /></span>)}
  </div>
}

function SkyPlayground() {
  return <div className="sky-playground" aria-hidden="true">
    <span className="cloud cloud-one" /><span className="cloud cloud-two" /><span className="cloud cloud-three" />
    {['✦', '✧', '·', '✦', '✧', '·'].map((star, i) => <span className="sky-star" key={i} style={{ left: `${10 + i * 16}%`, top: `${16 + (i * 19) % 65}%`, animationDelay: `${i * -.7}s` }}>{star}</span>)}
    <div className="tulip-garden">
      {Array.from({ length: 9 }, (_, i) => <svg key={i} className="tulip" viewBox="0 0 60 140" style={{ '--flower': ['#e987b1', '#82bde4', '#ca91cb'][i % 3], '--height': `${65 + (i * 17) % 46}px`, '--sway-delay': `${i * -.6}s` }}>
        <path d="M30 138 Q36 92 29 48" fill="none" stroke="#79a996" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 117 Q5 110 7 79 Q29 87 31 117Z" fill="#9bc6ad" />
        <path d="M32 102 Q56 94 54 65 Q34 76 32 102Z" fill="#79ad98" />
        <path d="M29 58 C6 57 9 26 8 16 Q20 18 30 32 Q39 17 51 15 C50 35 53 56 29 58Z" fill="var(--flower)" />
        <path d="M29 58 C15 48 19 28 30 11 C41 28 45 49 29 58Z" fill="var(--flower)" />
        <path d="M29 51 Q23 36 30 23" fill="none" stroke="white" strokeOpacity=".32" strokeWidth="2" strokeLinecap="round" />
      </svg>)}
    </div>
  </div>
}

function Sparkles() {
  return <div className="sparkles" aria-hidden="true">
    {Array.from({ length: 20 }, (_, i) => <i key={i} style={{ '--x': `${(i * 29) % 100}%`, '--y': `${(i * 47) % 100}%`, '--d': `${(i % 7) * .35}s` }} />)}
  </div>
}

function WelcomeScreen({ onStart }) {
  const [boops, setBoops] = useState(0)
  const [petMessage, setPetMessage] = useState(0)
  const petMessages = ['اخییییییش، چقد خوبه', 'بیشتر نازی کن بیشتررر نازی کننننن', 'اینطوری نازی کنی بیهوش میشم بخودا']
  const petCat = () => {
    if (boops >= 1) setPetMessage(previous => boops === 1 ? Math.floor(Math.random() * 3) : (previous + 1 + Math.floor(Math.random() * 2)) % 3)
    setBoops(value => value + 1)
  }
  return <main className="screen welcome-screen">
    <SkyPlayground />
    <section className="welcome-card card-enter">
      {/* <div className="mini-label"><span className="status-dot" />اولین پروژه مخصوص دلبری</div> */}
      <button className="mascot-wrap mascot-button" onClick={petCat} aria-label="ناز کردن پیشی">
        <div className="mascot-halo" />
        <div className="mascot" key={boops}><CatSticker mood={boops === 0 ? 'happy' : boops === 1 ? 'grumpy' : ['bliss', 'sparkly', 'melting'][petMessage]} /><span className="mascot-heart">✦</span></div>
        <span className={`boop-note ${boops === 0 ? 'pet-invitation' : ''}`} key={`note-${boops}`} role="status">{boops === 0 ? 'منو نازی کنننن' : boops === 1 ? 'چرا میزنیییی، گفتم نازی کنننن' : petMessages[petMessage]}</span>
      </button>
      <p className="eyebrow">مطمئن باش تنهایی، بعد رو شروع بزن</p>
      <h1>سلام پرنسس کوچولوووو!</h1>
      {/* <p className="lead">یه تست خیلی علمی و معتبر برات آماده شده که قراره میزان شیطنت، مظلومیت و مشکوک بودن ذهنت رو اندازه بگیره!</p> */}
      <p className="lead">این یه تست خیلی مرموزه که باید حتما تو تنهایی انجام بشه. قراره میزان شیطنت، مظلومیت و مشکوک بودن ذهنتو بسنجم</p>
      <p className="sublead">جوابات محرمانس و کسی نمی‌بینتشون <span>(البته به جز من. چون به من میرسه)</span></p>
      <div className="warning"><CatSticker mood="shy" />مسئولیت سرخ شدنت با خودته و من فقط سوال کنندم!</div>
      <button className="primary-button" onClick={onStart}><span>مگه قراره چه اتفاقی بیفته؟</span><StoryIcon name="arrow" /></button>
      <p className="tiny-note">زمان تقریبی: به اندازه‌ی یک لبخند کوچولو</p>
    </section>
  </main>
}

function ProgressIndicator({ current }) {
  const chapter = chapters[questions[current].chapter]
  const percent = ((current + 1) / questions.length) * 100
  return <header className="progress-wrap">
    <div className="progress-meta">
      <span><StickerText>{chapter.icon}</StickerText> {chapter.eyebrow}</span>
      <span>{current + 1} از {questions.length}</span>
    </div>
    <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }}><span /></div></div>
    <div className="chapter-dots" aria-label={`بخش ${questions[current].chapter + 1} از ۵`}>
      {chapters.map((item, index) => <span key={item.id} className={index <= questions[current].chapter ? 'active' : ''} />)}
    </div>
  </header>
}

function AnswerOption({ text, index, selected, locked, onSelect }) {
  const mood = /\p{Extended_Pictographic}/u.test(text) ? moodFor(text) : ['curious', 'bliss', 'hug'][index]
  return <button
    className={`answer-option ${selected ? 'selected' : ''}`}
    onClick={onSelect}
    style={{ '--delay': `${index * 90}ms` }}
    aria-pressed={selected}
    disabled={locked}
  >
    <span className={`answer-cat anime-${mood}`}><CatSticker mood={mood} /><span className="cat-aura" aria-hidden="true"><i /><i /><i /></span></span>
    <span>{plainStickerText(text)}</span>
    <span className="checkmark"><StoryIcon name="check" /></span>
  </button>
}

function ReactionMessage({ children, mood }) {
  return <div className="reaction" role="status">
    <span className="reaction-avatar"><CatSticker mood={mood} /></span>
    <p><StickerText>{children}</StickerText></p>
  </div>
}

function QuestionScreen({ current, answer, confirmed, onSelect, onNext, onBack }) {
  const item = questions[current]
  const chapter = chapters[item.chapter]
  return <main className={`screen question-screen tone-${chapter.id}`}>
    <SkyPlayground />
    <FloatingHearts count={[0, 0, 0, 0, 2, 4, 7, 10, 15, 20][current]} />
    <div className="quiz-shell">
      <ProgressIndicator current={current} />
      <section className="question-card card-enter" key={current}>
        <div className="question-topline">
          <span className="chapter-chip">بخش {item.chapter + 1} · {chapter.title}</span>
          <span className="question-mark">؟</span>
        </div>
        <h2><StickerText>{item.question}</StickerText></h2>
        <div className="options-list">
          {item.options.map((option, index) => <AnswerOption key={option} text={option} index={index} selected={answer !== undefined && answer === index} locked={confirmed} onSelect={() => onSelect(index)} />)}
        </div>
        {answer !== undefined && <ReactionMessage key={answer} mood={['cheeky', 'curious', 'hug'][answer]}>{item.reaction[answer]}</ReactionMessage>}
        <div className="question-actions">
          <button className="back-button" onClick={onBack} aria-label="برگشت به مرحله قبل"><StoryIcon name="back" /> برگشت</button>
          {answer !== undefined && <button className="next-button" onClick={onNext}>{current === questions.length - 1 ? 'بریم سر اصل مطلب' : 'سؤال بعدی'} <StoryIcon name="arrow" /></button>}
        </div>
      </section>
    </div>
  </main>
}

function SecretLetter({ onOpen }) {
  const [opened, setOpened] = useState(false)
  const openLetter = () => {
    setOpened(true)
    window.setTimeout(onOpen, 1150)
  }
  return <main className="screen secret-screen">
    <SkyPlayground />
    <Sparkles />
    <FloatingHearts />
    <section className="secret-content card-enter">
      <div className="ending-cat"><CatSticker mood="shy" /></div>
      <p className="eyebrow light">یه پیام محرمانه برات رسیده</p>
      <div className={`envelope-scene ${opened ? 'opened' : ''}`} aria-hidden="true">
        <div className="letter-aura" />
        <div className="letter-paper"><HeartIcon /><span>فقط برای عسل</span></div>
        <div className="envelope-back" />
        <div className="envelope-front" />
        <div className="envelope-flap" />
        <div className="seal"><HeartIcon /></div>
        <span className="letter-spark letter-spark-one">✧</span><span className="letter-spark letter-spark-two">✦</span>
      </div>
      <h2>یه چیزی هست که باید بدونی، عسل...</h2>
      <p>از اول این بازی، فقط یه جواب بود که خودم از قبل می‌دونستم.</p>
      <p>جواب اینکه چرا این همه وقت گذاشتم تا این سایت رو فقط برای تو بسازم.</p>
      <button className="secret-button" onClick={openLetter} disabled={opened}><StickerText>{opened ? 'دارم رازمو می‌گم...' : 'رازتو بگو، آقای مشکوک! 👀'}</StickerText></button>
    </section>
  </main>
}

function HiddenEnding() {
  return <section className="hidden-ending card-enter">
    <div className="ending-story-cat"><CatSticker mood="shy" /></div>
    <p>راستش قرار بود این اولین باری باشه که بهت می‌گم دوستت دارم...</p>
    <p>ولی خب قبلش داشت اتفاقایی می‌افتاد که ممکن بود برای همیشه از دستت بدم.!</p>
    <div className="ending-story-cat small"><CatSticker mood="hug" /></div>
    <p className="soft">اما این دلیل نمی‌شد که اینارو نبینییییی.</p>
    <footer>Made by Mohammadreza, just for Asal.</footer>
  </section>
}

const confessionScript = ['پرنسس کوچولو', ...confessionLines, 'دوستت دارم', 'از طرف همون پسر مشکوکی که معلوم نبود بهت علاقه داره یا با همه اینطوریه']
const typingSpeed = 65
const typingStart = (index) => 700 + confessionScript.slice(0, index).reduce((time, line) => time + Array.from(line).length * typingSpeed + 1300, 0)

function TypedLine({ index }) {
  const [count, setCount] = useState(0)
  const letters = Array.from(confessionScript[index])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setCount(letters.length); return }
    let interval
    const timer = window.setTimeout(() => {
      let position = 0
      interval = window.setInterval(() => {
        position += 1
        setCount(position)
        if (position >= letters.length) window.clearInterval(interval)
      }, typingSpeed)
    }, typingStart(index))
    return () => { window.clearTimeout(timer); window.clearInterval(interval) }
  }, [index])
  return <span className="typed-line" aria-label={confessionScript[index]}>
    <span className="typed-reserve" aria-hidden="true">{confessionScript[index]}</span>
    <span className="typed-visible" aria-hidden="true">{letters.slice(0, count).join('')}</span>
  </span>
}

function ConfessionScreen({ onRestart }) {
  const [showEnding, setShowEnding] = useState(false)
  const [showHeart, setShowHeart] = useState(false)
  const [ready, setReady] = useState(false)
  const [loveVisible, setLoveVisible] = useState(false)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setReady(true), reduced ? 0 : typingStart(confessionScript.length))
    const loveTimer = window.setTimeout(() => setLoveVisible(true), reduced ? 0 : typingStart(4))
    return () => { window.clearTimeout(timer); window.clearTimeout(loveTimer) }
  }, [])
  return <main className="screen confession-screen">
    <SkyPlayground />
    <Sparkles />
    <FloatingHearts intense />
    <div className="glow-orb" aria-hidden="true" />
    <section className={`confession-content ${showEnding ? 'ending-open' : ''}`}>
      <div className="ending-cat"><CatSticker mood="love" /></div>
      <p className="confession-kicker"><TypedLine index={0} /></p>
      {confessionLines.map((line, index) => <p className="confession-line" key={line}><TypedLine index={index + 1} /></p>)}
      <div className={`love-declaration ${loveVisible ? 'is-visible' : 'is-waiting'}`}>
        <h1><TypedLine index={4} /></h1>
        <HeartIcon />
      </div>
      <p className="signature"><TypedLine index={5} /></p>
      {ready && !showEnding && <button className="heart-project-button" onClick={() => setShowHeart(true)}>ببین چقدر دوستت دارم <StoryIcon name="heart" /></button>}
      {ready && !showEnding && <button className="hidden-button" onClick={() => setShowEnding(true)}>یه چیزی رو جا انداختم... <StoryIcon name="letter" /></button>}
      {showEnding && <><HiddenEnding /><button className="return-confession" onClick={() => setShowEnding(false)}><StoryIcon name="back" /> برگشت به حرف دلم</button><button className="restart-button" onClick={onRestart}>از اول ببینیم <StoryIcon name="restart" /></button></>}
    </section>
    {showHeart && <div className="heart-project-overlay" role="dialog" aria-modal="true" aria-label="به هر زبانی دوستت دارم" onKeyDown={event => { if (event.key === 'Escape') setShowHeart(false) }}>
      <button className="heart-project-back" autoFocus onClick={() => setShowHeart(false)}><StoryIcon name="back" /> برگشت به حرف دلم</button>
      <iframe title="یک قلب، هزار بار دوستت دارم" src={`${import.meta.env.BASE_URL}love-heart/index.html`} />
    </div>}
  </main>
}

export default function App() {
  const [stage, setStage] = useState('welcome')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [confirmedAnswers, setConfirmedAnswers] = useState({})

  useEffect(() => {
    const updateHeight = () => document.documentElement.style.setProperty('--app-height', `${window.visualViewport?.height || window.innerHeight}px`)
    updateHeight()
    window.visualViewport?.addEventListener('resize', updateHeight)
    window.addEventListener('resize', updateHeight)
    return () => {
      window.visualViewport?.removeEventListener('resize', updateHeight)
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  useEffect(() => {
    const burst = (event) => {
      const button = event.target.closest('button')
      if (!button || button.disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const bounds = button.getBoundingClientRect()
      const particles = document.createElement('span')
      particles.className = 'click-stars'
      particles.setAttribute('aria-hidden', 'true')
      particles.style.left = `${event.detail === 0 ? bounds.left + bounds.width / 2 : event.clientX}px`
      particles.style.top = `${event.detail === 0 ? bounds.top + bounds.height / 2 : event.clientY}px`
      for (let i = 0; i < 9; i++) {
        const star = document.createElement('i')
        star.textContent = '✦'
        star.style.setProperty('--angle', `${i * 40}deg`)
        star.style.setProperty('--distance', `${40 + (i % 3) * 17}px`)
        particles.appendChild(star)
      }
      document.body.appendChild(particles)
      window.setTimeout(() => particles.remove(), 750)
    }
    document.addEventListener('click', burst, true)
    return () => document.removeEventListener('click', burst, true)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [stage, current])

  useEffect(() => {
    const content = document.querySelector('.welcome-card, .quiz-shell, .secret-content, .confession-content')
    const screen = content?.closest('.screen')
    if (!content || !screen) return
    const fit = () => {
      if (!window.matchMedia('(max-width: 699px)').matches) {
        content.style.removeProperty('scale')
        return
      }
      const styles = getComputedStyle(screen)
      const available = screen.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom)
      content.style.scale = String(Math.min(1, available / Math.max(content.offsetHeight + 8, 1)))
    }
    const observer = new ResizeObserver(fit)
    observer.observe(content)
    observer.observe(screen)
    window.addEventListener('resize', fit)
    fit()
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [stage, current])

  const restart = () => {
    setAnswers({})
    setConfirmedAnswers({})
    setCurrent(0)
    setStage('welcome')
  }

  if (stage === 'welcome') return <WelcomeScreen onStart={() => setStage('questions')} />
  if (stage === 'secret') return <SecretLetter onOpen={() => setStage('confession')} />
  if (stage === 'confession') return <ConfessionScreen onRestart={restart} />

  return <QuestionScreen
    current={current}
    answer={answers[current]}
    confirmed={Boolean(confirmedAnswers[current])}
    onSelect={(value) => { if (!confirmedAnswers[current]) setAnswers(old => ({ ...old, [current]: value })) }}
    onNext={() => {
      if (answers[current] === undefined) return
      setConfirmedAnswers(old => ({ ...old, [current]: true }))
      current < questions.length - 1 ? setCurrent(current + 1) : setStage('secret')
    }}
    onBack={() => current > 0 ? setCurrent(current - 1) : setStage('welcome')}
  />
}
