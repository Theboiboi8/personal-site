import { Tooltip } from "@nextui-org/react"

export const ArchivedAddon = () => {
    return (
        <Tooltip content={'The Github Repository for this addon is currently archived'}>
            <svg className="w-6 h-6" fill="none" color="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </Tooltip>
    )
}