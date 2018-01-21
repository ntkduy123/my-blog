import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <header className="main-header">
            {/* Logo */}
            <a href="index.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <b className="logo-mini">
                    <span className="light-logo"><img src="../images/logo-light.png" alt="logo"/></span>
                    <span className="dark-logo"><img src="../images/logo-dark.png" alt="logo"/></span>
                </b>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg">
            <img src="../images/logo-light-text.png" alt="logo" className="light-logo"/>
            <img src="../images/logo-dark-text.png" alt="logo" className="dark-logo"/>
          </span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="search-box">
                            <a className="nav-link hidden-sm-down" href="javascript:void(0)"><i
                                className="mdi mdi-magnify"/></a>
                            <form className="app-search" style={{display: 'none'}}>
                                <input type="text" className="form-control" placeholder="Search & enter"/> <a
                                className="srh-btn"><i className="ti-close"/></a>
                            </form>
                        </li>
                        {/* Messages: style can be found in dropdown.less*/}
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="mdi mdi-email"/>
                            </a>
                            <ul className="dropdown-menu scale-up">
                                <li className="header">You have 5 messages</li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu inner-content-div">
                                        <li>{/* start message */}
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user2-160x160.jpg" className="rounded-circle"
                                                         alt="User Image"/>
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Lorem Ipsum
                                                        <small><i className="fa fa-clock-o"/> 15 mins</small>
                                                    </h4>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end message */}
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user3-128x128.jpg" className="rounded-circle"
                                                         alt="User Image"/>
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Nullam tempor
                                                        <small><i className="fa fa-clock-o"/> 4 hours</small>
                                                    </h4>
                                                    <span>Curabitur facilisis erat quis metus congue viverra.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user4-128x128.jpg" className="rounded-circle"
                                                         alt="User Image"/>
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Proin venenatis
                                                        <small><i className="fa fa-clock-o"/> Today</small>
                                                    </h4>
                                                    <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user3-128x128.jpg" className="rounded-circle"
                                                         alt="User Image"/>
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Praesent suscipit
                                                        <small><i className="fa fa-clock-o"/> Yesterday</small>
                                                    </h4>
                                                    <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="../images/user4-128x128.jpg" className="rounded-circle"
                                                         alt="User Image"/>
                                                </div>
                                                <div className="mail-contnet">
                                                    <h4>
                                                        Donec tempor
                                                        <small><i className="fa fa-clock-o"/> 2 days</small>
                                                    </h4>
                                                    <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">See all e-Mails</a></li>
                            </ul>
                        </li>
                        {/* Notifications: style can be found in dropdown.less */}
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="mdi mdi-bell"/>
                            </a>
                            <ul className="dropdown-menu scale-up">
                                <li className="header">You have 7 notifications</li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu inner-content-div">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-aqua"/> Curabitur id eros quis nunc
                                                suscipit blandit.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-warning text-yellow"/> Duis malesuada justo eu
                                                sapien elementum, in semper diam posuere.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-red"/> Donec at nisi sit amet tortor
                                                commodo porttitor pretium a erat.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart text-green"/> In gravida mauris et
                                                nisi
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red"/> Praesent eu lacus in libero dictum
                                                fermentum.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red"/> Nunc fringilla lorem
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red"/> Nullam euismod dolor ut quam
                                                interdum, at scelerisque ipsum imperdiet.
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">View all</a></li>
                            </ul>
                        </li>
                        {/* Tasks: style can be found in dropdown.less */}
                        <li className="dropdown tasks-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="mdi mdi-message"/>
                            </a>
                            <ul className="dropdown-menu scale-up">
                                <li className="header">You have 6 tasks</li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu inner-content-div">
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Lorem ipsum dolor sit amet
                                                    <small className="pull-right">30%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-aqua"
                                                         style={{width: '30%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">30% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Vestibulum nec ligula
                                                    <small className="pull-right">20%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-danger"
                                                         style={{width: '20%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">20% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Donec id leo ut ipsum
                                                    <small className="pull-right">70%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-light-blue"
                                                         style={{width: '70%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">70% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Praesent vitae tellus
                                                    <small className="pull-right">40%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-yellow"
                                                         style={{width: '40%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">40% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Nam varius sapien
                                                    <small className="pull-right">80%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-red"
                                                         style={{width: '80%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">80% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>{/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Nunc fringilla
                                                    <small className="pull-right">90%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-primary"
                                                         style={{width: '90%'}} role="progressbar" aria-valuenow={20}
                                                         aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">90% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all tasks</a>
                                </li>
                            </ul>
                        </li>
                        {/* User Account: style can be found in dropdown.less */}
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="../images/user5-128x128.jpg" className="user-image rounded-circle"
                                     alt="User Image"/>
                            </a>
                            <ul className="dropdown-menu scale-up">
                                {/* User image */}
                                <li className="user-header">
                                    <img src="../images/user5-128x128.jpg" className="float-left rounded-circle"
                                         alt="User Image"/>
                                    <p>
                                        Juliya Brus
                                        <small className="mb-5">jb@gmail.com</small>
                                        <a href="#" className="btn btn-danger btn-sm btn-rounded">View Profile</a>
                                    </p>
                                </li>
                                {/* Menu Body */}
                                <li className="user-body">
                                    <div className="row no-gutters">
                                        <div className="col-12 text-left">
                                            <a href="#"><i className="ion ion-person"/> My Profile</a>
                                        </div>
                                        <div className="col-12 text-left">
                                            <a href="#"><i className="ion ion-email-unread"/> Inbox</a>
                                        </div>
                                        <div className="col-12 text-left">
                                            <a href="#"><i className="ion ion-settings"/> Setting</a>
                                        </div>
                                        <div role="separator" className="divider col-12"/>
                                        <div className="col-12 text-left">
                                            <a href="#"><i className="ti-settings"/> Account Setting</a>
                                        </div>
                                        <div role="separator" className="divider col-12"/>
                                        <div className="col-12 text-left">
                                            <a href="#"><i className="fa fa-power-off"/> Logout</a>
                                        </div>
                                    </div>
                                    {/* /.row */}
                                </li>
                            </ul>
                        </li>
                        {/* Control Sidebar Toggle Button */}
                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-cog fa-spin"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;