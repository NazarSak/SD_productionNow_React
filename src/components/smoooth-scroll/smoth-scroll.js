import { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

const useSmoothScroll = () => {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		smoothscroll.polyfill()
	}, [])

	const handleScroll = () => {
		const currentScrollY = window.scrollY

  
  if (Math.abs(scrollY - currentScrollY) > 75) {
  	 window.scrollTo({
				top: currentScrollY,
				behavior: 'smooth',
			})
  }

		setScrollY(currentScrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollY])
}

export default useSmoothScroll
