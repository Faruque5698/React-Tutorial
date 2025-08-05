import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Header title={'Assignment 6'}/>
            <Content />
            <Footer />
        </>

    )

}

export default App
