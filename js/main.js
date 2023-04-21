const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const links = document.querySelectorAll('.nav__link')
const allSections = document.querySelectorAll('.section')


const msgStatus = document.querySelector('.msg-status');

console.log(document.location.search);

if (document.location.search ===  '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Message sent!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
		msgStatus.textContent = '';
	},3000);
}

if (document.location.search ===  '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Error occurred.';

	setTimeout(() => {
		msgStatus.classList.remove('error');
		msgStatus.textContent = '';
	},3000);
}

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
