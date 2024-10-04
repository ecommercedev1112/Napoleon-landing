import { Link } from 'react-router-dom';

const UserAgreement = () => {
    return (
        <>
            <div className='ms-4'>
                <h1>Terms of Service</h1>
                <p><strong>Effective Date:</strong> [Insert Date]</p>

                <p>Welcome to [Your Website Name] ("we", "us", "our"). By accessing or using our website located at <a href="[yourwebsite.com]">[yourwebsite.com]</a> (the "Site"), you agree to comply with and be bound by the following terms and conditions (the "Terms"). Please read them carefully.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using the Site, you agree to be bound by these Terms and our <a href="[link-to-privacy-policy]">Privacy Policy</a>, which is incorporated into these Terms by reference. If you do not agree to these Terms, please do not use the Site.</p>

                <h2>2. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.</p>

                <h2>3. Use of the Site</h2>
                <ul>
                    <li><strong>Eligibility:</strong> You must be at least [age] years old to use the Site. By using the Site, you represent and warrant that you meet this requirement.</li>
                    <li><strong>Account Responsibility:</strong> If you create an account on the Site, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</li>
                    <li><strong>Prohibited Activities:</strong> You agree not to engage in any activities that may:
                        <ul>
                            <li>Violate any applicable laws or regulations.</li>
                            <li>Harm or exploit minors.</li>
                            <li>Interfere with or disrupt the Site or servers.</li>
                            <li>Attempt to gain unauthorized access to any part of the Site or related systems.</li>
                        </ul>
                    </li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <ul>
                    <li><strong>Ownership:</strong> All content and materials on the Site, including text, graphics, logos, images, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.</li>
                    <li><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes, subject to these Terms.</li>
                </ul>

                <h2>5. User Content</h2>
                <ul>
                    <li><strong>Responsibility:</strong> You are solely responsible for any content you post on the Site. By posting content, you grant us a worldwide, royalty-free, perpetual, and non-exclusive license to use, reproduce, modify, and distribute such content.</li>
                    <li><strong>Content Guidelines:</strong> You agree not to post content that is unlawful, defamatory, obscene, or infringes on the rights of others.</li>
                </ul>

                <h2>6. Disclaimer of Warranties</h2>
                <p>The Site is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted or error-free, or that defects will be corrected.</p>

                <h2>7. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site.</p>

                <h2>8. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Site or any violation of these Terms.</p>

                <h2>9. Termination</h2>
                <p>We may terminate or suspend your access to the Site at any time, with or without cause, and with or without notice. Upon termination, your right to use the Site will immediately cease.</p>

                <h2>10. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.</p>

                <h2>11. Dispute Resolution</h2>
                <p>Any disputes arising out of or relating to these Terms or your use of the Site shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization] and conducted in [Location].</p>

                <h2>12. Contact Information</h2>
                <p>If you have any questions about these Terms or the Site, please contact us at:</p>
                <p><strong>[Your Company Name]</strong><br />
                    [Your Address]<br />
                    [Your Email Address]<br />
                    [Your Phone Number]</p>
            </div>
        </>
    )
}
export default UserAgreement