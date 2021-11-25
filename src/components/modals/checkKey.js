import {useDispatch, useSelector} from "react-redux";
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {useParams} from "react-router-dom";

import checkModal from '../../utils/checkModal';
import modalNames from '../../constants/modalNames';
import formNames from '../../constants/formNames';
import {setName as setFormName, setMessage as setFormMessage} from '../../redux/reducers/form';
import {keyModel} from '../../constants/models';
import userService from '../../services/user';
import ModalService from '../../services/modal';

import ModalInput from '../modalInput';

const validation = Yup.object({
    key: Yup.string()
        .required("The field above is required")
        .max(keyModel.max, `This field must be no more than ${keyModel.max} characters`)
})


const CheckKeyModal = (props) => {

    const modalState = useSelector(({modal}) => modal);
    const formState = useSelector(({form}) => form);
    const {closeModal} = ModalService();

    const outClasses = () => {
        const activeClass = checkModal(modalState.name, modalNames.CHECKKEY, modalState.isActive) ? "active" : "";
        return "checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center " + activeClass + "";
    }
    return (
        <div className={outClasses()}>
            <div className="checkKey-modal relative">
                <div
                    className={`form-loading ${checkModal(formState.name, formNames.CHECKKEY, formState.isLoading) ? "active" : ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                    <i className="fas fa-spinner text-white"/>
                </div>
                <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer"/>
                <form onSubmit={props.handleSubmit} className="checkKey__form grid grid-cols-1 justify-center">
                    <ModalInput placeholder="Enter the key" className="text-white" name="key"/>
                    {checkModal(formState.name, formNames.CHECKKEY, formState.message) &&
                    <div className="text-white">{formState.message}</div>}
                    <button type="submit" className="flex justify-center items-center  text-white">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}


const FormWrapper = () => {
    const {id} = useParams();
    const {checkKey} = userService();
    const dispatch = useDispatch();
    const Form = withFormik({
        mapPropsToValues: () => ({key: ''}),

        validationSchema: validation,

        handleSubmit: (values, {setSubmitting}) => {
            dispatch(setFormMessage(""));
            dispatch(setFormName(formNames.CHECKKEY));
            checkKey({id, ...values});
        },

        displayName: formNames.CHECKKEY,
    })(CheckKeyModal);

    return <Form/>;
}

export default FormWrapper;