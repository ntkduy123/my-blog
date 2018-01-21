import React, {PropTypes} from 'react';
import Header from './common/Header';
import '../styles/master_style.css';
import '../styles/skins/_all-skins.css';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;