import { pricingCards } from '@/constants'
import { Check } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type props = {
    title: string,
    description: string,
    price: string,
    highlight: string,
    features: string[],
    priceId: string
}

export const Card = (data: props) => {
    return (
        <div className={cn('h-80 flex flex-col justify-between p-5 gap-2 w-64 border rounded-md', data.title.toLowerCase() === 'unlimited saas' && "border-primary")}>

            <div className='flex flex-col' >
                <h1 className='text-2xl font-medium' >{data.title}</h1>
                <h3 className='text-muted-foreground text-sm' >{data.description}</h3>
            </div>


            <div className='flex'>
                <h1 className='text-5xl' > {data.price} </h1>
                <h4 className={cn(data.price.toLowerCase() === 'free' ? "hidden" : "text-sm self-end")}>/m</h4>
            </div>


            <div>

                {
                    data.features.map((feat) => (
                        <div className='flex text-sm gap-1' key={feat} >
                            <Check className='text-muted-foreground' />
                            <h1>{feat}</h1>
                        </div>
                    ))
                }


            </div>

            <Button > Get Started </Button>

        </div>
    )
}