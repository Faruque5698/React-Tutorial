import { Fragment } from "react";

const App = () => {
    // let marks = 90;
    // let item = ['apple', 'banana', 'orange'];
    let isLoggedIn = true;

    return (
        <Fragment>
            {/* <h1>{new Date().getDate()}</h1>
            <h1>Hello World</h1>
            <button class="btn btn-primary" onClick={() => alert('ok')}>Submit</button> */}
            {
            // marks > 80 ? 'Passed' : 'Failed'

            // imediate invoked function expression
            // (() => {
            //     if (marks > 80) {
            //         return <h1>Passed</h1>;
            //     } else {
            //         return <h1>Failed</h1>;
            //     }
            // })()

            }
            {/* <select name="" id="">
                {
                    item.map((fruit, index) => {
                        return <option key={index} value={fruit}>{fruit}</option>;
                    })
                }
            </select>
            <br />
            <hr />
            <ul>
                {
                    item.map((keyItem) => {
                        return <li key="">{keyItem}</li>
                    })
                }
            </ul> */}

            {isLoggedIn && <button class="btn btn-danger" onClick={() => alert('logout')}>Log Out</button>}

        </Fragment>
    );
};

export default App;