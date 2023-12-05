import React from "react";

const Sign=()=>{
    return(
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-6 card shadow ">
                        <form>
                            <p >Name</p>
                            <input type="text" placeholder="Enter your Name" className="w-100"/><br/>
                            <p>Email</p>
                            <input type="text" placeholder="Enter your Email" className="w-100"/><br/>
                            <p>Phone Number</p>
                            <input type="text" placeholder="Enter your Number" className="w-100"/><br/>
                            <p>Password</p>
                            <input type="text" placeholder="Enter your Name" className="w-100"/><br/>
                            <p>confirm Password</p>
                            <input type="text" placeholder="Enter your Name" className="w-100"/><br/>
                            <p>Gender</p>
                            <input type="radio" placeholder="male"/>
                        </form>

                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-4 card py-2 shadow">
                        <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg"/>

                    </div>

                </div>

            </div>

        </div>
    )

}
export default Sign;