import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand mb-0 h1 logo-full">Uber<span className="logoChef">Chef</span></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 " id="cuisine-form">
                    <select className="form-control" id="cuisine-select" name="cuisine_id">
                        <option value="201">Mexican</option>
                        <option value="202">Italian</option>
                        <option value="203">French</option>
                        <option value="204">Thai</option>
                        <option value="205">Indian</option>
                        <option value="206">Japenese</option>
                        <option value="207">American</option>
                        <option value="208">Malaysian</option>
                        <option value="210">Greek</option>
                    </select>
                    <button type="submit" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" id="cuisine-submit" type="button">Search Style</button>

                </form>
                <div className="collapse navbar-collapse justify-content-end">
                    <li className="nav-item active">
                        <a href="/"><button className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Home</button></a>
                    </li>
                    <li className="nav-item active">
                        <a href="/sign-up"><button id="sign-in" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Sign Up</button></a>
                    </li>
                    <li className="nav-item active">
                        <a href="/login"><button id="sign-in" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Log-in</button></a>
                    </li>
                </div>


            </div>
        </nav>
    )
}

export default Navbar