import { Tooltip } from "@nextui-org/react"

export const OutdatedAddon = () => {
    return (
        <Tooltip content={'This Addon Is Not Updated To The Latest Stable Release Of Meteor'}>
            <svg className="w-6 h-6" fill="none" color="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </Tooltip>
    )
}