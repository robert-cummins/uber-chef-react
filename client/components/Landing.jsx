import React from 'react'


const Navbar = () => {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
                <h1 className="display-4 jumbo-header"><span className="jumbo-logo">Uber</span><span className="logoChef">Chef</span></h1>
                <p className="lead jumbo-logo">Your favorite meals cooked by professional chefs in your home</p>
                <form action="/value" className="form-inline my-2 my-lg-0 " name="form1" id="main-form">
                    <select id='city-select' className="form-control main-select">
                        <option value="Auckland">Auckland</option>
                        <option value="Wellington">Wellington</option>
                        <option value="Christchurch">Christchurch</option>
                        <option value="Hamilton">Hamilton</option>
                    </select>
                    <button id="main-submit" className="btn btn-outline-success my-2 my-sm-0 submit" type="submit">Find a Chef</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar