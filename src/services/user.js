import { useDispatch, useSelector } from "react-redux";


import {setUser, setUserLoaded, setResponseError, setUserNotFound} from '../redux/reducers/user';
import { setKey, setId, setAuth, setProfile, setProfileLoaded, setProfileResponseError } from "../redux/reducers/auth";
import { setLoading, setMessage } from "../redux/reducers/form";
import api from '../http/api';
import {formDataCollect} from '../utils/form-data';

const contentType = 'multipart/form-data';

const UserService = () => {
    const dispatch = useDispatch();
    const auth = useSelector(({auth}) => auth);

    const getUserById = async (id) => {
        const result = {
            notFound: false,
            hasError: false
        }
        dispatch(setUserLoaded(false));
        try {
            const { data } = await api.get(`/users/${id}/`);
            dispatch(setUser(data));
        } catch (e) {
            if(e.response){
                if(e.response.status === 404){
                    result.hasError = true;
                    result.notFound = true;
                }else {
                    result.hasError = true;
                }
            }else if(e.request){
                result.hasError = true;
            }else{
                result.hasError = true;
            }
        } finally {
            dispatch(setUserNotFound(result.notFound));
            dispatch(setResponseError(result.hasError));
            dispatch(setUserLoaded(true));
        }
    }
    const getProfile = async () => {
        const {id} = auth;

        dispatch(setProfileLoaded(false));
        try {
            const { data } = await api.get(`/users/${id}/`);
            dispatch(setProfile(data));
        } catch (e) {
            console.log(e);
            dispatch(setProfileResponseError(true));
        } finally {
            dispatch(setProfileLoaded(true));
        }
    }
    const checkKey = async ({key, id}) => {
        const result = {
            message: "",
            isAuth: false,
        }
        const body = formDataCollect({key});
        dispatch(setLoading(true));
        dispatch(setAuth(false));
        try {
            await api({
                url: `/users/${id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: body,
            });
            dispatch(setKey(key));
            dispatch(setId(id));
            result.isAuth = true;
            result.message = "";
        } catch (e) {
            if(!e.response.status === 406){
                result.message = "There is no such key.";
            }else{
                result.message = "Some kind of error has occurred";
            }
            result.isAuth = false;
        } finally {
            dispatch(setMessage(result.message));
            dispatch(setAuth(result.isAuth));
            dispatch(setLoading(false));
        }
    }

    return {
        getUserById,
        checkKey,
        getProfile
    }
}


export default UserService;