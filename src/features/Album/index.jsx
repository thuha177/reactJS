import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList';
import './style.scss';


AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'REMIX Là Phải HIT',
            thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/9/b/9/39b95d19332ff9e2e81b75a6e2f70552.jpg'
        },
        {
            id: 2,
            name: 'Ballad Việt Remix',
            thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/f/b/e/8fbe8b4b8bb96d2901bd3f87ce3b8d18.jpg'
        },
        {
            id: 3,
            name: 'TOP Hits Remix',
            thumbnailURL: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/1/9/e/619e094bd02544ee77898da6d52e90f2.jpg'
        },
    ]
    return (
        <div>
            <h2 className='title'>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;