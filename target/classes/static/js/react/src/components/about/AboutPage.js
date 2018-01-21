import React from 'react';
import '../../styles/styles.css';
import avatar from '../../images/avatar.jpg';

export default class App extends React.Component {
    render() {
        return (
            <div className="content">
                {/* The Grid */}
                <div className="row-padding">
                    {/* Left Column */}
                    <div className="third">
                        <div className="white text-grey card-4">
                            <div className="display-container">
                                <img src={avatar} style={{width: '100%'}} />
                                <div className="display-bottomleft container text-black">
                                    <h2>Khanh Duy</h2>
                                </div>
                            </div>
                            <div className="container">
                                <p><i className="fa fa-briefcase fa-fw margin-right large text-teal" />Software developer</p>
                                <p><i className="fa fa-home fa-fw margin-right large text-teal" />HCM, VN</p>
                                <p><i className="fa fa-envelope fa-fw margin-right large text-teal" />ntkduy123@gmail.com</p>
                                <p><i className="fa fa-phone fa-fw margin-right large text-teal" />01216861997</p>
                                <hr />
                                <p className="large"><b><i className="fa fa-asterisk fa-fw margin-right text-teal" />Skills</b></p>
                                <p>Java</p>
                                <div className="light-grey round-xlarge small">
                                    <div className="container center round-xlarge teal" style={{width: '90%'}}>90%</div>
                                </div>
                                <p>Javascript</p>
                                <div className="light-grey round-xlarge small">
                                    <div className="container center round-xlarge teal" style={{width: '80%'}}>
                                        <div className="center text-white">80%</div>
                                    </div>
                                </div>
                                <p>Python</p>
                                <div className="light-grey round-xlarge small">
                                    <div className="container center round-xlarge teal" style={{width: '75%'}}>75%</div>
                                </div>
                                <p>C#</p>
                                <div className="light-grey round-xlarge small">
                                    <div className="container center round-xlarge teal" style={{width: '50%'}}>50%</div>
                                </div>
                                <br />
                                <p className="large text-theme"><b><i className="fa fa-globe fa-fw margin-right text-teal" />Languages</b></p>
                                <p>English</p>
                                <div className="light-grey round-xlarge">
                                    <div className="round-xlarge teal" style={{height: 24, width: '100%'}} />
                                </div>
                                <br />
                            </div>
                        </div><br />
                        {/* End Left Column */}
                    </div>
                    {/* Right Column */}
                    <div className="twothird">
                        <div className="container card white margin-bottom">
                            <h2 className="text-grey padding-16"><i className="fa fa-suitcase fa-fw margin-right xxlarge text-teal" />Work Experience</h2>
                            <div className="container">
                                <h5 className="opacity"><b>Python Developer / Vietnam Esport</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />Jun 2016 - Aug 2016</h6>
                                <p>Using django rest framework to create a bookstore website and small application interacts to 123Phim.</p>
                                <hr />
                            </div>
                            <div className="container">
                                <h5 className="opacity"><b>Java Developer / Homeguru.vn</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />Dec 2016 - Apr 2017</h6>
                                <p>A leading real estate and rental marketplace in Vietnam, in which newest properties and projects information is daily updated</p>
                                <hr />
                            </div>
                            <div className="container">
                                <h5 className="opacity"><b>Software developer / Jelldesk</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />May 2017 - Jul 2017</h6>
                                <p>An application that seamlessly integrate JIRA Service Desk functionality into any native environment. Reaching out and offer support, provide information, or start a conversation with live chat in their Slack team. </p><br />
                            </div>
                            <div className="container">
                                <h5 className="opacity"><b>Software developer / VNG</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />Nov 2017 - <span className="tag teal round">Current</span></h6>
                                <p>Being a slave in a stupid chinese company. </p><br />
                            </div>
                        </div>
                        <div className="container card white">
                            <h2 className="text-grey padding-16"><i className="fa fa-certificate fa-fw margin-right xxlarge text-teal" />Education</h2>
                            <div className="container">
                                <h5 className="opacity"><b>Bach Khoa University</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />2013-2017</h6>
                                <p>Bachelor Degree in computer science</p>
                                <hr />
                            </div>
                            <div className="container">
                                <h5 className="opacity"><b>Pho Thong Nang Khieu high school</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />2010 - 2013</h6>
                                <p>High school degree</p>
                                <hr />
                            </div>
                            <div className="container">
                                <h5 className="opacity"><b>Nguyen Van Phu secondary school</b></h5>
                                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right" />2006 - 2010</h6>
                                <p>Secondary school Degree</p><br />
                            </div>
                        </div>
                        {/* End Right Column */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Page Container */}
            </div>
        );
    }
}