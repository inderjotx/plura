import { Card } from '@/components/site/Card'
import { pricingCards } from '@/constants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (

        <section className='flex flex-col gap-20 relative items-center justify-start   h-full w-full' >
            <main className='flex flex-col gap-2 items-center w-full mt-24   ' >


                {/* title  */}
                <h4 className='text-[12px]' >Run your agency, in one place</h4>
                <h1 className='text-8xl lg:text-[200px] md:text-[150px] font-black bg-gradient-to-r from-primary to-foreground text-transparent  bg-clip-text ' >Plura</h1>


                {/* backgroud image */}
                <div className='flex  justify-center  relative overflow-hidden  -mt-8 md:-mt-12'>
                    <Image src={'/assets/preview.png'} unoptimized height={300} width={100} alt='image-preview' className='object-contain border rounded-t-md backdrop-blur-sm  h-[300px] md:h-[500px]  w-11/12 ' />

                    <div className='absolute inset-0 bg-gradient-to-t from-background' />
                </div>
            </main>

            {/* backgroud grid */}
            <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            </div>


            <section className='flex flex-col items-center gap-6'>

                <h2 className='text-4xl text-primary' >Billing</h2>

                <main className='flex flex-col md:flex-row gap-3'>
                    {
                        pricingCards.map((card) => (
                            <Card {...card} key={card.title} />
                        ))
                    }

                </main>

            </section>

        </section>
    )
}



export default Page 