import * as Yup from 'yup';
import {Formik} from 'formik';
import { useSelector, useDispatch } from 'react-redux';



import Input from './inputField';
import PhoneInputField from './phoneInputField';
import {userModel} from '../../../constants/models';
import formNames from '../../../constants/formNames';
import { outDifferents } from "../../../utils/form";
import changeProfileService from '../../../services/changeProfile';
import {setLoading, setMessage, setName} from '../../../redux/reducers/form';
import checkModal from '../../../utils/checkModal';


const validation = Yup.object().shape({
    phone: Yup.string()
        .max(userModel.phone.max, `Maximum ${userModel.phone.max} characters`)
        .nullable(),
    email: Yup.string()
        .email("The email field must be valid")
        .nullable()
});

const Form = () => {
    const dispatch = useDispatch();
    const formState = useSelector(allState => allState.form);
    const profile = useSelector(allState => allState.auth.profile);

    const {changeProfile} = changeProfileService();


    const outButtonText = (props) => {
        const {index} = outDifferents(props.values, props.initialValues);
        if(index){
            return "Save";
        }else{
            return "Edit";
        }
    }
    const initialValues = {
        email: profile.email,
        other_link: profile.other_link,
        phone: profile.phone
    }

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validation}
            onSubmit={async (values, actions) => {
                dispatch(setName(formNames.EDITUSERINFO));
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
                <form onSubmit={formik.handleSubmit} className="relative">
                    <div className={`edit-profile-loading ${checkModal(formState.name, formNames.EDITUSERINFO, formState.isLoading) ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                        <i className="fas fa-spinner text-white" />
                    </div>
                    <PhoneInputField placeholder="Enter your phone number" icon="far fa-envelope" name="phone"/>

                    <Input placeholder="Enter your email"  icon="far fa-envelope" name="email"/>
                    <Input placeholder="Enter your website" icon="fas fa-globe" name="other_link"/>
                    {checkModal(formState.name, formNames.EDITUSERINFO, formState.message) && <div className="text-white">{formState.message}</div>}
                    <button type="submit" className="mt-2 save-changes-btn bg-red-900 user-connect-btn flex justify-center items-center w-full text-white">
                        {outButtonText(formik)}
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default Form;