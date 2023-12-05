import React from "react";


const Login=()=>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email"/>
                        <p>Password</p>
                        <input type="text" placeholder="Enter your Password"/>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login;