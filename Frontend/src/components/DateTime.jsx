import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const now = currentTime
  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][now.getDay()]
  const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][now.getMonth()]
  const day = now.getDate()
  const hours = String(now.getHours() % 12 || 12).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const suffix = now.getHours() >= 12 ? 'PM' : 'AM'

  return <div>{`${weekday} ${month} ${day} ${hours}:${minutes} ${suffix}`}</div>
}

export default DateTime