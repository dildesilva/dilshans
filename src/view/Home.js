import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import '../css/home.css';
function Home() {
    return (

        <>
            <Nav />
            <div className="home-layaout-header">
                <div className="home-inter-div-one">
                    <div className="home-inter-div-one-a">
                        <div className="HOME-dive-inter">
                            <p>Hello and Welcome !, I'm</p>
                            <h1>Dilshan De Silva </h1>
                            <p>a passionate Developer with a background in IT Services and Engineering. I'm excited to have you here on my website. Whether you're exploring my projects, looking for IT solutions, or just browsing, I hope you find exactly what you need.</p>
                            <p> Developer | IT Services | Engineering</p>
                            <div class="h-s-icon">
                                <li><a href="https://github.com/dildesilva"><i class="bi bi-github"></i>  </a></li>
                                <li><a href="https://www.linkedin.com/in/dilshansdesilva?original_referer=https%3A%2F%2Fgithub.com%2Fdildesilva"><i class="bi bi-linkedin"></i>  </a></li>
                                <li><a href="https://www.facebook.com/dilshansdesilva.official"><i class="bi bi-facebook"></i>  </a></li>
                                <li><a href="llll"><i class="bi bi-whatsapp"></i>  </a></li>
                                <li><a href="https://www.instagram.com/dilshans.desilva/"><i class="bi bi-instagram"></i>  </a></li>
                            </div>
                        </div>
                    </div>
                    <div className="home-inter-div-one-b">
                        <div className="home-inter-div-one-profilepic">
                            <img src={require('../image/dp1.jpg')} alt='dp' />
                        </div>
                    </div>
                </div>
                <div className="Home-frome-diveback">
                <div className="home-inter-parattwo">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8hrn-D_bQQbeFoeOgeuM0n9CQB5AyYB6UEOkvwbY7N80Ksg/viewform?embedded=true">Loading…</iframe>

                </div>
                </div>
               
                <Footer />
            </div>

           
        </>

    );
}
export default Home;