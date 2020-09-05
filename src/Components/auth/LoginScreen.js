import { useAuth0 } from '@auth0/auth0-react';

// Handles login
const LoginScreen = () => {
    const { loginWithRedirect } = useAuth0();

    loginWithRedirect();
};

export default LoginScreen;