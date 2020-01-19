import React from 'react'

import '../stylesheets/myStyles.css'

// drop down button
class SortBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = (event) => {
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = (event) => {
        this.setState({ showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div>
                <button onClick = {this.showMenu}>
                    Sort
                </button>

                {
                    this.state.showMenu 
                        ? (
                            <div className = "sortBy">
                                <button>Starred</button>
                                <button>Due Date</button>
                                <button>Completed</button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default SortBar