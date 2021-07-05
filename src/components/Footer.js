import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="troisTitres">

                    <div className="services">
                        <h4>Services</h4>
                        <p>Web Design</p>
                        <p>Development</p>
                        <p>Hosting</p>
                    </div>

                    <div className="services">
                        <h4>About</h4>
                        <p>Company</p>
                        <p>Team</p>
                        <p>Careers</p>
                    </div>

                    <div className="services">
                        <h4>Company Name</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>



                        </p>

                    </div>

                </div>

                <div className="align-logos">

                    <div className="logos">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-snapchat-ghost"></i>
                        <i class="fab fa-instagram"></i>

                    </div>

                </div>

                <div className="align-logos">

                    <div>
                        <p className="corporation">J-NK Corporation © 2021</p>

                    </div>

                </div>





            </div>
        )
    }
}
