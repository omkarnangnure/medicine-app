import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header(props) {
    const history = useHistory()

    function handleLogOut() {
        props.setUser('')
        window.localStorage.removeItem('userId')
        history.push('/home')
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/testimonials">Testimonials</Link>
                </li>
                {
                    props.user && 
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                }
                {
                    !props.user && 
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                }
                {
                    !props.user && 
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                }
                {
                    props.user && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/donate">Donate</Link>
                    </li>
                }
                {
                    props.user && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/collect">Collect</Link>
                    </li>
                }
                {
                    props.user && 
                    <button className="nav-item" onClick={handleLogOut}>
                        LogOut
                    </button>
                }
            </ul>
        </div>
</nav>
    </>
  );
}

export default Header;
