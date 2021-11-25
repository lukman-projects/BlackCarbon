import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect, useRef} from 'react';

import {setName as setFormName, setMessage as setFormMessage, setLoading as setFormLoading, setErrors} from '../../redux/reducers/form';
import checkModal from '../../utils/checkModal';
import modalNames from '../../constants/modalNames';
import modalService from '../../services/modal';
import formNames from '../../constants/formNames';
import changeProfileService from '../../services/changeProfile';


const EditAvatarModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(allState => allState.modal);
    const formState = useSelector(allState => allState.form);

    const {changeProfile} = changeProfileService();

    const [file, setFile] = useState(null);
    const fileInput = useRef(null);

    const {closeModal} = modalService();

    useEffect(() => {
        if(!file){
            fileInput.current.value = "";
        }
    }, [file])

    const handleChange = (e) => {
        setFile(fileInput.current.files[0]);
    }

    const uploadImage = (e) => {
        dispatch(setFormName(formNames.EDITUSERBG));
        e.preventDefault();
        dispatch(setErrors({}));
        if(file){
            changeProfile({
                info: {user_bg: file},
                beforeFetch: () => {
                    dispatch(setFormLoading(true));
                },
                successHandle: () => {
                    dispatch(setFormMessage("Successfully changed"));
                },
                errorHandle: (e) => {
                    if(e.response){
                        if(e.response.status === 400 && e.response.data){
                            dispatch(setErrors(e.response.data));
                        }
                    }
                    dispatch(setFormMessage("Some kind of error has occurred"));
                },
                afterFetch: () => {
                    setFile(null);
                    dispatch(setFormLoading(false));
                }
            });
        }
    }

    return (
        <div className={`${checkModal(modalState.name, modalNames.EDITUSERBG, modalState.isActive) ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
            <div className="checkKey-modal relative">
                <div className={`form-loading ${checkModal(formState.name, formNames.EDITUSERBG, formState.isLoading) ? "active": ""} absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
                    <i className="fas fa-spinner text-white" />
                </div>
                <i onClick={closeModal} className="fal fa-times text-white close-modal absolute cursor-pointer" />
                <form onSubmit={uploadImage} className="checkKey__form grid grid-cols-1 justify-center">
                    <input ref={fileInput} className="text-white" type="file" onChange={handleChange} />
                    {checkModal(formState.name, formNames.EDITUSERBG, formState.errors) &&  formState.errors.user_bg && formState.errors.user_bg.map((el, i) => {
                        return <span className="text-white" key={i}>{el}</span>
                    })}
                    <button type="submit" className="text-white">Save</button>
                    {formState.message && <div className="text-white">{formState.message}</div>}
                </form>
            </div>
        </div>
    )
}

export default EditAvatarModal;
