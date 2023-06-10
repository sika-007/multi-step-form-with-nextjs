import Header from '@/components/Header'
import { ActiveLinks } from '@/components/Layout'
import { UserDataContext } from '@/services/context'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useContext, useEffect, useState } from 'react'

interface Props {
    setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinks>>
}

const summary = ({ setActiveLink }: Props) => {

    const { state, dispatch } = useContext(UserDataContext)
    const [successMessage, setSuccessMessage] = useState<JSX.Element>(<></>)

    useEffect(() => {
        setActiveLink(ActiveLinks.SUMMARY)
    })

    const selectedPlan = state?.plans.filter(plan => plan.isSelected === true)
    const selectedPlanElements = selectedPlan?.map((onlyPlan, index) => (
        <div key={index} className='flex items-center'>
            <div>
                <h4 className='text-2xl font-bold text-primary mb-3'>{onlyPlan.title} (yearly)</h4>
                <Link href={"/plans"}>
                    <p className='text-blue-700 underline'>change plan</p>
                </Link>
            </div>
            <h3 className='text-xl ml-auto font-bold text-primary'>${onlyPlan.billing.yearly}/yr</h3>
        </div>
    ))

    const selectedAddons = state?.addons.filter(addon => addon.isSelected === true)
    const selectedAddonsElements = selectedAddons?.map((addon, index) => (
        <div key={index} className='flex mb-3'>
            <p className='text-gray-800 text-lg'>{addon.title}</p>
            <h5 className='text-lg ml-auto font-bold text-primary'>${addon.billing}/yr</h5>
        </div>
    ))

    const planTotal = selectedPlan && selectedPlan[0].billing.yearly
    const addonTotal = selectedAddons && selectedAddons.map(addon => addon.billing).reduce((prev, curr) => prev + curr, 0)
    const total = () => {
        if (planTotal && addonTotal) {
            return planTotal + addonTotal
        } else if (planTotal && !addonTotal) {
            return planTotal
        }
    }
    const totalPrice = total()

    async function handleFinalSubmit() {
        try {
            if (state && state.personalInfo.name && state.personalInfo.email && state.personalInfo.telephone) {
                const data = await fetch("/api/validate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(state),
                })
                const response = await data.json()
                console.log(response)
                setSuccessMessage(<p className='mt-2 text-primary font-bold'>{response.message}!</p>)
                setTimeout(() => {
                    setSuccessMessage(<></>)
                    Router.push("/")
                    dispatch && dispatch({ type: "reset" })
                }, 5000)
            } else {
                setSuccessMessage(<p className='mt-2 text-red-600 font-bold'>Please go back and provide your personal details</p>)
                setTimeout(() => {
                    setSuccessMessage(<></>)
                }, 5000)
            }
        } catch (error) {
            console.log(error)
            setSuccessMessage(<p className='mt-2 text-red-600 font-bold'>something went wrong</p>)
            setTimeout(() => {
                setSuccessMessage(<></>)
            }, 5000)
        }
    }


    return (
        <div>
            <Head>
                <title>Details - Summary</title>
            </Head>
            <Header title='Finishing up' description='Double-check to make sure everything looks OK before confirming' />
            <div className='bg-green-300 p-7 rounded-xl'>
                <div>
                    {selectedPlanElements}
                    <div className='border border-gray-300 mt-3' />
                </div>
                <div className='mt-5'>
                    {selectedAddonsElements}
                    {selectedAddonsElements?.length ?
                        (<Link href={"/addons"}>
                            <p className='text-blue-700 underline'>change add-ons</p>
                        </Link>) : ""
                    }
                </div>
                <div className='flex mb-3 mt-10'>
                    <p className='text-gray-800 text-lg font-extrabold'>Total</p>
                    <h5 className='text-lg ml-auto font-bold text-primary'>${totalPrice}/yr</h5>
                </div>
            </div>
            {successMessage}

            <div className='flex justify-between mt-8'>
                <Link href={"/addons"}>
                    <button className='styled-button'>
                        Go Back
                    </button>
                </Link>
                <button onClick={handleFinalSubmit} className='styled-button'>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default summary
