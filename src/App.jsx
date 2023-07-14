import "./App.css";

function App() {
  return (
    <div>
      <div>
        {/* <!-- ======= Header ======= --> */}

        <header
          id="header"
          className="fixed-top  d-flex justify-content-center align-items-center header-transparent"
        >
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero">
          <div className="hero-container">
            <h1>Chioma christopher</h1>
            <h2>I&apos;m a Frontend Web Developer </h2>

            <a
              href="#about"
              className="btn-scroll scrollto"
              title="Scroll Down"
            >
              <i className="bx bx-chevron-down"></i>
            </a>
          </div>
        </section>
        {/* <!-- End Hero --> */}

        <main id="main">
          {/* <!-- ======= About Me Section ======= --> */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <span>About Me</span>
                <h2>About Me</h2>
                <p></p>
              </div>

              <div className="row">
                <div className="col-lg-10 d-flex flex-column align-items-stretch justify-content-center">
                  <div className="content pl-lg-4 d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Name:</strong> Chioma Christopher
                          </li>

                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Phone:</strong> +234 7084513847{" "}
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>City:</strong> City : Kaduna, Nigeria
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Age:</strong> 22
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Degree:</strong> B Tech
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Email:</strong>{" "}
                            chiomachristopher91@gmail.com
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Freelance:</strong> Available
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-n4">
                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i
                            className="icofont-simple-smile"
                            style={{ color: "#20b38e" }}
                          ></i>
                          <span data-toggle="counter-up">2</span>
                          <p>
                            <strong>Happy Clients</strong>{" "}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i
                            className="icofont-clock-time"
                            style={{ color: "#2cbdee" }}
                          ></i>
                          <span data-toggle="counter-up">10 </span>
                          <p>
                            <strong>Months of experience</strong>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i
                            className="icofont-award"
                            style={{ color: "#ffb459" }}
                          ></i>
                          <span data-toggle="counter-up">3</span>
                          <p>
                            <strong>Awards</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End .content--> */}

                  <div className="skills-content pl-lg-4">
                    <div className="progress">
                      <span className="skill">
                        HTML <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        CSS <i className="val">60%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Bootstrap<i className="val">50%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        JavaScript <i className="val">65%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="45"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        React js <i className="val">45%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End About Me Section --> */}
          {/* <!-- ======= My Portfolio Section ======= --> */}
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title">
                <span>My Projects</span>
                <h2>My Projects/Tasks</h2>
              </div>

              <ul
                id="portfolio-flters"
                className="d-flex justify-content-center"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
              </ul>

              <div className="row portfolio-container">
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-app"
                  id="webb"
                >
                  <h4>Udemy Interface Clone</h4>

                  <p>
                    <a
                      href="https://kaylahray.github.io/udemyClone/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>UDEMY
                    </a>
                  </p>

                  <h4>Star Wars</h4>

                  <p>
                    <a
                      href="https://chi-star-wars.netlify.app/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>StarWars
                    </a>
                  </p>

                  <h4>Profile search</h4>

                  <p>
                    <a
                      href="https://chi-search-profile.netlify.app/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>Profile search
                    </a>
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-app"
                  id="cardd"
                >
                  <h4>Flex and Grid</h4>

                  <p>
                    <a
                      href="https://kaylahray.github.io/kaylah-s-grid-and-flexbox/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>FLEX AND GRID
                    </a>
                  </p>

                  <h4>Registration Form</h4>

                  <p>
                    <a
                      href="https://kaylahray.github.io/my-registration-formm/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>FORM
                    </a>
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <h4>Responsive Single Page</h4>

                  <p>
                    <a
                      href="https://kaylahray.github.io/module-three-assignment/"
                      className="details-link"
                      title="More Details"
                    >
                      <i className="bx bx-plus"></i>SINGLE PAGE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End My Portfolio Section --> */}

          {/* <!-- ======= My Services Section ======= --> */}
          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <span>My Services</span>
                <h2>My Services</h2>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Web Design</a>
                    </h4>
                    <p className="description">
                      We Create all kinds of professional websites required for
                      your brand or business.We create astonishing wordpress
                      sites and Customized sites which are responsive on all
                      devices.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bx-file"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Web Applications</a>
                    </h4>
                    <p className="description">
                      {" "}
                      We Create responsive web applications that will help your
                      customers connect to you easily and efficiently.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Branding</a>
                    </h4>
                    <p className="description">
                      Let us help you get your stand by exposing your
                      brand&apos;s identity and uniqueness in the general
                      market. Our branding techniques involves Utilizing digital
                      and traditional marketing strategies to break through the
                      market and grab your customer&apos;s attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End My Services Section --> */}

          {/* <!-- ======= My Resume Section ======= --> */}
          <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <span>My Resume</span>
                <h2>My Resume</h2>
                <p>Here is a summary of my projects/work experience</p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>chioma christopher </h4>
                    <p>
                      <em>
                        Innovative and deadline-driven web developer with 9
                        months of experience designing and developing
                        user-centered web platforms/websites from initial
                        concept to final, polished deliverable.
                      </em>
                    </p>
                    <ul>
                      <li>Sabon Tasha, Kaduna, Nigeria.</li>
                      <li>(234) 70 8451 3847</li>
                      <li>chiomachristopher91@gmail.com</li>
                    </ul>
                  </div>

                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Bachelor of Technology in Biochemistry</h4>
                    <h5>2015 - 2021</h5>
                    <p>
                      <em>Federal University of Technology, Minna</em>
                    </p>
                    <p>
                      Graduated from Federal University of Technology, Minna,
                      Niger state. with second class upper Honors in
                      Biochemistry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Tech Experience</h3>
                  <div className="resume-item">
                    <h4>Frontend web development Training at zuri </h4>
                    <h5>May - August ,2022</h5>
                    <p>
                      <b>
                        Completed an intensive training in frontend
                        -HTML/CSS/-JAVASCRIPT{" "}
                      </b>
                    </p>
                    <p>
                      <a href="https://drive.google.com/file/d/1D7xuqHiZUxrWRk-h7veJJeqRdiO7_NHX/view?usp=drivesdk">
                        Zuri Certificate
                      </a>
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Programming training at coursera</h4>
                    <h5>August ,2022</h5>
                    <p>
                      <em>
                        An online non-credit course authorized by Johns Hopkins
                        University.
                      </em>
                    </p>
                    <p>
                      <a href="https://drive.google.com/file/d/1D099A71WKwk6ykTbvGgJrHMexjiXanz-/view?usp=drivesdk">
                        {" "}
                        Coursera Certificate
                      </a>
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Africa Agility Girls In Tech Bootcamp</h4>
                    <h5>October - December ,2022.</h5>

                    <p>
                      <a href="https://drive.google.com/file/d/1DA8gTukNM5DgT0ES9k7_Owg_TGbDu3dl/view?usp=drivesdk">
                        Certificate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End My Resume Section --> */}

          {/* <!-- ======= Pricing Section ======= --> */}

          {/* <!-- ======= Contact Me Section ======= --> */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <span>Contact Me</span>
                <h2>Contact Me</h2>
                <p>Reach Out to me via the options below;</p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                          <a
                            href="https://wwww.instagram.com/_c.h.i.oma"
                            className="instagram"
                          >
                            <i className="icofont-instagram"></i> Instagram
                          </a>

                          <a
                            href="https://github.com/Kaylahray"
                            className="github"
                          >
                            <i className="icofont-github"></i> Github
                          </a>

                          <a
                            href="https://www.linkedin.com/mwlite/in/chioma-christopher-6a539723a"
                            className="linkedin"
                          >
                            <i className="icofont-linkedin"> Linkedin</i>
                          </a>
                          <a
                            href="https://mobile.twitter.com/Kayla_hhray"
                            className="twitter"
                          >
                            <i className="icofont-twitter"></i> Twitter
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Me</h3>
                        <p>chiomachristopher91@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call"></i>
                        <h3>Call Me</h3>
                        <p>+234 7084513847</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h2 className="h4 text-black mb-5">Contact Form</h2>

                  <div style={{ maxWidth: "500px", padding: "30px" }}>
                    <div id="fcf-form">
                      <form
                        className="fcf-form-class"
                        id="freeversion"
                        method="post"
                        action="fcf-assets/fcf.process.php"
                      >
                        <div className="field">
                          <label
                            htmlFor="Name"
                            className="label has-text-weight-normal"
                          >
                            Your name
                          </label>
                          <div className="control">
                            <input
                              type="text"
                              name="Name"
                              id="Name"
                              className="input is-full-width"
                              maxLength="100"
                              data-validate-field="Name"
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label
                            htmlFor="Email"
                            className="label has-text-weight-normal"
                          >
                            Your email address
                          </label>
                          <div className="control">
                            <input
                              type="email"
                              name="Email"
                              id="Email"
                              className="input is-full-width"
                              maxLength="100"
                              data-validate-field="Email"
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label
                            htmlFor="Message"
                            className="label has-text-weight-normal"
                          >
                            Your message
                          </label>
                          <div className="control">
                            <textarea
                              name="Message"
                              id="Message"
                              className="textarea"
                              maxLength="3000"
                              rows="5"
                              data-validate-field="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div id="fcf-status" className="fcf-status"></div>
                        <div className="field">
                          <div className="buttons">
                            <button
                              id="fcf-button"
                              type="submit"
                              className="button is-link is-medium"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div id="fcf-thank-you" style={{ display: "none" }}>
                      {/* <!-- Thank you message goes below --> */}
                      <strong>Thank you</strong>
                      <p>
                        Thanks for contacting us, we will get back in touch with
                        you soon.
                      </p>
                      {/* <!-- Thank you message goes above --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Contact Me Section --> */}
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div className="container">
            <h3>Chioma Christopher</h3>
            <p>A creative web developer.</p>
            <div className="social-links">
              {/* <!-- <a href="https://www.facebook.com/davidagenefrancis" class="facebook"><i class="bx bxl-facebook"></i></a> --> */}
              <a
                href="https://wwww.instagram.com/_c.h.i.oma"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/mwlite/in/chioma-christopher-6a539723a"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>c.h.i.o.m.a</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ --> */}
              <a href="https://bootstrapmade.com/"></a>
            </div>
          </div>
        </footer>

        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </div>
      ;
    </div>
  );
}

export default App;
