import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return (isAuthenticated ?
                    children :
                    <Redirect to={
                        {
                            pathname: "/auth",
                            state: { from: location }
                        }
                    } />
                );
            }}
        />
    );
};

export default PrivateRoute;