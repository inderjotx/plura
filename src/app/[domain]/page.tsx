import React from 'react'

type Props = { params: { domain: string }, searchParams: {} }

const page = (props: Props) => {
    return (
        <div>You hit the domain page {props.params.domain}</div>
    )
}

export default page