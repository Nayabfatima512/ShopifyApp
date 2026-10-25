import { Badge as RsBadge } from 'rsuite'

const tones = {
  Active:          { bg: '#cdfee1', text: '#185b3d' },
  Draft:           { bg: '#f0f0f0', text: '#616161' },
  'Not Generated': { bg: '#f0f0f0', text: '#616161', dot: '#8a8a8a' },
  'In Progress':   { bg: '#e0f0ff', text: '#00527c', dot: '#2a9df4' },
  Completed:       { bg: '#cdfee1', text: '#0c5132', dot: '#2b8a65' },
}

function Badge({ text }) {
  const t = tones[text] || tones.Draft
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-[2px] rounded-lg text-xs font-medium leading-5 whitespace-nowrap"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {t.dot && <RsBadge compact style={{ background: t.dot }} />}
      {text}
    </span>
  )
}

export default Badge