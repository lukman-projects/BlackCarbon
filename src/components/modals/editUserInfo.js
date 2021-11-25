import {useDispatch, useSelector} from 'react-redux';
import { Formik } from 'formik';

import ModalInput from '../modalInput';

import {setLoading, setMessage, setName} from '../../redux/reducers/form';
import changeProfileService from '../../services/changeProfile';
import checkModal from '../../utils/checkModal';
import modalNames from '../../constants/modalNames';
import modalService from '../../services/modal';
import formNames from '../../constants/formNames';
import {outDifferents} from '../../utils/form';



const EditUserInfoModal = () => {
    const dispatch = useDispatch();
    const profile = useSelector(({auth}) => auth.profile);
    const modalState = useSelector(({modal}) => modal);
    const formState = useSelector(({form}) => form);
    const {changeProfile} = changeProfileService();

    const {closeModal} = modalService();

    const initialValues = {
        name: profile.name,
        position: profile.position
    }
    return (
        <div className={`${checkModal(modalState.name, modalNames.EDITIMPORTANTINFO, modalState.isActive) ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
            <div className="checkKey-modal relative">
                <div className={`form-loading ${checkModal(formState.name, formNames.EDITIMPORTANTINFO, formState.isLoading) ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                    <i className="fas fa-spinner text-white" />
                </div>
                <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    onSubmit={async (values, actions) => {
                        dispatch(setName(formNames.EDITIMPORTANTINFO));
                        const {index, result} = outDifferents(values, initialValues);
                        if(index){
                            const errors = await changeProfile({
                                info: result,
                                beforeFetch: () => {
                                    dispatch(setLoading(true));
                                },
                                successHandle: () => {
                                    dispatch(setMessage("Successfully changed"));
                                },
                                errorHandle: () => {
                                    dispatch(setMessage("Some kind of error has occurred"));
                                },
                                afterFetch: () => {
                                    dispatch(setLoading(false));
                                }
                            });
                            actions.setErrors(errors);
                        }
                    }}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit} className="checkKey__form grid grid-cols-1 justify-center">
                            <ModalInput placeholder="Enter your name" className="text-white" name="name" />
                            <ModalInput placeholder="Enter your position" className="text-white" name="position" />
                            <button type="submit" className="flex justify-center items-center text-white">
                                Edit
                            </button>
                            {checkModal(modalState.name, modalNames.EDITIMPORTANTINFO, modalState.message) && <div>{formState.message}</div>}
                        </form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default EditUserInfoModal;
