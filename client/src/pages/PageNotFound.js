import React from 'react';
import img from '../images/404.jpg';

function PageNotFound() {
    return (
        <div class="container">
            <div class="position-absolute top-10 start-50 translate-middle-x">
            <img src={img} alt="404 Error page"/>
            <h2 class="text-center">Oops, this page cannot be found</h2>
            <h4 class="text-center">Please use the menu to navigate</h4>
            </div>
        </div>
    )
}

export default PageNotFound;
