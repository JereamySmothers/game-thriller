import Inventory from "../pages/Inventory";
import HighScores from "../pages/HighScores";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                START
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#inventory"
                data-bs-toggle="modal"
                data-bs-target="#inventory"
              >
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#high-score"
                data-bs-toggle="modal"
                data-bs-target="#high-score"
              >
                High Scores
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#signup"
                data-bs-toggle="modal"
                data-bs-target="#signup"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* Inventory section */}
      <div
        class="modal fade"
        id="inventory"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Inventory
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Inventory />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* highscores section */}
      <div
        class="modal fade"
        id="high-score"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div id="high" class="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Commit your high sore?
              </h1>
              <HighScores />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <label for="name">
                <b>Enter initials</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* signup section */}
      <div
        class="modal fade"
        id="signup"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div id="signup" class="modal-content">
            <div className="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Please SignUp to continue:
              </h1>
              <SignUp />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label for="name">
                <b>Player Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />
               <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              /> <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="psw"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* login section */}
      <div
        className="modal fade"
        id="signup"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="sign-title" id="exampleModalLabel">
                Please Login to continue:
              </h1>
              <Login />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
               <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              /> <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="psw"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
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
