import React, {useState} from 'react';

function Content() {
    const [rewriteValue, setRewriteValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // create FormData from form
        const query = formData.get("anything");
        setRewriteValue(query); // state update করলাম, যা UI তে দেখাবে

    }

    return (
        <div className="text-center m-2">
            <div className="card col-6 mx-auto">
                <div className="card-header">Demo Form</div>
                <div className="card-body">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name='anything' className="form-control m-2"  placeholder="Enter something" />
                        <button type='submit' className="btn btn-success">Submit</button>
                        <br/>
                        <input
                            type="text"
                            name="rewrite"
                            placeholder="Input field value"
                            readOnly
                            className="form-control m-2"
                            value={rewriteValue} // state থেকে value নিচ্ছি
                        />
                    </form>
                </div>
            </div>

        </div>

    );
}

export default Content;