import React from 'react'

export default function CitySkyline() {
  const lt = '#86efac'
  const ac = '#4ade80'
  const pk = '#16a34a'

  return (
    <svg viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <path d="M195 8 Q198 5 201 8"  stroke={ac} strokeWidth="0.8" opacity="0.8"/>
      <path d="M212 4 Q215 1 218 4"  stroke={ac} strokeWidth="0.8" opacity="0.8"/>
      <path d="M228 11 Q230 9 232 11" stroke={ac} strokeWidth="0.8" opacity="0.55"/>
      <line x1="0" y1="79" x2="340" y2="79" stroke="#d1fae5" strokeWidth="1"/>
      <path d="M12 79 C11 65 14 55 16 44" stroke={pk} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 44 C8 38 1 35 -2 32 C5 38 12 42 16 44" fill={ac} opacity="0.45"/>
      <path d="M16 44 C20 36 27 32 32 30 C26 36 20 42 16 44" fill={ac} opacity="0.45"/>
      <path d="M16 44 C14 34 13 24 15 17 C15 28 15 38 16 44" fill={ac} opacity="0.38"/>
      <circle cx="16" cy="46" r="2" fill={pk} opacity="0.55"/>
      <path d="M328 79 C329 65 326 55 324 44" stroke={pk} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M324 44 C332 38 339 35 342 32 C335 38 328 42 324 44" fill={ac} opacity="0.45"/>
      <path d="M324 44 C320 36 313 32 308 30 C314 36 320 42 324 44" fill={ac} opacity="0.45"/>
      <path d="M324 44 C326 34 327 24 325 17 C325 28 325 38 324 44" fill={ac} opacity="0.38"/>
      <circle cx="324" cy="46" r="2" fill={pk} opacity="0.55"/>
      <rect x="30" y="63" width="16" height="16" stroke={lt} strokeWidth="0.7" rx="0.5"/>
      <line x1="30" y1="68" x2="46" y2="68" stroke={lt} strokeWidth="0.4" opacity="0.5"/>
      <line x1="30" y1="73" x2="46" y2="73" stroke={lt} strokeWidth="0.4" opacity="0.5"/>
      <rect x="49" y="50" width="20" height="29" stroke={ac} strokeWidth="1" rx="0.5"/>
      <line x1="49" y1="57" x2="69" y2="57" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <line x1="49" y1="64" x2="69" y2="64" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <line x1="49" y1="71" x2="69" y2="71" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <rect x="74" y="27" width="24" height="52" stroke={ac} strokeWidth="1.2" rx="0.5"/>
      <line x1="86" y1="27" x2="86" y2="19" stroke={ac} strokeWidth="1" opacity="0.6"/>
      {[33, 41, 49, 57, 65, 71].map((y) => (
        <React.Fragment key={y}>
          <rect x="77" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.32"/>
          <rect x="84" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.32"/>
          <rect x="91" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.32"/>
        </React.Fragment>
      ))}
      <rect x="104" y="12" width="30" height="67" stroke={ac} strokeWidth="1.5" rx="1"/>
      <line x1="119" y1="12" x2="119" y2="3" stroke={ac} strokeWidth="1.2" opacity="0.7"/>
      <circle cx="119" cy="2" r="1.5" fill={ac} opacity="0.65"/>
      {[18, 26, 34, 42, 50, 58, 66, 74].map((y) => (
        <React.Fragment key={y}>
          <rect x="107" y={y} width="4" height="5" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
          <rect x="115" y={y} width="4" height="5" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
          <rect x="126" y={y} width="4" height="5" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
        </React.Fragment>
      ))}
      <rect x="140" y="21" width="26" height="58" stroke={ac} strokeWidth="1.2" rx="0.5"/>
      {[27, 35, 43, 51, 59, 67].map((y) => (
        <React.Fragment key={y}>
          <rect x="143" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
          <rect x="150" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
          <rect x="158" y={y} width="4" height="4" stroke={ac} strokeWidth="0.4" opacity="0.28"/>
        </React.Fragment>
      ))}
      <rect x="172" y="38" width="22" height="41" stroke={ac} strokeWidth="1" rx="0.5"/>
      <line x1="172" y1="47" x2="194" y2="47" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <line x1="172" y1="56" x2="194" y2="56" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <line x1="172" y1="65" x2="194" y2="65" stroke={ac} strokeWidth="0.4" opacity="0.4"/>
      <line x1="183" y1="38" x2="183" y2="79" stroke={ac} strokeWidth="0.4" opacity="0.3"/>
      <rect x="200" y="52" width="18" height="27" stroke={lt} strokeWidth="0.7" rx="0.5"/>
      <rect x="222" y="58" width="16" height="21" stroke={lt} strokeWidth="0.7"/>
      <rect x="242" y="62" width="20" height="17" stroke={lt} strokeWidth="0.6"/>
      <rect x="266" y="57" width="16" height="22" stroke={lt} strokeWidth="0.7"/>
      <rect x="286" y="66" width="14" height="13" stroke={lt} strokeWidth="0.6"/>
      <rect x="304" y="61" width="16" height="18" stroke={lt} strokeWidth="0.6"/>
    </svg>
  )
}
