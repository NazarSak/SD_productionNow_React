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
			// Тут можна додати логіку для плавної прокрутки
		}

		setScrollY(currentScrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollY])

	const scrollToElement = ref => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return { scrollToElement }
}

export default useSmoothScroll
