import "./Footer.css";

export const Footer = () => {
	return (
		<footer>
			<div className="footer-section">
				<form
					action="https://codeyourfuture.us14.list-manage.com/subscribe/post?u=e1b6978d5b6510703a76a9a80&amp;id=a97f8e5cb9"
					method="post"
					id=""
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					noValidate
				>
					<span className="newsletter">Sign up to our newsletter</span>
					<input
						type="email"
						placeholder="email address"
						className="email-required"
					/>
				</form>
				<div className="footer-bottom">
					<p className="footer-paraghraph">
						© All rights reserved | Registered{" "}
						<a href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1174929&subid=0">
							UK
						</a>
						and{" "}
						<a href="https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC050753">
							Scottish
						</a>{" "}
						charity | <a href="feedback">Send website feedback</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
