import Inventory from "../pages/Inventory";
import HighScores from "../pages/HighScores";

function NavBar() {
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
              <a className="nav-link active" aria-current="page" href="/game">
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
      <div className="modal fade" id="inventory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      <div className="modal fade" id="high-score" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      <div className="modal fade" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div id="signup" className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Please SignUp to continue:
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">
                <b>Player Name</b>
              </label>
              <input type="text" placeholder="Enter Name" name="name" required />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Enter Email" name="email" required />{" "}
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="psw" placeholder="Enter Password" name="psw" required />
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* login section */}
      <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="sign-title" id="exampleModalLabel">
                Please Login to continue:
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Enter Email" name="email" required />{" "}
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="psw" placeholder="Enter Password" name="psw" required />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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
