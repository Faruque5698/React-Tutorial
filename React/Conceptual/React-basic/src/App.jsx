import React from 'react';
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Counter from "./components/counter/Counter.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <h1 className='text-center'>Hello world</h1>
            <Counter />
            <Footer />
        </div>
    );
};

export default App;