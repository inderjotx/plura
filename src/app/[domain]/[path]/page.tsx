import React from 'react'

type Props = { params: { domain: string, path: string }, searchParams: {} }

const page = (props: Props) => {
    return (
        <div>You hit domain with path page {props.params.domain}</div>
    )
}

export default page