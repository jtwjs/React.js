import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log(this.props.count);
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.count}</span>

            </nav>
        );
    }
}

export default Navbar;