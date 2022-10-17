import Inventory from "../pages/Inventory";
import HighScores from "../pages/HighScores";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import { LOGIN } from "../utils/mutations";
import { useState } from "react";
import Auth from "../utils/auth";

function NavBar() {
  const [AddPlayer] = useMutation(ADD_PLAYER);
  const [Login] = useMutation(LOGIN);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleFormSubmit () {
    // alert(formData.name + " " + formData.email + " " + formData.password)
    const { data } = await AddPlayer({
      variables: {
        playerName: formData.name,
        email: formData.email,
        password: formData.password
      }
    })
    Auth.login(data.addPlayer.token)
  }

  async function handleFormLogin () {
    const { data } = await Login({
      variables: {
        email: formData.email,
        password: formData.password
      }
    })
    Auth.login(data.login.token)
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          Octocat: The Last Commit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/game">
                START
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#inventory"
              >
                Inventory
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#high-score"
              >
                High Scores
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/" data-bs-toggle="modal" data-bs-target="#signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" data-bs-toggle="modal" data-bs-target="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* Inventory section */}
      <div className="modal fade hide" id="inventory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Inventory
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Inventory />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* highscores section */}
      <div className="modal fade hide" id="high-score" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div id="high" className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Commit your high sore?
              </h1>
              <HighScores />
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">
                <b>Enter initials</b>
              </label>
              <input type="text" placeholder="Enter Name" name="name" required />
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* signup section */}
      <div className="modal fade hide" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div id="signup" className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                Please Sign Up to continue:
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">
                <b>Player Name</b>
              </label>
              <input type="text" placeholder="Enter Name" name="name" value={formData.name} required onChange={(event) =>
              setFormData({...formData, name: event.target.value})} />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Enter Email" name="email" value={formData.email} required onChange={(event) =>
              setFormData({...formData, email: event.target.value})} />{" "}
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="psw" placeholder="Enter Password" name="psw" value={formData.password} required onChange={(event) =>
              setFormData({...formData, password: event.target.value})}/>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* login section */}
      <div className="modal fade hide" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                Please Login to continue:
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Enter Email" name="email" value={formData.email} required onChange={(event) =>
              setFormData({...formData, email: event.target.value})}/>{" "}
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="psw" placeholder="Enter Password" name="psw" value={formData.password} required onChange={(event) =>
              setFormData({...formData, password: event.target.value})} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleFormLogin}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
