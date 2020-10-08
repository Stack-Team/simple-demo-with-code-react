import React from 'react';
import './Pages.css';



function User(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 justify-content-center">
        <div className="center">
            <div className="property-card">
                <a href="">
                    <div className="property-image">
                        <div className="property-image-title">
                        </div>
                    </div>
                </a>
                <div className="property-description">
                    <h5> { props.name } </h5>
                    <span> { props.email } </span>
                    <p> { props.street } </p>
                    <p> { props.city } </p>
                    <p className="description"> { props.address } </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default User;