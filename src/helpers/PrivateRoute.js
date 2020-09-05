import { Route, Redirect } from "react-router-dom";
import SavedRecipesScreen from "../recipe/SavedRecipesScreen";

const isAuth = false;

const PrivateRoute = ({ children, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={({location}) => {
                return (isAuth ? 
                    children : 
                    <Redirect to={
                        { 
                            pathname: "/auth",
                            state: { from: location }
                        }
                    }/>
                );
            }}
        />
    );
}