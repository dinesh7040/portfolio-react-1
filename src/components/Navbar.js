function NavBar() {
    return (
        <nav className="navbar">
            <p className="navbar-leading">GK</p>
            <div className="navbar-actions">
                <a className="active home" href="#home">Home</a>
                <a className="about-me" href="#about-me" >About Me</a>
                <a className="services" href="#services">Services</a>
                <a className="my-projects" href="#my-projects">My Projects</a>
                <a className="contact-me" href="#contact">Contact Me</a>
            </div>

            {/* <div>
                <button className="navbar-menu" id="menu-button">
                    <nav className="navbar-menu-items" id="navbar-menu-items">
                        <a className="active home" href="#home">Home</a>
                        <a className="about-me" href="#about-me" >About Me</a>
                        <a className="services" href="#services">Services</a>
                        <a className="my-projects" href="#my-projects">My Projects</a>
                        <a className="contact-me" href="#contact">Contact Me</a>
                    </nav>
                </button>
            </div> */}
        </nav>
    );
}

export default NavBar;