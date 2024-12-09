const Contact = () => {
    return (
        <div>
            <div class="contact-us-form">
                <h2>Contact With Us</h2>
                <p>If you have any questions please fell free to contact with us.</p>
                <form class="form" method="post" action="mail/mail.php">
                    <div class="row">
                        <div className="align-all">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="name" placeholder="Name" required="" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Email" required="" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="phone" placeholder="Phone" required="" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="subject" placeholder="Subject" required="" />
                                </div>
                            </div></div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <textarea name="message" placeholder="Your Message" required=""></textarea>
                            </div>
                        </div>
                        <div className="center"><button type="button" class="btn btn-outline-light">Submit</button></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;