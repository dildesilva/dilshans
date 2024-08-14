import '../css/nav.css';
import { useState } from 'react';

function Nav() {
    // State to manage the navbar active state
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the navbar class
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <nav className="nav-bar">
                <div className="navDUplicate">
                    <div className="logonav"><a href="index.html">DilWeb</a></div>
                    {/* Use onClick with the toggleMenu function */}
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    <div className={`navbar ${isActive ? 'active' : ''}`} id="navbar">
                        <ul>
                            <li><a href="/dilshans"><i className="bi bi-house-fill"></i> Home</a></li>
                            <li><a href="/dilshans/about"><i className="bi bi-person-lines-fill"></i> About Me</a></li>
                            {/* <li><a href="acda.html"><i className="bi bi-laptop"></i> Academic</a></li> */}
                            <li><a href="acda.html"><i className="bi bi-laptop"></i> Social</a></li>
                            <li><a href="https://dildesilva.github.io/dilshan/project.htmljj"><i className="bi bi-cpu"></i> Projects</a></li>
                            <li><a href="/Contact"><i className="bi bi-file-earmark-person"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
