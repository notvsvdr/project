import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return (
            <div className='tile'>
                <img src={this.props.tileImgSrc} alt='tile-img' />
                <p>{this.props.tileText}</p>
            </div>
        );
    }
}

export default Tile;