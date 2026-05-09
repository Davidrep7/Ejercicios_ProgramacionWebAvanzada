import React, { useState, useEffect } from 'react'
import './App.css'
import { data } from './data'

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = data.length

  const prev = () => setCurrentIndex(i => (i - 1 + length) % length)
  const next = () => setCurrentIndex(i => (i + 1) % length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => (i + 1) % length)
    }, 5000)
    return () => clearInterval(interval)
  }, [length])

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <button className="arrow left" onClick={prev} aria-label="Anterior">‹</button>
        <div className="image-wrapper">
          <img src={data[currentIndex].imgUrl} alt={`Image ${data[currentIndex].id}`} />
        </div>
        <button className="arrow right" onClick={next} aria-label="Siguiente">›</button>
      </div>

      <div className="dots">
        {data.map((item, idx) => (
          <button
            key={item.id}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Mostrar imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
