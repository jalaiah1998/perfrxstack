import React from "react";


const Create = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 card" style={{ backgroundColor: "black", color: "white" }}>
                        <div className="d-flex flex-row justify-content-between ">
                            <div>
                                <h5>Instacks</h5>
                            </div>
                            <div>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="mx-2">
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>HomePage</p>
                            </div>
                        </div>


                        <h5>INSTITUTIONS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Institutions</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>

                            </div>
                            <div className="mx-2">
                                <p>Batch Years</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Batches</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Users</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-brands fa-algolia"></i>
                            </div>
                            <div className="mx-2">
                                <p>Search user</p>
                            </div>
                        </div>

                        <h5>QUESTION BANK</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div className="mx-2 ">
                                <p className="dropdown-toggle">Self Created QB</p>

                                <ul>

                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Subject</a></li>
                                    <li><a class="dropdown-item" href="/chapter" style={{ color: "white" }}>Chapters</a></li>
                                </ul>


                                <p className="dropdown-toggle">MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/parag" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/view" style={{ color: "white" }}>View</a></li>
                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Upload</a></li>
                                </ul>
                                <p className="dropdown-toggle">Parag MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/mcq" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

                                </ul>

                                <p className="dropdown-toggle">Coding Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/coding" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/codingview" style={{ color: "white" }}>View</a></li>

                                </ul>

                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-row">

                                <i class="fa-brands fa-algolia"></i>

                                <div className="mx-2">
                                    <p>Assigned QB</p>
                                </div>
                            </div>
                        </div>

                        <h5>ASSESSMENTS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Reports</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                            <div className="mx-2">
                                <p>Compare</p>
                            </div>
                        </div>

                        <h5>LEARNING PATH</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Learning Path</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">
                                <p>Access</p>
                            </div>
                        </div>

                        <h5>PRACTICE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="mx-2">
                                <p>pratice</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="mx-2">
                                <p>Participation Report</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned</p>
                            </div>
                        </div>


                        <h5>Blogs</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Blogs</p>
                            </div>
                        </div>

                        <h5>PROCTORING</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-circle-dot"></i>
                            </div>
                            <div className="mx-2">
                                <p>proctoring</p>
                            </div>
                        </div>

                        <h5>PROFILE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className="mx-2">
                                <p>billing</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Invoices</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-key"></i>
                            </div>
                            <div className="mx-2">
                                <p>Change Password</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>Compiler Test</p>
                            </div>
                        </div>

                        <hr style={{ backgroundColor: "white" }} />
                        <div className="text-center" >
                            <button style={{ backgroundColor: "blue", color: "white" }}>Logout</button>
                        </div>
                        <div className="text-center">
                            <i class="fa-regular fa-message"></i>
                        </div>
                    </div>

                    <div className="col-1"></div>
                    <div className="col-md-8 ">
                        <div className="card shadow">
                            <p className="mt-3 mx-2">CREATE ASSESSMENTS</p>
                            <div className="row mx-3">

                                <div className="col-2 mt-3 Basic">
                                    

                                    <input type="radio" />

                                    <p >BASIC</p>

                                </div>
                                <div className="col-4 mt-3">
                                    <input type="radio" className="mx-5" />
                                    <p>SET ASSESSMENTS PAPER</p>

                                </div>
                                <div className="col-3 mt-3">
                                    <input type="radio" className="mx-5" />
                                    <p>SELECT Question</p>

                                </div>
                                <div className="col-3 mt-3">
                                    <input type="radio" className="mx-5" />
                                    <p>ASSESSMENTS Setting</p>

                                </div>

                            </div>
                            <div className="mx-3">
                                <label>Category *</label>
                                <input type="text" placeholder="...Select Category..." className="w-100" />
                            </div>
                            <div className="row my-3 mx-2">
                                <div className="col-4">
                                    <label>Assessment Name *</label>
                                    <input type="text" placeholder="Assessment Name" className="w-100" />

                                </div>
                                <div className="col-4 ">
                                    <label>No of times *</label><br />
                                    <input type="text" placeholder="No of times" className="w-100" />

                                </div>
                                <div className="col-4">
                                    <label>Assessment Password *</label>
                                    <input type="text" placeholder="Assessment password" className="w-100" />

                                </div>

                            </div>

                            <div className="row my-3 mx-2">
                                <div className="col-4">
                                    <label>Exam Type *</label>
                                    <input type="text" placeholder="...Select Exam Type..." className="w-100" />

                                </div>
                                <div className="col-4 ">
                                    <label>Cutt Off Type *</label><br />
                                    <input type="text" placeholder="...Cutt Off Type..." className="w-100" />

                                </div>
                                <div className="col-4">
                                    <label>Question Selection *</label>
                                    <input type="text" placeholder="...Question Selection..." className="w-100" />

                                </div>
                                <hr className="mt-3"></hr>

                            </div>

                            <div className="mx-3">
                                <p>Assessment Reports</p>
                            </div>
                            <div className="row mx-2">
                                <div className="col-3">
                                    <p className=""><input type="checkbox" className="mx-2" />Show reports</p>
                                    {/* <p className="">Show reports</p> */}
                                </div>
                                <div className="col-3">
                                    <p className=""><input type="checkbox" className="mx-2" />Show Percentage</p>
                                </div>

                                <div className="col-3">

                                    <p className=""><input type="checkbox" className="mx-1" />Show Check Answer</p>
                                </div>

                                <div className="col-3">

                                    <p className=""><input type="checkbox" className="mx-2" />Show Explantion</p>
                                </div>


                            </div>

                            <div className="row mx-2">
                                <div className="col-3">
                                    <p className=""><input type="checkbox" className="mx-1" />Show Chapter</p>
                                    {/* <p className="">Show reports</p> */}
                                </div>
                                <div className="col-3">
                                    <p className=""><input type="checkbox" className="mx-1" />Show Accuracy </p>
                                </div>

                                <div className="col-3">

                                    <p className=""><input type="checkbox" className="mx-1" />Show Leaderboard</p>
                                </div>




                            </div>
                            <div className="col-4 mx-3">
                                <p className=""><input type="checkbox" className="mx-1" />Show prviate case output</p>
                                {/* <p className="">Show reports</p> */}
                            </div>
                            <p className="mx-3">Coding Questions only</p>
                            <hr style={{color:"black"}}></hr>

                            <div className="row mx-3">
                                <p>Assessment Flow *</p>
                                <div className="col-3">
                                    <p><input type="radio" className="mx-3" />linear</p>


                                </div>
                                <div className="col-3">
                                    <p><input type="radio" className="mx-3" />NON-linear</p>


                                </div>
                                <hr />


                            </div>
                            <div className="col-4 mx-3">
                                <p><input type="radio" className="mx-3" />Assessment Adoptiveness</p>


                            </div>
                            <div className="text-center mb-3">
                                <button style={{ backgroundColor: "blue", color: "white" }}>Submitt</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
export default Create;