import { Component } from 'react';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<section className="menu">
				<div className="menu__container">
					<nav className="menu-wrap">
						<ul className="menu__list">
							<li className="menu__item">
								<svg tabIndex={0} className="menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#AAACAE" strokeWidth="1.5" d="M9.14 20.78v-3.07c0-.77.64-1.4 1.42-1.4h2.87c.79 0 1.43.62 1.43 1.4v3.06c0 .68.54 1.22 1.22 1.23h1.96a3.46 3.46 0 0 0 3.46-3.42V9.87c0-.74-.33-1.44-.9-1.9l-6.66-5.3a3.12 3.12 0 0 0-3.95.07L3.47 7.96c-.6.46-.95 1.16-.97 1.9v8.7c0 1.9 1.55 3.44 3.46 3.44h1.91a1.23 1.23 0 0 0 1.24-1.22h.03Z"/></svg>
							</li>
							<li className="menu__item">
								<svg tabIndex={0} className="menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.87 11.6c-1.07-3.35.18-7.18 3.7-8.31a6 6 0 0 1 5.43.9 6.05 6.05 0 0 1 5.42-.9c3.52 1.13 4.78 4.96 3.7 8.3C19.47 16.92 12 21 12 21s-7.4-4.02-9.13-9.4Z" clipRule="evenodd"/><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 6.7a2.78 2.78 0 0 1 1.92 2.42"/></svg>
							</li>
							<li className="menu__item">
								<svg tabIndex={0} className="menu__icon menu__icon_search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="url(#a)"/><circle cx="29.77" cy="29.77" r="8.99" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M36.02 36.49 39.54 40"/><defs><linearGradient id="a" x1="25.16" x2="65.24" y1="-18" y2="-4.41" gradientUnits="userSpaceOnUse"><stop stopColor="#F9881F"/><stop offset="1" stopColor="#FF774C"/></linearGradient></defs></svg>
							</li>
							<li className="menu__item">
								<svg tabIndex={0} className="menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17.848c5.64 0 8.248-.724 8.5-3.627 0-2.902-1.819-2.716-1.819-6.276C18.681 5.165 16.045 2 12 2S5.319 5.164 5.319 7.945c0 3.56-1.819 3.374-1.819 6.275.253 2.915 2.862 3.628 8.5 3.628Z" clipRule="evenodd"/><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.389 20.857c-1.364 1.515-3.492 1.533-4.87 0"/></svg>
							</li>
							<li className="menu__item">
								<svg tabIndex={0} className="menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.75 3.2499 2.08.36.963 11.473c.077.937.86 1.656 1.8 1.653h10.909c.897.002 1.658-.658 1.785-1.546l.949-6.558c.106-.733-.403-1.413-1.135-1.519-.064-.009-14.937-.014-14.937-.014"/><path stroke="#130F26" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".4" strokeWidth="1.5" d="M14.125 10.7948h2.773"/><path fill="#130F26" fillOpacity=".4" fillRule="evenodd" stroke="#130F26" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".4" strokeWidth="1.5" d="M7.1543 20.2025c.301 0 .544.244.544.544 0 .301-.243.545-.544.545a.5441.5441 0 0 1-.544-.545c0-.3.243-.544.544-.544Zm11.2803 0c.301 0 .545.244.545.544a.545.545 0 0 1-.545.545.5441.5441 0 0 1-.544-.545c0-.3.243-.544.544-.544Z" clipRule="evenodd"/></svg>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default Menu;