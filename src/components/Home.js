import React, { Component } from 'react'; 
import Footer from './Footer';
import Title from './Title';

export default class Body extends Component {
    render() {
        return (
            <div className='container'> 
             <Title />
                <div className='article'>
                    <h1 className='articleHeader'> About me...  </h1>
                        <p> 
                           I am a fulltime student in Business Administration (BA), and also happens to pursue a career in Software Development as a side hustling.
                           My focus is mainly in MERN Stack development at the moment. I have a huge passion and drive in technology industry.
                        </p>
                    {/* <h1 className='articleHeader'> What i do... </h1> */}
                    <div className='secPara'>
                        <p>
                            I always strive to making sure that i meet the clients' needs right on time, and pride myself in services that I offer.
                            I am a well driven, disciplined person, and I am an autodidact. At all times, I often strive to satisfy my curiousity in all possible ways and to the best of my abilities.
                            I am always eager to learn, and loving to know why and how things work.
                        </p>
                    </div> 
                </div>
            </div> 
          
        )
    }
}