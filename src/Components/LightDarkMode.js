import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkLightMode({ mode, handleMode }) {
    return (
        <div>
            {
                mode === "light" ? <MoonIcon onClick={handleMode} boxSize={10} /> : <SunIcon onClick={handleMode} boxSize={10} />
            }
        </div>
    )
}
