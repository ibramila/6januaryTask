import React from 'react'
import "./../assets/scss/_component2.scss"
function Component2() {

    
    return (
        <section className='sect2'>
            <div className='section2'>
                <form action="">
                    <input type="text" placeholder="Enter Name" required />
                    <input type="text" placeholder="Enter Description" required />
                    <button>Shorten it!</button>
                </form>
            </div>
        </section>
    )
}

export default Component2