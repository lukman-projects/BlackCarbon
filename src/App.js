import {Switch, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Home from './pages/index';
import User from './pages/user';
import EditProfile from './pages/edit-profile';

import { setMessage } from './redux/reducers/form';


const App = () => {
    const history = useHistory();
    const state = useSelector((allState) => allState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.auth.isAuth) {
            history.push('/edit-profile');
        }
    }, [state.auth.isAuth]);
    useEffect(() => {
        dispatch(setMessage(""));
    }, [state.form.name]);

    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/user/:id" exact>
                <User/>
            </Route>
            <Route path="/edit-profile" exact>
                <EditProfile/>
            </Route>
            <Route path='*' component={<div>404 NOT FOUND!</div>}/>
        </Switch>
    )
}

export default App;