import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div>
            <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://foreignpolicy.com/wp-content/uploads/2018/12/2018-book-lead-3.jpg?quality=90"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*v7txFtELDdKk3R4m8JanKQ.png"
                             className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.barnesandnoble.com/blog/wp-content/uploads/2022/10/PROD-24774_Blog_BestFictionBooks_1488x852.jpg"
                            className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    <section id="about" className="about section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="about-img">
                        <img src="https://cis.lk/images/facilities/library-inner-6538.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2>We Have All What You Need</h2>
                        <p>The Colombo Public library is established in July 1925, by the amalgamation of the Colombo library & the Pettah library. At the beginning the library had 3 departments, The Reading Room, the Lending Room & the Reference Library. It had seven members on the staff, with late Mr. S.C Blok as the Librarian.
                            By now, the library has a collection of nearly one million books, 57 newspapers & 111 periodical titles in all 3 languages, Sinhala, Tamil & English.
                            It expands its services to 13 branches, Mobile Service & Book Box Projects to under privileged children in shanties. Now it has 5 departments, 7 service providing points and 105 staff members.</p>
                        <a href="{{url('/data')}}" className="btn btn-warning">View Books</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 pt-5">
                    <div className="about-img">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgewtlcdx_PmdmP06PXGNEY5fawu0NyQFB_zamKsDX3K534xP21XSgiLhFXsITNzHBxqz5S8yCZnSKypiscWzlUpEBwFNMidKRhXi4annwQivg_CJJgoyvaWJ0kGVoIWBAt1PYdoDaK_xl_6c4GBQBFMREw_ia06cOg--Tw7SfSHEsmK04GHV88T29J/s3000/Membership.png" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2>APPLYING FOR MEMBERSHIP</h2>
                        <p>Mainly library is catered to the general public of the Colombo Municipal area. At the same time, there are provisions to join the library, persons who studying or working in the city limits.
                            In addition one could be a member after deposit Rs. 2000/= as a security fee instead of a guarantor attestation.
                            Even a foreigner could use the library, after paying Rs. 5000/= as the security fee.
                            Membership, charge and application procedure</p>
                        <a href="" className="btn btn-warning">Become A memeber</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Home
