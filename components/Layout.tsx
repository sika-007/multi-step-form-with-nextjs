import React, { ReactNode, cloneElement, useState } from 'react'
import Navigation from './navigation/Navigation'

interface LayoutProps {
	children: React.ReactNode
}

export enum ActiveLinks {
	INFO = "info",
	PLAN = "plan",
	ADDON = "addons",
	SUMMARY = "summary"
}

const Layout = ({ children }: LayoutProps) => {

	const [activeLink, setActiveLink] = useState<string>(ActiveLinks.INFO)

	return (
		<div className='relative bg-green-200 flex flex-col min-h-screen md:gap-4 md:flex-row'>
			<div className='add-mobile-bg-image md:add-desktop-bg-image md:ml-4 md:my-4 md:rounded-lg'>
				<Navigation activeLink={activeLink} />
			</div>
			<div className="flex-1 px-10 py-7 sm:px-16 sm:py-16 md:rounded-lg md:mr-4 md:my-4 lg:px-32 lg:py-20">
				{cloneElement(children as React.ReactElement, {setActiveLink: setActiveLink })}
			</div>
		</div>
	)
}

export default Layout
