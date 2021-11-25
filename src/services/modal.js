import { useDispatch } from"react-redux";

import {setActive, setName} from '../redux/reducers/modal';
import { setMessage, setErrors } from "../redux/reducers/form";

const ModalService = () => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setName(null));
        dispatch(setMessage(""));
        dispatch(setErrors({}));
        dispatch(setActive(false));
    }
    const openModal = (name) => {
        dispatch(setName(name));
        dispatch(setActive(true));
    }

    return {
        closeModal,
        openModal
    }
}

export default ModalService;