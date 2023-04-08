import { FC } from 'react'
import { NavLink } from 'react-router-dom'

type NavbarItem = {
	text: string
	url: string
	target?: string
}

type NavbarProps = {
	title: string
	items: Array<NavbarItem>
}

const Navbar: FC<NavbarProps> = ({ title, items }) => {
	const renderNavbarItems = (items: Array<NavbarItem>) => {
		return (
			<ul className="navbar-items">
				{items.map((item: NavbarItem, index: number) => (
					<li className="navbar-item" key={index}>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'is-active' : ''
							}
							to={item.url}
						>
							{item.text}
						</NavLink>
					</li>
				))}
			</ul>
		)
	}

	return (
		<nav>
			<h3 className="navbar-logo">
				<NavLink to="/">{title}</NavLink>
			</h3>
			{renderNavbarItems(items)}
		</nav>
	)
}

export default Navbar
