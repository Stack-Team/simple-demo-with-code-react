import React from 'react';
import './First.css';



function First(props) {
    return (
        <div className="center">
            <div className="property-card">
                <a href="">
                    <div className="property-image">
                        <div className="property-image-title">
                            <h5>{ props.res.name }</h5>
                        </div>
                    </div>
                </a>
                <div className="property-description">
                    <h5> { props.res.designation } </h5>
                    <p className="description"> { props.res.description } </p>
                </div>
            </div>
        </div>
    );
}

export default First;