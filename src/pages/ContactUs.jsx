import React from 'react';

function ContactUs(props) {
    return (
        <div>
            <div className="contact__area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="contact__content text-center mb-140">
                                <h2>Contact Us</h2>
                                <p>For me, the most important part of improving at photography has been sharing it. Sign
                                    up for an Exposure account, or<br/> post regularly to Tumblr, or both. Tell people
                                    you’re trying to get better at photography. </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                                <div className="contactbox">
                                    <div className="contactbox__heading">
                                        <h5>Contact us</h5>
                                        <h2>Please contact us quickly if <br/>you need help.</h2>
                                    </div>
                                    <div className="contactbox__info pt-20">
                                        <h5>NewYork Add:</h5>
                                        <ul>
                                            <li>S9 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
                                            <li>Open: 9:30 am – 9:00 pm</li>
                                        </ul>
                                    </div>
                                    <div className="contactbox__info pt-20">
                                        <h5>London</h5>
                                        <ul>
                                            <li>S9 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
                                            <li>Open: 9:30 am – 9:00 pm</li>
                                        </ul>
                                    </div>
                                    <div className="contactbox__info pt-20">
                                        <h5>Contacts Email:</h5>
                                        <ul>
                                            <li><a href="https://wphix.com/cdn-cgi/l/email-protection"
                                                   className="__cf_email__"
                                                   data-cfemail="1a5b7d756e7b5a7f687f746e727f777f34797577">[email&#160;protected]</a> Phone
                                            </li>
                                            <li><a href="tel:(+100)123456789">(+100) 123 456 789</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-md-6">
                                <div className="form">
                                    <h5>write to us</h5>
                                    <form action="#" method="POST">
                                        <div className="c-input-group">
                                            <label>Your Email (required)</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="c-input-group">
                                            <label>Subject</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="c-input-group">
                                            <label>Your Message</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                        <div className="submit-btn">
                                            <input type="submit" value="Send"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map__area">
                <div className="google-map contact-map">
                    <iframe className="w-100" height="800"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.6666616605644!2d29.313888811985464!3d40.923054171243145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb275c7856e323%3A0xd3523f32cfdfae4a!2sArchitecht%20Bili%C5%9Fim%20Sistemleri%20ve%20Pazarlama%20Ticaret%20A.%C5%9E.!5e0!3m2!1str!2str!4v1704038075284!5m2!1str!2str"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;