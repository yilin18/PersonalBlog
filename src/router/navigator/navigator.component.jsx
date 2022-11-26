import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import './navigation.styles.scss'

const Navigator = ()=>{
    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-container"></div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="new-blog">Add a New Blog</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigator