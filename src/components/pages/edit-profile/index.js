import {useSelector} from 'react-redux';

import ProfileBackground from '../profileBackground';
import ProfileInfo from '../profileInfo';
import UserDescription from '../profileDescription';
import EditDescription from '../../modals/editDescription';
import EditUserBg from '../../modals/editUserBg';
import EditUserInfo from '../../modals/editUserInfo';
import EditAvatar from '../../modals/editAvatar';
import Socials from '../../modals/socials';
import Form from './form';
import EditSocial from '../../modals/editSocial';


import modalNames from '../../../constants/modalNames';
import ModalService from '../../../services/modal';


const EditProfileContent = () => {
    const profile = useSelector(({auth}) => auth.profile);

    const {openModal} = ModalService();

    return (
        <div className="profile w-full">
            <div className="flex justify-end absolute right-0 top-0 z-3">
                <button className="text-white bg-red-900 p-2  border-4 border-indigo-600 rounded"
                        onClick={() => openModal(modalNames.EDITUSERBG)}>
                    <i className="fas fa-plus-circle"/>
                    Edit
                </button>
            </div>
            <ProfileBackground bg={profile.user_bg}/>
            <EditDescription/>
            <EditAvatar/>
            <EditUserBg/>
            <EditUserInfo/>
            <Socials/>
            <EditSocial/>
            <div className="wrapper">
                <button className="text-white p-2 -mt-20 left-72 absolute z-3 bg-red-900 rounded "
                        onClick={() => openModal(modalNames.EDITUSERAVATAR)}>
                    <i className="fas fa-plus-circle"/> Edit
                </button>
                <div className="profile-holder">
                    <div className="rounded  w-full">
                        <ProfileInfo profile={profile}/>

                        <div className="flex justify-end items-center">
                            <button className="text-white  p-2 bg-red-900 rounded"
                                    onClick={() => openModal(modalNames.EDITIMPORTANTINFO)}>
                                <i className="fas fa-plus-circle"/> Edit
                            </button>
                        </div>

                    </div>
                    <div className="profile__form w-full grid grid-col-1">
                        <div className="flex flex-col items-end">
                            <UserDescription description={profile.description}/>
                            <button onClick={() => openModal(modalNames.EDITDESCRIPTION)}
                                    className="text-white p-2  bg-red-900 rounded">
                                <i className="fas fa-plus-circle"/>Edit
                            </button>
                        </div>
                        <button className="save-changes-btn p-2 text-white bg-red-900 rounded"
                                onClick={() => openModal(modalNames.EDITSOCIALS)}>
                            <i className="fas fa-plus-circle "/> Add social account
                        </button>
                        <Form/>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditProfileContent;
