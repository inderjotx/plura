import React from 'react'

type Props = { children: Readonly<React.ReactNode> }

const layout = (props: Props) => {
    return (
        <div className='h-screen flex  w-full items-center justify-center' >

            {props.children}</div>
    )
}


export default layout