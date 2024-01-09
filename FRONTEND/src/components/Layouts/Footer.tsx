import React from "react";

export default function Footer():React.JSX.Element{
    return (
        <>
            <footer>
                <div>
                    <div>
                        <p>Health <span>+</span></p>
                        <p>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
                        <p>Stay Update to our Newsletter</p>
                        <div>
                            <input type="text"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <p>Services</p>
                        <a href="">Emergency Care</a>
                        <a href="">Heart Diseases</a>
                        <a href="">Dental Care</a>
                        <a href="">Prescription</a>
                        <a href="">Insight for doctors</a>
                    </div>
                    <div>
                        <p>Legal</p>
                        <p>General Info</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Services</p>
                        <p>Consultations</p>
                        <p>How it Works</p>
                    </div>
                    <div>
                        <p>Talk To Us</p>
                        <p>Support@healthplus.com</p>
                        <p>appointment@healthplush.com</p>
                        <p>+9472 533 5646</p>
                        <p>+9472 533 5645</p>
                    </div>
                </div>
                <div>
                    <p>2013-2023 Health+.All rights reserved.</p>
                    <div></div>
                </div>

            </footer>
        </>
    );
}