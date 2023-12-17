import React from 'react';
import { signInWithGoogle } from '../../firebase';

const Login = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    };

    const cardStyle = {
        backgroundColor: '#3498db', // Trendy blue color
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#ffffff', // White text on the trendy blue background
    };

    const subtitleStyle = {
        fontSize: '14px',
        color: '#ffffff',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#2c3e50', // Darker color for the button
        color: '#ffffff',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#1a252f', // Darker color on hover
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>Welcome to My App</h1>
                <p style={subtitleStyle}>Please sign in to continue</p>
                <button
                    style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
                    onClick={signInWithGoogle}
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
