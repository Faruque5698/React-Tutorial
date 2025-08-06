import {useRef} from 'react';

const App = () => {
    let myTag = useRef(null);
    let myImg = useRef(null);

    const clickAction = () => {
        // myTag.current.innerHTML = 'Hello world';
        myTag.current.innerText = 'Hello Nahid';
        myTag.current.classList.add('bg-primary');
        myImg.current.src = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/boruto-1.jpg';
        myImg.current.setAttribute('height', '200px');
        myImg.current.setAttribute('width', '200px');
    }

    let emailInput = useRef(null);
    let passwordInput = useRef(null);

    const loginAction = () => {
        let email = emailInput.current.value;
        let pass = passwordInput.current.value;
        alert(email+' = '+pass);
    }


    let APIData = useRef(null);
    let myPara = useRef(null);

    const apiFetch = async () => {
        let url = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);
        APIData.current = await response.json();
    }

    const ShowAPIData = () => {
        myPara.current.innerHTML = JSON.stringify(APIData.current);
    }

    return (
        <div>
            <img ref={myImg} src="https://cdn.oantagonista.com/uploads/2024/12/MV5BZDBkODU0MjktZGUwNS00MTU3LTllMGUtYWY5MDY2ZDhjZmY0XkEyXkFqcGc._V1_QL75_UX820_-1024x574.jpg" alt=""/>
            <h1 ref={myTag}>React App</h1>
            <button onClick={clickAction}>Click</button>
            <div className="d-flex justify-content-center align-items-center">
                <div className='card col-8'>
                    <div className='card-header text-center'>
                        Sign In
                    </div>

                    <div className='card-body'>
                            <input type="text" ref={emailInput} className="form-control" placeholder="Email" />
                            <input type="password" ref={passwordInput} className="form-control" placeholder="Password" />
                            <button type="submit" className="btn btn-outline-primary" onClick={loginAction}>Login</button>
                    </div>

                </div>
            </div>

            <div>
                <p ref={myPara}></p>
                <button onClick={ShowAPIData}>ShowAPIData</button>
                <button onClick={apiFetch}>CallApiData</button>
            </div>


        </div>
    );
};

export default App;