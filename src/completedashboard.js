import React, { useState, } from "react";

const Completedashboard = () => {
    const [Open, setOpen] = useState(true)
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
                                {Open && (
                                    <ul>

                                        <li><a class="dropdown-item" href="" style={{ color: "white" }}>Subject</a></li>
                                        <li><a class="dropdown-item" href="/chapter" style={{ color: "white" }}>Chapters</a></li>
                                    </ul>
                                )
                                }

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
                    <div className="col-md-8 py-3">
                        <p>Welocme back!</p>
                        <p style={{ fontSize: "19px" }}>GSB Gold Standard</p>
                        <div className="row py-5">
                            <div className="d-flex flex-row">
                                <div className="card px-2 shadow">
                                   <a href="/"> <p style={{ color: "blue" }} className="py-2" >Institutions </p></a>
                                   
                                    <p className="text-center"><b>1</b></p>
                                </div>
                                <div className="mx-4 px-3 card shadow">
                                   <a href="/"><p className="px-3 py-2" style={{ color: "blue" }}>Users </p></a> 
                                   
                                    <p className="text-center"><b>8</b></p>
                                </div>
                                <div className="card shadow">
                                    <a href="/"><p className="px-3 py-2" style={{ color: "blue" }}>Active Users </p></a>
                                    
                                    <p className="text-center"><b>8</b></p>

                                </div>
                                <div className="card mx-3 shadow">
                                    <a href="/create"><p className="px-1 py-2" style={{ color: "blue" }}>Assessments </p></a>
                                    
                                    <p className="text-center"><b>0</b></p>

                                </div>
                                <div className="card mx-2 shadow ">
                                   <a href="/"> <p className="px-3 py-2" style={{ color: "blue" }}>Courses </p></a>
                                   
                                    <p className="text-center"><b>0</b></p>

                                </div>
                                <div className="card mx-2 shadow">
                                   <a href="/"> <p className="px-3 py-2" >Question </p></a>
                                    
                                    <p className="text-center"><b>1</b></p>
                                </div>




                            </div>






                        </div>
                        <div className="row ">
                            <div className="col-2 card shadow ">
                                <p style={{color:"blue"}}>Assessments</p>
                                <p style={{color:"blue"}} className="">Participation</p>
                                <p className="text-center"><b>17</b></p>
                            </div>
                            <div className="col-2 card mx-2 shadow">
                                <p >Question</p>
                                <p >Attempted</p>
                                <p className="text-center"><b>219</b></p>
                            </div>
                            <div className="col-2 card mx-2 shadow">
                                <p>Coding </p>
                                <p >submissions</p>
                                <p className="text-center"><b>0</b></p>
                            </div>
                            <div className="col-2 card mx-1 shadow">
                                <p >Tesecases</p>
                                <p >Executed</p>
                                
                                <p><b>0</b></p>
                            </div>
                            <div className="col-3 card mx-2 shadow">
                                <p >Courses Enorolled</p>

                                <p><b>0</b></p>
                            </div>



                        </div>
                        <div className="row py-5">
                            <div className="col-2 card mx-1 shadow">
                                <p style={{color:"green"}}>RT Test</p>
                                <p><b>0</b></p>

                            </div>

                            <div className="col-4 card mx-2 shadow">
                                <div className="d-flex flex-row">
                                <div>
                                <p style={{}}><b>Speaking</b></p>
                                <p><b>0/0</b></p>
                                <p>Usage/ limit</p>
                                </div>

                                <div>
                               
                                <p>Rs.0</p>
                                <p>Total/ Coast</p>
                                </div>
                                </div>

                            </div>

                            <div className="col-5 card mx-2 shadow">
                                <div className="d-flex flex-row">
                                <div>
                                <p><b>Writing Evaluation</b></p>
                                <p><b>0/0</b></p>
                                <p>Usage/ limit</p>
                                </div>

                                <div>
                               
                                <p>Rs.0</p>
                                <p>Total/ Coast</p>
                                </div>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </div>
    )

}
export default Completedashboard;