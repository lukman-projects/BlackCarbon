import {useSelector} from 'react-redux';



import SocialItem from '../pages/edit-profile/socialItem';

import socialIcons from '../../constants/socialsIcon';
import checkModal from '../../utils/checkModal';
import modalNames from '../../constants/modalNames';
import formNames from '../../constants/formNames';
import modalService from '../../services/modal';


const Socials = () => {
    const modalState = useSelector(({modal}) => modal);
    const formState = useSelector(({form}) => form);

    const {closeModal} = modalService();

    return (
        <div className={`${checkModal(modalState.name, modalNames.EDITSOCIALS, modalState.isActive) ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
            <div className="checkKey-modal relative">
                <div className={`form-loading ${checkModal(formState.name, formNames.EDITSOCIALS, formState.isLoading) ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                    <i className="fas fa-spinner text-white" />
                </div>
                <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
                <div className="user__socials flex">
                    {Object.entries(socialIcons).map((elem, i) => {
                        return <SocialItem key={elem} icon={elem[1]} name={elem[0]} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Socials;