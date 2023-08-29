import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-transparent fixed-top navToggle">
            <div class="container-fluid mx-5">
                <a class="navbar-brand col-lg-1 fw-bold" href="#">TravelWhiz.lk</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list text-dark fs-1"></i>
                </button>

                <div class="collapse navbar-collapse col-lg-10 justify-content-lg-end justify-content-start  align-items-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link navbar-link me-4" href="#">Home</a>
                        <a class="nav-link navbar-link me-4" href="#">About us</a>
                        <a class="nav-link navbar-link me-4" href="#">Contact us</a>
                        <a class="btn btn-sm border border-1 border-dark px-auto bg-dark text-light rounded-pill text-center nav-link btn-lg-width btn-sm-width " href="#"><i class="bi bi-person-fill"></i> Profile</a>               
                    </div>
                </div>
            </div>
        </nav>
      )
}

export default NavBar