import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './componants/clock'

function App() {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Nahid');
    }

    return (<div>
            <Clock locale={"bn-BD"}/>
            {/*<div>*/}
            {/*    <button class="btn btn-primary"  onClick={ handleClick}>*/}
            {/*        Change language*/}
            {/*    </button>*/}
            {/*</div>*/}
        <form onSubmit={handleClick}>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
        </div>)
}

export default App
