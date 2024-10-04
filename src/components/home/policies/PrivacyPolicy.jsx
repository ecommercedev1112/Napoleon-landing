import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <>
            <div className='ms-4'>
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date:</strong> [Insert Date]</p>

                <p>Welcome to [Your Website Name] ("we", "us", "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website located at <a href="[yourwebsite.com]">[yourwebsite.com]</a> (the "Site").</p>

                <h2>1. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Information:</strong> We may collect personal information that you provide directly, such as your name, email address, phone number, and other contact details when you register for an account, subscribe to our newsletter, or contact us.</li>
                    <li><strong>Usage Data:</strong> We collect information about your interactions with the Site, including your IP address, browser type, pages visited, and the time and date of your visit.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on the Site. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our Site.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>To provide, maintain, and improve the Site.</li>
                    <li>To communicate with you, including sending updates, newsletters, and promotional materials.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                    <li>To analyze usage trends and gather demographic information.</li>
                    <li>To comply with legal obligations and protect our rights.</li>
                </ul>

                <h2>3. How We Share Your Information</h2>
                <ul>
                    <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.</li>
                    <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                    <li><strong>In Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
                </ul>

                <h2>4. Security</h2>
                <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

                <h2>5. Your Choices</h2>
                <ul>
                    <li><strong>Opt-Out:</strong> You may opt out of receiving promotional emails from us by following the instructions provided in those emails or by contacting us directly.</li>
                    <li><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of the Site.</li>
                    <li><strong>Access and Update:</strong> You may access, correct, or delete your personal information by contacting us.</li>
                </ul>

                <h2>6. Links to Other Sites</h2>
                <p>The Site may contain links to other websites that are not operated by us. We are not responsible for the privacy practices or the content of such third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                <h2>7. Children's Privacy</h2>
                <p>The Site is not intended for children under the age of [13/16] (or applicable age based on your jurisdiction). We do not knowingly collect personal information from children under this age. If we become aware that we have collected such information, we will take steps to delete it.</p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Privacy Policy.</p>

                <h2>9. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
                <p><strong>[Your Company Name]</strong><br />
                    [Your Address]<br />
                    [Your Email Address]<br />
                    [Your Phone Number]</p>
            </div>
        </>
    )
}
export default PrivacyPolicy