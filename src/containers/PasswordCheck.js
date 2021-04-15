import React, { Component } from 'react';

class PasswordCheck extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            passwordValue: ''
          } 
    }

    updatePasswordValue = (e) => {
        this.setState({
            passwordValue : e.target.value,
        })
    }

    handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            this.props.performSecurityCheck(this.state.passwordValue);
        }
    };

    render() {
        return(
            <div class="text-center pt-5 pb-5 u-bg-light-grey">
                {this.props.showPasswordErrorMessage && <p className="alert text-center alert-danger">  Oops that's not correct - please try again</p>}
                <h1> Please enter the site password: </h1>
                <input onKeyUp={this.handleKeypress} onChange={this.updatePasswordValue} value={this.state.passwordValue}/>
                <button type="button" ref={node => (this.btn = node)} onClick={() => {this.props.performSecurityCheck(this.state.passwordValue)}} > Go!</button>
            </div>
            )
    }
}

export default PasswordCheck;
