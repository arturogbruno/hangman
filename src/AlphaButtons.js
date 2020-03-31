import React, {Component} from "react";

class AlphaButtons extends Component {
    render() {
        return (
            <button
                value={this.props.value}
                onClick={this.props.handleGuess}
                disabled={this.props.handleDisabled}
            >
                {this.props.value}
            </button>
        )
    }
}

export default AlphaButtons;