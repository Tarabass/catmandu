import React, { FC } from 'react'

interface NavbarItem {
	text: string
	url: string
	target?: string
}

interface NavbarProps {
	title: string
	items: Array<NavbarItem>
}

const Navbar: FC<NavbarProps> = ({ title, items }) => {
	const renderNavbarItems = (items: Array<NavbarItem>) => {
		return (
			<ul className="navbar-items">
				{items.map((item: NavbarItem, index: number) => (
					<li className="navbar-item" key={index}>
						<a
							className="navbar-item"
							href={item.url}
						>
							{item.text}
						</a>
					</li>
				))}
			</ul>
		)
	}

	return (
		<nav>
			<h3 className="navbar-logo">
				<a href="/">
					{title}
				</a>
			</h3>
			{renderNavbarItems(items)}
		</nav>
	)
}

export default Navbar
