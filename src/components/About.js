import { Outlet } from "react-router-dom";


const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is a delivery app which take your order online and deliver to you.</p>
            <Outlet />
        </div>
    )
}

export default About;