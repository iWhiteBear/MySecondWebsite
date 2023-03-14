const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const links = document.querySelectorAll('.nav__link')
const allSections = document.querySelectorAll('.section')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	links.forEach(link => {
		link.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.offsetTop <= currentSection) {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
