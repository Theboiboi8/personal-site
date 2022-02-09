import { Tooltip } from "@nextui-org/react"

export const UpdatedDevAddon = () => {
    return (
        <Tooltip content={'This Addon Is Updated To The Latest Development Build Of Meteor'}>
            <svg className="w-6 h-6" fill="none" color="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </Tooltip>
    )
}