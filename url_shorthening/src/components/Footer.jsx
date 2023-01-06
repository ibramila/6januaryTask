import React from 'react'
import "./../assets/scss/_footer.scss"
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs"

function Footer() {
    return (
        <>
            <footer>
                <div className='footer'>
                    <span>Shortly</span>
                    <div className="links">
                        <ul>
                            <h5>Features</h5>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                        <ul>
                            <h5>Resources</h5>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                        <ul>
                            <h5>Company</h5>
                            <li>About</li>
                            <li>Our team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                        <ul className='icons'>
                            <li><AiFillFacebook /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><BsPinterest /></li>
                            <li><BsInstagram /></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer