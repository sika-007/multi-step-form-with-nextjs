import AddonInput from '@/components/AddonInput'
import Header from '@/components/Header'
import { ActiveLinks } from '@/components/Layout'
import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '@/services/context'
import { title } from 'process'
import Router from 'next/router'
import Head from 'next/head'

interface Props {
	setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinks>>
}

const addons: React.FC<Props> = ({ setActiveLink }) => {

	const { state, dispatch } = useContext(UserDataContext)

	useEffect(() => {
		setActiveLink(ActiveLinks.ADDON)
	}, [])

	const addonElements = state?.addons.map((addon, index) => (
		<AddonInput dispatch={dispatch} key={index} name={addon.name} title={addon.title} description={addon.description} billing={addon.billing} isSelected={addon.isSelected} />
	))

	return (
		<div>
			<Head>
				<title>Details - Add-ons</title>
			</Head>
			<Header title='Pick add-ons' description='Add-ons help enhance your gaming experience' />
			<div className='flex flex-col gap'>
				{addonElements}
			</div>
			<div className='flex justify-between mt-5'>
				<button onClick={() => Router.push("/plans")} className='styled-button'>
					Go back
				</button>
				<button onClick={() => Router.push("/summary")} className='styled-button'>
					Continue
				</button>
			</div>
		</div>
	)
}

export default addons
