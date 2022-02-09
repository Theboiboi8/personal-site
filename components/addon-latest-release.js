import { Tooltip } from "@nextui-org/react"

export const UpdatedReleaseAddon = () => {
    return (
        <Tooltip content={'This Addon Is Updated To The Latest Stable Release Of Meteor'}>
            <svg className="w-6 h-6" fill="none" color="gray" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </Tooltip>
    )
}