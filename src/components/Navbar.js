import { ReactComponent as Logo } from './../assets/logo.svg';

const MenuLinks = {
	Home: '/',
	Services: '/services',
	Social: '/social',
};

export default function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<a className="logo" href="/">
					<Logo />
				</a>
				<ul className="menu">
					{Object.keys(MenuLinks).map((link, idx) => (
						<li key={idx}>
							<a href={MenuLinks[link]}>{link}</a>
						</li>
					))}
				</ul>
				<div className="menu-sec">					
					<a className="btn btn-purple" href="/contact">
						Contact Me
					</a>
				</div>
			</nav>
		</div>
	);
}
