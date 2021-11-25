

import { useDispatch, useSelector } from 'react-redux';


import {formDataCollect} from '../utils/form-data';
import {setProfile} from '../redux/reducers/auth';
import api from '../http/api';


const contentType = 'multipart/form-data';

const nonFunction = () => null;
const ChangeProfileService = () => {
    const dispatch = useDispatch();
    const authState = useSelector(({auth}) => auth);
    const changeProfile = async ({info, beforeFetch=nonFunction, successHandle=nonFunction, errorHandle=nonFunction, afterFetch=nonFunction}) => {
        const { id, key } = authState;
        const body = formDataCollect({...info, key});
        beforeFetch();
        const result = {
            errors: {}
        }
        try{
            await api({
                url: `/users/${id}/`,
                method: 'patch',
                headers: { "Content-Type": contentType},
                data: body,
            });
            const { data } = await api.get(`/users/${id}/`);
            successHandle();
            dispatch(setProfile(data));
        }catch(e){
            if(e.response){
                if(e.response.status === 400 && e.response.data){
                    result.errors = e.response.data;
                }
            }
            errorHandle(e);
        }finally{
            afterFetch();
        }
        return result.errors;
    }

    return {
        changeProfile
    }
}

export default ChangeProfileService;