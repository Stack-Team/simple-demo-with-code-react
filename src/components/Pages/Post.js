import React from 'react';
import './Pages.css';



function Post(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center">
            <div className="center">
                <div className="property-card">
                    <a href="">
                        <div className="property-image-title"><h6> { props.title } </h6></div>
                    </a>
                    <div className="property-description">
                        <p className="description"> { props.body } </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;