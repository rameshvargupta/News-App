import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>



        <nav class="navbar select1 navbar-expand-lg navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/" style={{ color: "red", fontSize: "bold" }}>G News</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="/business">Business</Link></li>
                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="sport">Sports</Link></li>
                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="/science">Science</Link></li>
                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="/health">Health</Link></li>
                <li class="nav-item"> <Link class="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>






              </ul>
              <form action="https://google.com/search" target="_blank" type="GET" class="d-flex" role="search">
                <input class="form-control me-2" placeholder="Search" name="q" />

                <button class="btn btn-outline-success" type="submit"> Search</button>
              </form>
            </div>
          </div>
        </nav>


      </div>
    )
  }
}
