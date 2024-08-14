import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import "../css/about.css";
function About() {
    return (

        <>
            <Nav />
            <div className="about-main-dev">

                <div className="About-headere-section">
                    <div className="About-header-round">
                        <h1>Who ?</h1><h1>I'm Software Developper and It Supporter</h1>
                        <p>I have IT Help Desk experience  and am currently in the 3rd year of an undergraduate program
                            pursuing a Higher National Diploma in Information Technology. I am also undertaking a Full Stack Web
                            Development course and hold a Diploma in Information Technology. Additionally, I have experience working with
                            teams and ticket systems, web development with the Laravel framework, and am skilled in programming
                            languages like Java, C#, PHP, JavaScript, MySQL, networking, and hardware and software troubleshooting in PCs</p>
                    </div>
                </div>


                <div className="about-skill">
                    <div className="about-biology">
                        <h1>BIOGRAPHY</h1>
                        <ul>
                            <li>Name: W. A. D. S. De Silva</li>
                            <li>Date of Birth: 10.05.2000</li>
                            <li>Gender: Male</li>
                            <li>Nationality: Sinhalese</li>
                            <li>Religion: Buddhism</li>
                            <li>School: St.Aloysius College,Ratnapura</li>
                            <li>Marital Status: Single</li>
                        </ul>
                    </div>
                    <div className="about-biology">
                        <h1>SOFT SKILLS</h1>
                        <ul>
                            <li>Communication</li>
                            <li>Flexibility</li>
                            <li>Leadership</li>
                            <li>Teamwork</li>
                            <li>Creativity</li>
                            <li> Help Desk Support</li>
                        </ul>
                    </div>
                    <div className="about-biology">
                        <h1>COMPETENCIES</h1>
                        <ul>
                            <li>WEB PROGRAMMING: c#  | java | PHP | JavaScript | HTML | CSS
                            </li>
                            <li>DATABASE: MYSQL </li>
                            <li>PROGRAMMING LANGUAGES  :   c#  | java | PHP | JavaScript  </li>
                            <li>FRAMEWORKS  :  React | Laravel </li>
                            <li>NETWORKING</li>
                            <li>OOP CONCEPT</li>
                            <li>AGILE/RAD MODEL WORK</li>
                        </ul>
                    </div>
                </div>


                <div className="about-skill-icon-style">
                    <img src={require("../image/php.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/java.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/c1.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/android.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/react.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/laravel.png")} alt='' width="100px" height="100px" />
                    <img src={require("../image/sql.png")} alt='' width="100px" height="100px" />
                </div>

                <div className="about-acdamic-csection">
                    <div className="about-acadmic-section-style">

                        <div className="about-acadamic-infromation">

                            <h1>Academic Qualifications</h1>

                            <div className="aboute-acdamik-inromattopn-content">
                            <div className="aboute-acdamik-inromattopn-content-a">
                                <div className="timeline">2022-2024(Degree pathway-2nd & 3rd Year)</div> 
                                    <div className="aca-name">HND in Information Technology</div>
                                    <p>Sri Lanka Institute of Advanced Technological Education,Sri Lanka.</p>

                                    {/* <p>Science and Information Technology City Campus, Sri Lanka.</p> */}
                                </div>
                                <div className="aboute-acdamik-inromattopn-content-a">
                                <div className="timeline">2021-2021(Degree pathway-1st Year)</div>
                                    <div className="aca-name">Diploma in Information Technology</div>
                                    {/* <p>Sri Lanka Institute of Advanced Technological Education,Sri Lanka.</p> */}
                                    <p>Science and Information Technology City Campus, Sri Lanka.</p>

                                </div>
                            </div>

                            <div className="aboute-acdamik-inromattopn-content">
                                <div className="aboute-acdamik-inromattopn-content-a">
                                    <div className="timeline">2023 - 2024</div>
                                    <div className="aca-name">Studying Full Stack Web Developer</div>
                                    <p>University of Moratuwa, Sri Lanka.</p>
                                </div>
                                <div className="aboute-acdamik-inromattopn-content-a">
                                <div className="timeline">1/2021 - 6/2021</div>
                                <div className="aca-name">Advanced Certificate in English</div>
                                <p>Sri Lanka English Language Graduates’ Association, Sri Lanka.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>

    );
}
export default About;