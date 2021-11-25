import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import UserNotFound from '../components/pages/user/userNotFound';
import SomeError from '../components/someError';
import UserPageContent from '../components/pages/user/index';
import Loading from '../components/loading';
import UserService from '../services/user';

const User = () => {
    const userState = useSelector(({user}) => user);
    const {getUserById} = UserService();

    const { id } = useParams();

    useEffect(() => {
        getUserById(id);
    }, []);
    const outContent = () => {
        if(userState.userLoaded){
            if(userState.responseError){
                if(userState.userNotFound){
                    return <UserNotFound />
                }
                return <SomeError />
            }
            return <UserPageContent />
        }
        return <Loading />
    }
    return outContent();
}

export default User;