import React from 'react'
import mainVidifyLogo from '../assets/mainvidifylogo.png'
import { plans } from '../utility/data.js'
function CurrentPlanCard() {
    return (
        <div className='bg-white rounded-lg p-4 border border-olive-200'>
            <div className='flex gap-2 items-center'>
                <span className='font-semibold text-xs '>Free</span>
                <span className='bg-[#CDFEE1] rounded-lg text-[#0C5132] text-xs p-1'>Active</span>
            </div>
            <div className='flex justify-between'>
                <p className='text-sm'>Make 2 AI videos per month</p>
                <button className='p-1 text-xs text-[#B5B5B5] rounded-lg bg-olive-200'>Choose Free</button>
            </div>

        </div>
    )
}


// subsription plan card

function PlanCard({ data }) {
    return (
        <div className='flex  gap-4'>
            { data.map((plan) =>(
              <div className='bg-white rounded-lg border border-olive-200 w-[270px]'>
                <div className='p-3 flex justify-between'>
                    <span className='text-sm font-semibold'>{plan.name}</span>
                    <span className='text-lg font-semibold'>{plan.price} <span className='text-sm  font-normal'>/M</span></span>
                </div>
                <p className=' ml-4 text-sm '>{plan.videosPerMonth} videos per month</p>
                <div className ='p-3  border-t-2 border-olive-200 mt-3 flex justify-center'>
                    <button className='border border-olive-200 rounded-lg shadow px-9 p-2 text-xs hover:bg-[#303030] hover:text-white text-center w-full'>Choose {plan.name} Plan</button>
                </div>
            </div>
            )
            )

            }
           

        </div>
    )
}



function SubscriptionPlan() {
    return (
        <div className='min-h-screen'>
            <div className='flex h-[20px] gap-2 items-center px-7 py-5 border-b-1 border-olive-200 w-full'>
                <img src={mainVidifyLogo} alt="logo" />
                <a href="#">Vidify</a>
            </div>
            <div className='mx-[5rem] my-7 flex flex-col gap-3'>
                <div>
                    <h1 className='font-semibold text-lg'>Power Up Your Store With Premium Features</h1>
                    <p className='text-sm '>Choose a pricing plan that meets your needs!</p>
                </div>

                <CurrentPlanCard />
                <PlanCard data = {plans} />
            </div>

        </div>
    )
}

export default SubscriptionPlan