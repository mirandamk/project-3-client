//Wish: to be able to use this button as a component to reuse on different pages, so the user go back 1 step and not to the one page that we Link to here. Is that possible?
//As for now, I have recreated the buttons on every page, ex. the different assignment-pages.

import React from 'react';

function BackBtn() {
    return (
        <div>
            <button>
                <Link to="/"/>
            </button>
        </div>
    )
}

export default BackBtn;
