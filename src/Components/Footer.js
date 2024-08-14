import '../css/footer.css';
function Footer() {
    return (
        <>
            <div className="footer-main">

                <div className="footer-style">
                    <div className="footer-inter-main">

                        <div className="folllter-sections">
                            <ul>
                                <h5>Go To</h5>
                                <li><a href="about.html"><i className="bi bi-person-lines-fill"></i> About Me</a></li>
                            {/* <li><a href="acda.html"><i className="bi bi-laptop"></i> Academic</a></li> */}
                            <li><a href="acda.html"><i className="bi bi-laptop"></i> Social</a></li>
                            <li><a href="project.html"><i className="bi bi-cpu"></i> Projects</a></li>
                            </ul>
                        </div>
                        <div className="folllter-sections">
                            <ul>
                                <h5>Follow me</h5>
                                <li><a href="https://github.com/dildesilva"><i class="bi bi-github"></i> github </a></li>
                                <li><a href="https://www.linkedin.com/in/dilshansdesilva?original_referer=https%3A%2F%2Fgithub.com%2Fdildesilva"><i class="bi bi-linkedin"></i>  linkedin</a></li>
                                <li><a href="https://www.facebook.com/dilshansdesilva.official"><i class="bi bi-facebook"></i> facebook </a></li>
                                {/* <li><a href="llll"><i class="bi bi-whatsapp"></i>  </a></li> */}
                                <li><a href="https://www.instagram.com/dilshans.desilva/"><i class="bi bi-instagram"></i> instagram </a></li>
                           
                            </ul>
                        </div>
                        <div className="folllter-sections">
                            <ul>
                                <h5>Adress</h5>
                                <li><i class="bi bi-geo-alt-fill"></i>20/1,Thalawathugoda baddagana 2nd lane,Pitakotte.</li>
                                <li><i class="bi bi-envelope-fill"></i>wadsdesilva@gmail.com</li>
                            </ul>
                        </div>
                        <div className="folllter-sections">
                            <ul>
                            <h5>Contact</h5>
                                <li><i class="bi bi-telephone-fill"></i>071 989 2193</li>
                                <li><i class="bi bi-whatsapp"></i> 071 989 2193</li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="slash-footer">
                <p>&copy; 2024 DilWeb. All rights reserved.</p>
                 </div>
            </div>

           

        </>
    );
}
export default Footer;