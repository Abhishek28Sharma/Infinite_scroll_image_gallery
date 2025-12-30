import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import style from '../src/styles/App.module.css'
import CardContainer from './components/CardContainer.jsx'

const App = () => {
  const [imageData, setImageData] = useState([])
  const [page, setPage] = useState(2)

  const loaderRef = useRef(null)

  // Fetch data when page changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      )

      setImageData((prev) => [...prev, ...response.data])
    }

    fetchData()
  }, [page])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1)
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [])

  return (
    <div className={style['parent-container']}>
      <CardContainer imageData={imageData} />

      {/* {loading && <ShimmerCard />} */}
      {/* 👇 Scroll Trigger Element */}
      <div ref={loaderRef} style={{ height: '40px' }} />
    </div>
  )
}

export default App
