import { ClerkProvider } from "@clerk/nextjs"

type Props = { children: React.ReactNode }

const layout = (props: Props) => {
    return (
        <ClerkProvider>
            <div>{props.children}</div>
        </ClerkProvider>
    )
}


export default layout