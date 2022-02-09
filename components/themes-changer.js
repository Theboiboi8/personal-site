import { Button, Collapse, Text, theme, Tooltip } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { Card } from "@nextui-org/react";

export const ThemeChanger = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <div>
            <Button.Group color="#323744" className=' rounded'>
                <Tooltip content={'Set theme to Dark'} >
                    <Button auto onClick={() => setTheme('dark')} className=' rounded prose prose-invert hover:text-orange-400'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    </Button>
                </Tooltip>
                <Tooltip content={'Set theme to Light'}>
                    <Button auto onClick={() => setTheme('light')} className=' rounded prose prose-invert hover:text-orange-400'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </Button>
                </Tooltip>
            </Button.Group>
        </div>
    )    
}