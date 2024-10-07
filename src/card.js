import React, { Component } from 'react';

class Card extends Component
{
    render()
    {
       return (
        <React.Fragment>
       <section className="card-container">
        <header>
            <span initials="JS"></span>
            <h2>Tanu</h2>
        </header>
        <main>
            <ul>
                <li><span>Age</span>Nov 13, 2024</li>
                <li><span>Address</span>Kolkata</li>
                <li><span>mail</span>tanu@gmail.com</li>
            </ul>
        </main>
       </section>
       </React.Fragment>
       )
    }
}
export default Card;