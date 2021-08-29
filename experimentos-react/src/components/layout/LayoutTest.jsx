import React from 'react'

import './LayoutTest.css'
import HomeAction from './HomeAction.jsx'

export default () =>

    <>
        <div className="topArea">
            <header>
                <h1>REACT<span>JS</span></h1>
            </header>
        </div>

        <nav className="navButtons">
            <button className="home">Home</button>
            
            <button className="hot">Hot</button>
            <button className="news">News</button>
            <button className="rising">Rising</button>
        </nav>
    </>