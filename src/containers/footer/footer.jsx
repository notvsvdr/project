import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='socials'>
                    <i>facebook</i>
                    <i>twitter</i>
                    <i>instagram</i>
                    <i>linkedin</i>
                </div>
                <div>&copy; all rights reserved.</div>
            </div >
        );
    }
}

export default Footer;