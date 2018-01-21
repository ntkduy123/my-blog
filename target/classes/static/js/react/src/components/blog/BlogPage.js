import React from 'react';
import '../../styles/styles.css';
import SlidingWindow from '../../images/blogs/sliding-window.png';
import Ember from '../../images/ember.jpg';
import Anonymous from '../../images/anonymous.jpg';
import avatar from '../../images/default-avatar.png';

export default class BlogPage extends React.Component {
    render() {
        return (
            <div className="content">
               <header className="container center padding-32">
                   <h1><b>MY BLOG</b></h1>
                   <p>Welcome to the blog of <span className="tag">unknown</span></p>
               </header>
               {/* Grid */}
               <div className="row">
                   {/* Blog entries */}
                   <div className="col l8 s12">
                       {/* Blog entry */}
                       <div className="card-4 margin white">
                           <img src={SlidingWindow} style={{width: '100%'}} />
                           <div className="container teal">
                               <h3><b>SLIDING WINDOW</b></h3>
                               <h5>Window Sliding Technique <span className="opacity">Nov 23, 2017</span></h5>
                           </div>
                           <div className="container">
                               <p>Đây là một kỹ thuật được sử dụng để giải quyết các bài toán có các vòng lặp lồng nhau (O(n^2), O(n^3),...) bằng cách chuyển chúng thành một vòng lặp duy nhất ( O(n) )</p>
                               <div className="row">
                                   <div className="col m8 s12">
                                       <p><button className="button padding-large white border"><b>READ MORE »</b></button></p>
                                   </div>
                                   <div className="col m4 hide-small">
                                       <p><span className="padding-large right"><b>Comments &nbsp;</b> <span className="tag">0</span></span></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <hr />
                       {/* Blog entry */}
                       <div className="card-4 margin white">
                           <img src={Ember} alt="Norway" style={{width: '100%'}} />
                           <div className="container teal">
                               <h3><b>BLOG ENTRY</b></h3>
                               <h5>Title description, <span className="opacity">April 2, 2014</span></h5>
                           </div>
                           <div className="container">
                               <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                                   tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                               <div className="row">
                                   <div className="col m8 s12">
                                       <p><button className="button padding-large white border"><b>READ MORE »</b></button></p>
                                   </div>
                                   <div className="col m4 hide-small">
                                       <p><span className="padding-large right"><b>Comments &nbsp;</b> <span className="badge">2</span></span></p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       {/* END BLOG ENTRIES */}
                   </div>
                   {/* Introduction menu */}
                   <div className="col l4">
                       {/* About Card */}
                       <div className="card margin margin-top">
                           <img src={avatar} style={{width: '100%'}} />
                           <div className="container teal">
                               <h4><b>My Name</b></h4>
                               <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                           </div>
                       </div><hr />
                       {/* Posts */}
                       <div className="card margin">
                           <div className="container padding teal">
                               <h4>Popular Posts</h4>
                           </div>
                           <ul className="ul hoverable white">
                               <li className="padding-16">
                                   <img src="/w3images/workshop.jpg" alt="Image" className="left margin-right" style={{width: 50}} />
                                   <span className="large">Lorem</span><br />
                                   <span>Sed mattis nunc</span>
                               </li>
                               <li className="padding-16">
                                   <img src="/w3images/gondol.jpg" alt="Image" className="left margin-right" style={{width: 50}} />
                                   <span className="large">Ipsum</span><br />
                                   <span>Praes tinci sed</span>
                               </li>
                               <li className="padding-16">
                                   <img src="/w3images/skies.jpg" alt="Image" className="left margin-right" style={{width: 50}} />
                                   <span className="large">Dorum</span><br />
                                   <span>Ultricies congue</span>
                               </li>
                               <li className="padding-16 hide-medium hide-small">
                                   <img src="/w3images/rock.jpg" alt="Image" className="left margin-right" style={{width: 50}} />
                                   <span className="large">Mingsum</span><br />
                                   <span>Lorem ipsum dipsum</span>
                               </li>
                           </ul>
                       </div>
                       <hr />
                       {/* Labels / tags */}
                       <div className="card margin">
                           <div className="container padding teal">
                               <h4>Tags</h4>
                           </div>
                           <div className="container white">
                               <p><span className="tag teal margin-bottom">Travel</span> <span className="tag light-grey small margin-bottom">New York</span> <span className="tag light-grey small margin-bottom">London</span>
                                   <span className="tag light-grey small margin-bottom">IKEA</span> <span className="tag light-grey small margin-bottom">NORWAY</span> <span className="tag light-grey small margin-bottom">DIY</span>
                                   <span className="tag light-grey small margin-bottom">Ideas</span> <span className="tag light-grey small margin-bottom">Baby</span> <span className="tag light-grey small margin-bottom">Family</span>
                                   <span className="tag light-grey small margin-bottom">News</span> <span className="tag light-grey small margin-bottom">Clothing</span> <span className="tag light-grey small margin-bottom">Shopping</span>
                                   <span className="tag light-grey small margin-bottom">Sports</span> <span className="tag light-grey small margin-bottom">Games</span>
                               </p>
                           </div>
                       </div>
                       {/* END Introduction Menu */}
                   </div>
                   {/* END GRID */}
               </div><br />
           </div>
        );
    }
}