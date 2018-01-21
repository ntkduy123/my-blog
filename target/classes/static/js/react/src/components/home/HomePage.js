import React from 'react';
import '../../styles/styles.css';
import mac from '../../images/mac.jpg';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="display-container grayscale-min" id="home">
                    <img className="bgimg-1" src={mac} />
                    <div className="display-left text-white" style={{padding: 48}}>
                        <span className="jumbo hide-small">Start something that matters</span><br />
                        <span className="xxlarge hide-large hide-medium">Start something that matters</span><br />
                        <span className="large">Stop wasting valuable time with projects that just isn't you.</span>
                        <p><a href="#about" className="button white padding-large large margin-top opacity hover-opacity-off">Learn more and start today</a></p>
                    </div>
                    <div className="display-bottomleft text-grey large" style={{padding: '24px 48px'}}>
                        <i className="fa fa-facebook-official hover-opacity" />
                        <i className="fa fa-instagram hover-opacity" />
                        <i className="fa fa-snapchat hover-opacity" />
                        <i className="fa fa-pinterest-p hover-opacity" />
                        <i className="fa fa-twitter hover-opacity" />
                        <i className="fa fa-linkedin hover-opacity" />
                    </div>
                </header>
            </div>
        );
    }
}