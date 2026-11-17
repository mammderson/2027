import { useEffect, useState } from 'react'

function getTimeLeft(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now())
  const totalMinutes = Math.floor(ms / 60_000)
  return {
    days: Math.floor(totalMinutes / (60 * 24)),
    hours: Math.floor((totalMinutes % (60 * 24)) / 60),
    minutes: totalMinutes % 60,
  }
}

export function Countdown({ target }: { target: string }) {
  const targetDate = new Date(target)
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(new Date(target))), 30_000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="countdown" aria-label="Time until the event">
      {(['days', 'hours', 'minutes'] as const).map((unit) => (
        <div key={unit}>
          <strong>{timeLeft[unit]}</strong>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  )
}
