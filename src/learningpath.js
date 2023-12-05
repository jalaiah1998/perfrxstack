import React from "react";

const Learningpath = () => {
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
                    <div className="col-8">
                        <div className="row card my-5 shadow">
                            <div className="my-1 mb-4 ">
                                <label>Learningpath *</label><br></br>
                                <input type="text" placeholder="Title" className="w-100 " />
                            </div>

                        </div>

                        <div className="row card my-4 shadow">
                            <div className=" mb-4 ">
                                <label>Tags *</label><br></br>
                                {/* <input type="text" placeholder="Tags" className="w-100 "/> */}
                                <select type="text" placeholder="...select Tag..." className="w-100"  >
                                    <option>...Select Relevent Tag....</option>
                                    <option style={{ color: "1px solid blue" }}>Aptiude</option>
                                    <option>AWS</option>
                                    <option>Database</option>
                                    <option>Datascience</option>
                                    <option>Devops</option>
                                    <option>MobileApp</option>
                                    <option>Scripting</option>
                                    <option>Software testing</option>
                                    <option>Webservice</option>
                                    <option>webdevelopement</option>
                                    <option>Verbal communication</option>

                                </select>
                            </div>

                        </div>

                        <div className="row card my-3 shadow">
                            <div className=" mb-4 ">
                                <label>Cover letter *</label><br></br>
                                <textarea className="w-100" />
                            </div>

                        </div>
                        <div className="row card my-4 shadow">
                            <div className=" mb-4 ">
                                <label>Tags *</label><br></br>
                                {/* <input type="text" placeholder="Tags" className="w-100 "/> */}
                                <select type="text" placeholder="...select Tag..." className="w-100"  >
                                    <option>...Select diffculty level....</option>

                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advance</option>



                                </select>
                            </div>

                        </div>
                        <div className="row" >
                            <p>About this learningpath *</p>

                            <div className="col-1">
                                <p>Edit</p>
                            </div>
                            <div className="col-1">
                                <p>View</p>
                            </div>
                            <div className="col-1">
                                <p>Insert</p>
                            </div>
                            <div className="col-1">
                                <p>Format</p>
                            </div>
                            <div className="col-1">
                                <p>Table</p>
                            </div>




                        </div>
                        <div className="card shadow mb-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="" style={{ width: "100px" }}><i class="fa-solid fa-share" ></i><i class="fa-solid fa-share-from-square mx-4"></i></th>
                                        <th className="text-center" style={{ fontSize: "14px", color: "lightblack", width: "100px" }}>paragraph</th>
                                        <th className="iconsew"><i class="fa-solid fa-bold "></i><i class="fa-solid fa-italic mx-4"></i></th>
                                        <th className="" style={{ width: "145px" }}><i class="fa-solid fa-sliders"></i>
                                            <i class="fa-solid fa-list mx-2"></i>
                                            <i class="fa-solid fa-sliders mx-2"></i>
                                            <i class="fa-solid fa-sliders mx-2"></i></th>
                                        <th className="" style={{ width: "100px" }}><i class="fa-solid fa-link"></i><i class="fa-solid fa-bars mx-3"></i></th>
                                        <th className=""><i class="fa-solid fa-square-root-variable"></i></th>

                                    </tr>


                                </thead>






                            </table>
                            <textarea className="w-100" />
                        </div>
                        <div className="row card my-2 shadow">
                            <div className="my-1 mb-4 ">
                                <label>Author *</label><br></br>
                                <input type="text" placeholder="Author" className="w-100 " />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-3 mx-1">
                                <label>Hours</label>
                                <input type="text"/>

                            </div>
                            <div className="col-2 mx-2">
                                <label>Minutes</label>
                                <input type="text"/>

                            </div>
                            <div className="col-5 mx-4">
                                <label>Choose file</label><br></br>
                                <input type="text"/>

                            </div>

                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}
export default Learningpath;