import React from 'react';
import './RSVP.css'
const rsvp = (props) => {
// You would need to add validation to this form. I have taken this out due to complexity of the form I used.
    return (
        <section className="rsvp" id="rsvp">
		<div className="container">
			<div className="row">
				<div className="col-xl-10 offset-xl-1">
					<div className="rsvp-box u-bg-white">
							<div className="text-center">
								<h1 className="rsvp-box__title u-font-script">Be our guest!</h1>
								<p className="rsvp-box__subtitle">Please confirm your arrival by <mark className="font-weight-bold">July 14, 2021</mark></p>
							</div>
							{!props.hasRsvpd && <form className="rsvp-form" id="rsvp-form">
								<div className="d-md-flex justify-content-between">
									
                                    <div className="rsvp-form__left">							

                                        <p>Guest Name: {props.guestName}  </p> 
                                        <div className="rsvp-form-field">
											<input type="email" name="email" placeholder="Your E-mail" required=""/>
											<p className="rsvp-form-field__error">E-mail is incorrect.</p>
										</div>
										<div className="rsvp-form-field">
											<input type="email" name="email" placeholder="Your Dietary Requirments" required=""/>
										</div>
										<div className="rsvp-form-field">
											<select name="attending" required="">
												<option value="" disabled="" defaultValue="">You are attending?</option>
												<option value="all">No</option>
												<option value="ceremony">Yes</option>
											</select>
										</div>
									</div>
									
                                    <div className="rsvp-form__right">
										<div className="rsvp-form-field h-100">
											<textarea rows="4" placeholder="Your Message" className="h-100" name="message"></textarea>
										</div>
									</div>
								</div>
								<button onClick={props.submitRsvp} type="button" className="rsvp-form-submit">
									<span>Send</span>
                                </button>
							</form>
							}
							
							{props.hasRsvpd && 
							<div className="rsvp-confirmation text-center">
							<h4>Thank you for RSVP'ing</h4>
							<p>If you have any questions please email weddingemail@Gmail.com</p>
							</div>
							}
						</div>
					</div>
			</div>
		</div>
	</section>
);
}
export default rsvp;