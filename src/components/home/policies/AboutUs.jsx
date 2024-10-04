import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className='ms-4'>
                <h1>About Us</h1>

                <section>
                    <h2>Our Mission</h2>
                    <p>At [Your Recruitment Company], our mission is to connect top talent with leading employers. We are committed to delivering exceptional recruitment services that drive the success of both candidates and companies. Our goal is to streamline the hiring process, ensuring a perfect match for every job opportunity.</p>
                </section>

                <section>
                    <h2>Our Services</h2>
                    <p>We offer a comprehensive range of recruitment services tailored to meet the needs of both job seekers and employers. Our services include:</p>
                    <ul>
                        <li><strong>Talent Acquisition:</strong> Identifying and attracting top talent for permanent, temporary, and contract roles across various industries.</li>
                        <li><strong>Executive Search:</strong> Providing specialized recruitment solutions for senior-level and executive positions.</li>
                        <li><strong>Recruitment Process Outsourcing (RPO):</strong> Managing all or part of the recruitment process on behalf of employers to improve efficiency and outcomes.</li>
                        <li><strong>Career Coaching:</strong> Assisting job seekers with resume writing, interview preparation, and career development strategies.</li>
                    </ul>
                </section>

                <section>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Expertise:</strong> Our team of experienced recruiters has in-depth knowledge of various industries and job markets.</li>
                        <li><strong>Personalized Service:</strong> We tailor our approach to meet the specific needs of each client and candidate, ensuring a perfect match.</li>
                        <li><strong>Proven Track Record:</strong> We have a history of successfully placing candidates in positions where they thrive and contribute to organizational success.</li>
                        <li><strong>Commitment to Excellence:</strong> We are dedicated to providing the highest level of service and support throughout the recruitment process.</li>
                    </ul>
                </section>

                <section>
                    <h2>Meet the Team</h2>
                    <div class="team-member">
                        <img src="[team-member-photo-url]" alt="[Team Member Name]" width="100" />
                        <div>
                            <h3>[Team Member Name]</h3>
                            <p><strong>Position:</strong> [Position]</p>
                            <p>[Brief bio or description of the team member’s role and expertise in recruitment.]</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Our History</h2>
                    <p>Founded in [Year], [Your Recruitment Company] has grown from a small startup to a leading recruitment firm. Our journey is marked by our dedication to excellence and our ability to adapt to the evolving job market. We are proud of our achievements and look forward to continuing our success in connecting talent with opportunity.</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or would like to learn more about our services, please get in touch with us:</p>
                    <p><strong>Email:</strong> <a href="mailto:[your-email@example.com]">[your-email@example.com]</a></p>
                    <p><strong>Phone:</strong> [Your Phone Number]</p>
                    <p><strong>Address:</strong> [Your Address]</p>
                    <p><strong>Follow us on social media:</strong></p>
                    <ul>
                        <li><a href="[facebook-url]" target="_blank">Facebook</a></li>
                        <li><a href="[twitter-url]" target="_blank">Twitter</a></li>
                        <li><a href="[linkedin-url]" target="_blank">LinkedIn</a></li>
                    </ul>
                </section>
            </div>
        </>
    )
}
export default AboutUs