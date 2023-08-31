import React from 'react'
import "./Profileform.css"
import userlogo from "../../assets/facebook 1.png"
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

const Profileform = (props) => {
  return (
    <div>
        <NavBar tocreate={props.tocreate} setToCreate={props.setToCreate} show={props.show} setShow={props.setShow}/>
        <div className='head'>
            <img src={userlogo} alt=''/>
            <h2>PROFILE</h2>
        </div>
        <div className='formpart'>
            <form>
                <div className='subform'>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Age</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your age"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Gender</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Gender"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter your travel type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Travel type 1</option>
                            <option value="2">Travel type 2</option>
                            <option value="3">Travel type 3</option>
                        </select>
                    </div>
                </div>

                <div className='subform'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Adventures</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Adventures 1</option>
                            <option value="2">Adventures 2</option>
                            <option value="3">Adventures 3</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Disability</label>
                        <textarea class="form-control" placeholder="Enter your Disability"></textarea>
                    </div>

                </div>
                <div className='subform'>wfew</div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Profileform