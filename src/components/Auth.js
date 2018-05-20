import React from 'react';
import firebase from '../firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const uiConfig = {
    signInSuccessUrl: '/home',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
};
const ui = new firebaseui.auth.AuthUI(firebase.auth());



class Auth extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ui.start('#firebaseui-container', uiConfig);
    }

    componentWillUnmount() {
        ui.reset();
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <div className="auth-page">
                <div id="firebaseui-container"></div>
            </div>
        );
    }
}

export default Auth;
