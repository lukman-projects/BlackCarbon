import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ProfileBackground from '../profileBackground';
import ProfileInfo from '../profileInfo';
import UserDescription from '../profileDescription';
import InfoGroup from './infoGroup';
import SocialsOut from './socialsOut';

import CheckKeyModal from '../../modals/checkKey';
import { setName, setActive } from '../../../redux/reducers/modal';
import modalNames from '../../../constants/modalNames';
import {baseURL} from "../../../http/api";


const UserPageContent = () => {
    const state = useSelector(({user}) => user);
    const dispatch = useDispatch();

    const getCard = () => {
        window.location.href = `${baseURL}/users/download/${state.user.unique_id}/`
    }

    const openModal = () => {
        dispatch(setName(modalNames.CHECKKEY));
        dispatch(setActive(true));
    }
    return (
        <div className="profile w-full">
            <CheckKeyModal />
            <ProfileBackground bg={state.user.user_bg} />
            <div className="wrapper">
                <div className="profile-holder">
                    <ProfileInfo profile={state.user} />
                    <div className="profile__form w-full grid grid-col-1">
                        <UserDescription description={state.user.description} />
                        <SocialsOut />
                        <InfoGroup />

                        <div className="profile__bottom flex justify-center items-center grid grid-col-1">
                            <span onClick={openModal} className=" text-1xl rounded cursor-pointer profile__bottom-text bg-indigo-600 p-2 px-16 flex justify-center">
                                Login
                            </span>
                            <span className=" text-1xl rounded cursor-pointer profile__bottom-text bg-indigo-600 p-2 px-16 flex justify-center">
                            <a id="save_contact" onClick={getCard}>
                                Save Contact
                            </a>
                            </span>
						</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserPageContent;