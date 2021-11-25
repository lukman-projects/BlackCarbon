import {useSelector, useDispatch} from 'react-redux';
import { Formik } from 'formik';

import SocialInput from '../socialInput';
import socialEditPlaceholder from '../../constants/socialsEditPlaceholders';

import {
    setSocial,
    setModalActive,
    setFormLoading,
    setFormMessage
} from '../../redux/reducers/social';
import {outSocialsNickname, buildSocialsLink} from '../../utils/socialsLinkEdit';
import CheckExistenseService from '../../services/checkForExistense';
import ChangeProfileService from '../../services/changeProfile';
import {outDifferents} from '../../utils/form';



const Socials = () => {
    const dispatch = useDispatch();
    const profile = useSelector(({auth}) => auth.profile);
    const socialState = useSelector(({social}) => social);

    const CheckExistenseActions = CheckExistenseService();
    const {changeProfile} = ChangeProfileService();

    const outInitialValue = () => {
        if(socialState.currentSocial){
            const data = {
                link: profile[socialState.currentSocial],
                name: socialState.currentSocial
            }
            console.log(outSocialsNickname(data.link, data.name))
            return outSocialsNickname(data.link, data.name);
        }else{
            return ""
        }
    }
    const initialValues = {
        [socialState.currentSocial]: outInitialValue()
    }
    const closeModal = () => {
        dispatch(setFormMessage(""));
        dispatch(setSocial(null));
        dispatch(setModalActive(false));
    }
    return (
        <div className={`${socialState.modalIsActive ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
            <div className="checkKey-modal relative">
                <div className={`form-loading ${socialState.formIsLoading ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                    <i className="fas fa-spinner text-white" />
                </div>
                <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
                <div className="user__socials flex">
                    {
                        socialState.modalIsActive && socialState.currentSocial &&
                        <Formik
                            initialValues={initialValues}
                            enableReinitialize
                            onSubmit={async (values, actions) => {
                                const {index} = outDifferents(values, initialValues);
                                if(index){
                                    await CheckExistenseActions[socialState.currentSocial](values[socialState.currentSocial]);
                                    const errors = await changeProfile({
                                        info: {
                                            [socialState.currentSocial]: buildSocialsLink(values[socialState.currentSocial], socialState.currentSocial)
                                        },
                                        beforeFetch: () => {
                                            dispatch(setFormLoading(true));
                                        },
                                        successHandle: () => {
                                                dispatch(setFormMessage("Successfully changed"));
                                        },
                                        errorHandle: () => {
                                            dispatch(setFormMessage("Some kind of error has occurred"));
                                        },
                                        afterFetch: () => {
                                            dispatch(setFormLoading(false));
                                        }
                                    });
                                    actions.setErrors(errors);
                                }
                            }}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <SocialInput placeholder={socialState.currentSocial ? socialEditPlaceholder[socialState.currentSocial] : ""} className="text-black p-2 " name={socialState.currentSocial} />
                                    {socialState.formMessage && <div className="text-white px-3.5">{socialState.formMessage}</div>}
                                    <button className="text-white bg-indigo-600 p-2 ">Save</button>
                                 </form>
                            )}
                        </Formik>
                    }
                </div>
            </div>
        </div>
    )
}

export default Socials;