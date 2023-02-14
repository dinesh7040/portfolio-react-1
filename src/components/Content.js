import introImage from '../assets/images/portfolio-person.png';
import '../css/Content.css';
function Introduction() {
    return (
        <div className="row" id="intro">
            <div className="col-md" id="intro-text">
                <p className="udl-txt" id="intro-welcome">Welcome I'm</p>
                <h2>Gokulakrishnan velusamy</h2>
                <h3>Full-stack web and mobile developer</h3>
                <p className="intro-about">I'm a seasoned full-stack developer</p>
                <p className="intro-about">I develop applications for Android, iOS, MacOS, Linux, Windows and Web using Flutter, React and PHP</p>
                <p className="intro-about">Currently I'm working at Nutz Technovation Pvt Ltd., Erode</p>
                <div className="row row-btn">
                    <button className="btn-md" id="hire-me-btn">Hire Me</button>
                    <button className="btn-md" id="portfolio-btn">Portfolio</button>
                </div>
            </div>
            <img src={introImage} alt="Person"></img>
        </div>
    )
}

function Content() {
    return (
        <div className="main-content">
            <Introduction />
        </div>
    )
}

export default Content;
