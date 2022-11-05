import React from "react"
import reactLogo from './react.svg'

export default function Header() {
    return (
        <header className="header">
            <img src={reactLogo} className="logo react header--image" alt="React logo" />
                
            
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">MsE - Project 3</h4>
        </header>
    )
}