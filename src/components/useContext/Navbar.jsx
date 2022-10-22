import { Outlet, Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">useContext</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/`} className={`${urlActual === '/' ? 'active':''} nav-link`} >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about`} className={`${urlActual === '/about' ? 'active':''} nav-link`} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/login`} className={`${urlActual === '/login' ? 'active':''} nav-link`} >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Navbar