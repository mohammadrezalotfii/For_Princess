import StoryIcon, { symbolIcon } from './StoryIcon.jsx'
// Code-native stickers: identical shapes on every platform, no emoji font needed.
export function CatSticker({ mood = 'happy', className = '' }) {
  const shy = mood === 'shy'
  const cheeky = mood === 'cheeky'
  const love = mood === 'love'
  const curious = mood === 'curious'
  const sleepy = mood === 'sleepy'
  const laugh = mood === 'laugh'
  const hug = mood === 'hug'
  const excited = mood === 'excited'
  const grumpy = mood === 'grumpy'
  const bliss = mood === 'bliss'
  const sparkly = mood === 'sparkly'
  const melting = mood === 'melting'
  const contented = bliss || sparkly || melting
  const coat = ({ grumpy: '#f3a09e', curious: '#d9edfa', sleepy: '#e5dff5', laugh: '#ffe3bc', hug: '#fce5ed', excited: '#dfefe3', cheeky: '#f6dfc7' })[mood] || '#fff2d9'
  return <svg className={`cat-sticker cat-${mood} ${className}`} viewBox="0 0 100 100" aria-hidden="true">
    <path d="M16 45 Q9 24 17 12 Q32 14 40 29 Q51 25 62 30 Q76 14 86 15 Q91 30 84 47 Q96 78 74 87 Q50 98 26 87 Q5 77 16 45Z" fill={coat} stroke="#755b58" strokeWidth="3" strokeLinejoin="round" />
    <path d="M19 23 L24 40 L34 32Z M80 25 L68 34 L82 41Z" fill="#efb1bb" />
    <path d="M41 30 L45 40 M52 29 L53 39 M62 32 L60 40" stroke="#e6bd91" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="25" cy="67" rx="10" ry="6" fill="#f2b2bb" opacity=".7" />
    <ellipse cx="76" cy="67" rx="10" ry="6" fill="#f2b2bb" opacity=".7" />
    <g className="cat-eyes" fill="none" stroke="#654c4c" strokeWidth="3.5" strokeLinecap="round">
      {contented ? <>
        {sparkly ? <g fill="#70513e" stroke="none"><path d="m35 46 3 7 6 3-6 3-3 7-3-7-6-3 6-3Z M65 46l3 7 6 3-6 3-3 7-3-7-6-3 6-3Z" /><circle cx="39" cy="49" r="2" fill="white" /><circle cx="69" cy="49" r="2" fill="white" /></g> : <path d={melting ? 'M28 57 Q35 65 42 56 M58 56 Q65 65 72 57' : 'M28 57 Q35 48 42 57 M58 57 Q65 48 72 57'} />}
        <path d="m23 65-2 5m7-5-2 5m46-5-2 5m7-5-2 5" stroke="#db879b" strokeWidth="1.8" />
      </> :
      sleepy ? <><path d="M28 57 Q35 62 42 57 M58 57 Q65 62 72 57" /><path d="M64 10 L74 10 L65 20 L75 20" stroke="#9586b4" strokeWidth="2.5" /></> : curious ? <><ellipse cx="35" cy="55" rx="5" ry="7" fill="#654c4c" /><ellipse cx="65" cy="55" rx="5" ry="7" fill="#654c4c" /><path d="M27 41 Q33 36 40 40" /><circle cx="37" cy="53" r="1.5" fill="white" stroke="none" /><circle cx="67" cy="53" r="1.5" fill="white" stroke="none" /></> : excited ? <><path d="M29 49 L41 57 L29 62 M71 49 L59 57 L71 62" /><path d="M4 30 L4 39 M0 34 L8 34 M92 29 L92 38 M88 33 L96 33" stroke="#88b5a0" strokeWidth="2" /></> :
      love ? <g fill="#dc6d92" stroke="none"><path d="M27 51 Q32 43 37 51 Q42 43 47 51 Q48 57 37 64 Q26 57 27 51Z" /><path d="M57 51 Q62 43 67 51 Q72 43 77 51 Q78 57 67 64 Q56 57 57 51Z" /></g> : shy ? <><ellipse cx="35" cy="56" rx="4" ry="6" fill="#654c4c" /><ellipse cx="65" cy="56" rx="4" ry="6" fill="#654c4c" /><circle cx="36" cy="54" r="1" fill="white" stroke="none" /><circle cx="66" cy="54" r="1" fill="white" stroke="none" /></> : <><path d="M28 57 Q35 47 42 57" /><path d={cheeky ? 'M59 53 L70 57 L60 61' : 'M58 57 Q65 47 72 57'} /></>}
    </g>
    <path d="M46 65 Q50 61 54 65 L50 69Z" fill="#c98791" />
    <path d={grumpy ? 'M42 76 Q50 69 58 76' : 'M50 69 Q45 78 40 71 M50 69 Q55 78 60 71'} fill="none" stroke="#755b58" strokeWidth="2.5" strokeLinecap="round" />
    {grumpy && <path d="M27 45 L42 50 M58 50 L73 45" fill="none" stroke="#755b58" strokeWidth="3.5" strokeLinecap="round" />}
    {grumpy && <g className="anime-anger" fill="none" stroke="#cb3852" strokeWidth="3" strokeLinecap="round">
      <path d="M70 20v5h-5 M76 20v5h5 M65 31h5v5 M81 31h-5v5" />
      <path d="M9 42 3 37 M8 50H1 M90 45l7-5" strokeWidth="2.5" />
    </g>}
    {contented && <g className={`anime-pleasure pleasure-${mood}`}>
      {sparkly ? <g fill="#e7bd65"><path d="m12 23 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z M88 38l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" /></g> : melting ? <g fill="#edb0bc" opacity=".85"><path d="M15 30c-8-6-5-12 0-8 5-4 8 2 0 8Z M86 36c-8-6-5-12 0-8 5-4 8 2 0 8Z" /></g> : <g fill="none" stroke="#9ebfd5" strokeWidth="2" strokeLinecap="round"><path d="M9 39q-7-5 0-10 M91 39q7-5 0-10" /></g>}
      <ellipse cx="24" cy="68" rx="11" ry="6" fill="#ed9fad" opacity=".45" />
      <ellipse cx="77" cy="68" rx="11" ry="6" fill="#ed9fad" opacity=".45" />
      {melting && <path d="M46 75q4 9 8 0" fill="#ed9fad" />}
    </g>}
    {cheeky && <path d="M49 74 Q59 71 57 81 Q51 85 49 74" fill="#ec9caf" />}
    {laugh && <><path d="M40 72 Q50 91 61 72Z" fill="#755b58" /><path d="M45 80 Q50 76 56 80" fill="#ed9eae" /><path d="M23 58 Q15 68 21 71 Q27 69 23 58Z M78 58 Q87 68 81 71 Q75 69 78 58Z" fill="#91c9ed" /></>}
    {hug && <><path d="M50 84 C31 73 38 65 45 70 L50 75 L55 70 C64 64 71 75 50 89Z" fill="#dc80a4" /><ellipse cx="35" cy="82" rx="10" ry="7" fill={coat} stroke="#755b58" strokeWidth="2" /><ellipse cx="66" cy="82" rx="10" ry="7" fill={coat} stroke="#755b58" strokeWidth="2" /></>}
    {curious && <path d="M76 19 Q83 10 89 18 Q92 24 84 27 L84 30 M84 35 L84 36" fill="none" stroke="#5598c0" strokeWidth="3" strokeLinecap="round" />}
    <path d="M10 62 L21 64 M9 71 L20 70 M80 64 L91 62 M81 70 L92 72" stroke="#ad8b7d" strokeWidth="2" strokeLinecap="round" />
    {shy && <><ellipse cx="38" cy="84" rx="9" ry="7" fill="#fff2d9" stroke="#755b58" strokeWidth="2" /><ellipse cx="62" cy="84" rx="9" ry="7" fill="#fff2d9" stroke="#755b58" strokeWidth="2" /></>}
  </svg>
}

