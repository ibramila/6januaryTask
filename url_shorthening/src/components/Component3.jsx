import React from 'react'
import "./../assets/scss/_component3.scss"

function Component3() {
    return (
        <section className='sect3'>
            <div className='section3'>
                <div className='heading'>
                    <h2>Advanced Statistics </h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='cards'>
                    {/* <div className='line'></div> */}
                    <div className='card card1'>
                        <div className='round'></div>
                        <span>Brand Recognition</span>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p>
                    </div>
                    <div className='card card2'>
                        <span>Detailed Records</span>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>
                    </div>
                    <div className='card card3'>
                        <span> Fully Customizable </span>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Component3