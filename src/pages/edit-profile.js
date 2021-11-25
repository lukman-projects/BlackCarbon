import {useSelector} from "react-redux";
import {useEffect} from "react";

import EditProfileContent from '../components/pages/edit-profile/index';
import Loading from '../components/loading';
import UserService from "../services/user";
import SomeError from "../components/someError";
import AuthError from "../components/pages/authError";


const EditProfile = () => {
    const state = useSelector(({auth}) => auth);
    const {getProfile} = UserService();

    useEffect(() => {
        if (state.isAuth) {
            getProfile();
        }
    }, [state.isAuth]);

    const outContent = () => {
        if (state.isAuth) {
            if (state.profileLoaded) {
                if (state.profileResponseError) {
                    return <SomeError />
                }
                return <EditProfileContent />
            }
            return <Loading />
        } else {
            return <AuthError />
        }
    }
    return outContent();
}

export default EditProfile;