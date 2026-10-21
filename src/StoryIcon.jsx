const shapes = {
  car: <><path d="m5 10 2-5h10l2 5M4 10h16v8H4zM7 18v2m10-2v2M7 13h2m6 0h2" /><path d="M9 5h6" /></>,
  tulip: <><path d="M12 21V11M12 18c-5 0-7-4-7-7 4 0 7 3 7 7Zm0-3c5 0 7-4 7-7-4 0-7 3-7 7Z" /><path d="M7 3l5 3 5-3v5a5 5 0 0 1-10 0Z" /></>,
  food: <><path d="M4 3v6a3 3 0 0 0 6 0V3M7 3v18M17 3c-3 4-3 8 1 9V3v18" /></>,
  letter: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6M4 18l5-5m11 5-5-5" /></>,
  heart: <path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-4 4 1 9 8 15 7-6 12-11 8-15Z" />,
  moon: <><path d="M20 14A9 9 0 0 1 10 3a9 9 0 1 0 10 11Z" /><path d="m17 3 .5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5Z" /></>,
  flame: <path d="M12 3c1 5-4 5-3 10-2-1-3-2-3-4-5 8 0 12 6 12 7 0 10-7 5-12 0 4-2 4-2 4 1-5-1-7-3-10Z" />,
  arrow: <path d="M20 12H4m6-6-6 6 6 6" />,
  back: <path d="M4 12h16m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  restart: <><path d="M4 10a8 8 0 1 1 1 8M4 4v6h6" /></>,
  warning: <><path d="m10 4-8 14a2 2 0 0 0 2 3h16a2 2 0 0 0 2-3L14 4a2 2 0 0 0-4 0Z" /><path d="M12 9v5m0 3v.1" /></>,
}

export default function StoryIcon({ name, className = '' }) {
  return <svg className={`story-icon icon-${name} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name] || shapes.heart}</svg>
}

export function symbolIcon(symbol) {
  if (/[🚙🚗]/u.test(symbol)) return 'car'
  if (/[🌷]/u.test(symbol)) return 'tulip'
  if (/[🍝]/u.test(symbol)) return 'food'
  if (/[💌]/u.test(symbol)) return 'letter'
  if (/[❤]/u.test(symbol)) return 'heart'
  if (/[🌙]/u.test(symbol)) return 'moon'
  if (/[🔥]/u.test(symbol)) return 'flame'
  return null
}
