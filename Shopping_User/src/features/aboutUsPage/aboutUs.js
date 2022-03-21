import React, { useEffect } from 'react'
import NavigateComponent from '../../components/nav/navigateComponent'
import '../homePage/Homepage.css'
import img from '../../assets/feature-image.jpg'
import { connect } from 'react-redux'
function AboutUs(props) {
    useEffect(() => {
        props.setNavType("about")
    }, []);

    return (
        <div>
            <NavigateComponent />

            <div class="page-heading about-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-content">
                                <h4>about us</h4>
                                <h2>our company</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="best-features about-features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                                <h2>Our Background</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="right-image">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="left-content">
                                <h4>Who we are &amp; What we do?</h4>

                                <p>We are passionate about coffee beans. Their fragrance has always fascinated us. Coming to our website, you will find a wide variety of coffees from established brands to established brands.
                                    <br />
                                    <br />
                                    Our mission is to bring you all the best coffee brands we know.</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="team-members">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading">
                                    <h2>Our Team Members</h2>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="team-member">
                                    <div class="thumb-container">
                                        <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/128525112_2765587383681284_7451686751096062474_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=yFBClL_L8jwAX9zCaBI&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-gZlXUU4abdLutGjShltmPtlScMY3a7AfoVBnlXF9W1Q&oe=623824F1" alt="" />
                                        <div class="hover-effect">
                                            <div class="hover-content">
                                                <ul class="social-icons">
                                                    <li><a href="https://www.facebook.com/bachnx.2013"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="down-content">
                                        <h4>Nguyen Xuan Bach</h4>
                                        <span>CO-Founder</span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="team-member">
                                    <div class="thumb-container">
                                        <img src="https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg" alt="" />
                                        <div class="hover-effect">
                                            <div class="hover-content">
                                                <ul class="social-icons">
                                                    <li><a href="https://www.facebook.com/SEETNTP"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="down-content">
                                        <h4>Tran Nhat Tan</h4>
                                        <span>Product Expert</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="team-member">
                                    <div class="thumb-container">
                                        <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/273026447_3182774665330374_5925251936039462239_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s851x315&_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_ohc=eYUyXOoBwQQAX9O2m62&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8UipGCvmkiCEh5RfM6LBexgvL0ARH-ix6LbQyH5cbtcg&oe=62175105" alt="" />
                                        <div class="hover-effect">
                                            <div class="hover-content">
                                                <ul class="social-icons">
                                                    <li><a href="https://www.facebook.com/congliem.tran.714/"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="down-content">
                                        <h4>Tran Cong Liem</h4>
                                        <span>Chief Marketing</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-md-4">
                                <div class="team-member">
                                    <div class="thumb-container">
                                        <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/43880290_2224611434452939_2158226387704479744_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=BYh0Ol_p2KsAX-1S-nE&tn=wx3Gl-YEyjDoKc_8&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8P7AoErosbjYskJ3zRAQgdXTTYcULP7qqAM1cB16o9UQ&oe=6238E52F" alt="" />
                                        <div class="hover-effect">
                                            <div class="hover-content">
                                                <ul class="social-icons">
                                                    <li><a href="https://www.facebook.com/Thuanlh1605"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="down-content">
                                        <h4>Le Hoang Thuan</h4>
                                        <span>Product Specialist</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            <div class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="service-item">
                                <div class="icon">
                                    <i class="fa fa-gear"></i>
                                </div>
                                <div class="down-content">
                                    <h4>Product Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" class="filled-button">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-item">
                                <div class="icon">
                                    <i class="fa fa-gear"></i>
                                </div>
                                <div class="down-content">
                                    <h4>Customer Relations</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" class="filled-button">Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-item">
                                <div class="icon">
                                    <i class="fa fa-gear"></i>
                                </div>
                                <div class="down-content">
                                    <h4>Global Collection</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" class="filled-button">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        navType: state.nav
    }
}
const mapDispatchToPros = dispatch => {
    return {
        setNavType: (payload) => dispatch({
            type: 'setNav',
            payload: payload
        })
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(AboutUs)