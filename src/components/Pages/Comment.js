import React from 'react';
import './Pages.css';



function Comment(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center">
            <div className="center">
                <div className="property-card">
                    <a href="">
                        <div className="property-image-title"><h6> { props.name } </h6></div>
                    </a>
                    <div className="property-description">
                        <p> { props.email } </p>
                        <p className="description"> { props.body } </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;