const emojiPattern = /[\p{Extended_Pictographic}\p{Regional_Indicator}][\p{Extended_Pictographic}\p{Emoji_Modifier}\uFE0F\u200D]*/gu
export function moodFor(symbol) {
  if (/[🫂🥹]/u.test(symbol)) return 'hug'
  if (/[❤]/u.test(symbol)) return 'love'
  if (/[😂😭]/u.test(symbol)) return 'laugh'
  if (/[🌙😌]/u.test(symbol)) return 'sleepy'
  if (/[👀😳]/u.test(symbol)) return 'curious'
  if (/[🔥😈]/u.test(symbol)) return 'excited'
  if (/[🥲🫣]/u.test(symbol)) return 'shy'
  if (/[😏🌚🤭😜]/u.test(symbol)) return 'cheeky'
  return 'happy'
}

export function plainStickerText(text) {
  return text.replace(emojiPattern, '').trim()
}

export function StickerText({ children }) {
  const text = String(children)
  const parts = []
  let cursor = 0
  for (const match of text.matchAll(emojiPattern)) {
    parts.push(text.slice(cursor, match.index))
    const icon = symbolIcon(match[0])
    parts.push(icon ? <StoryIcon key={match.index} name={icon} /> : <CatSticker key={match.index} mood={moodFor(match[0])} />)
    cursor = match.index + match[0].length
  }
  parts.push(text.slice(cursor))
  return <>{parts}</>
}
