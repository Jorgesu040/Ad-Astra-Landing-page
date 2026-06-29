import { NavLink } from "react-router";

import navItems from "../../data/navItems";

import FullLogo from "../../assets/full_logo.png";
import NavDropdown from "../navbar_components/NavDropdown";

const navLinkClassName = ({ isActive }) =>
	[
		"inline-flex items-center px-3 py-2 font-normal underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
		isActive ? "text-brand-ink underline" : "",
	].join(" ");

export default function Navbar() {
	return (
		<header className="flex items-center justify-between h-16 max-w-[80%] m-auto bg-astra-cream text-brand-ink px-4 sm:px-8 rounded-lg border my-4">
			<img src={FullLogo} alt="Ad Astra UC3M Logo" className="h-full w-auto" />
			<nav>
				<ul className="flex flex-row items-center gap-4">
					{navItems.map((item) => {
						if (item.children) {
							return <NavDropdown key={item.label} item={item} />;
						}

						return (
							<li key={item.to}>
								<NavLink className={navLinkClassName} to={item.to}>
									{item.label}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			<NavLink
				to="/join"
				className={({ isActive }) =>
					[
						navLinkClassName({ isActive }),
						"bg-brand-ink px-4 py-2 text-brand-surface rounded-lg",
					].join(" ")
				}
			>
				Join
			</NavLink>
		</header>
	);
}
