import {useDispatch} from 'react-redux';


import {setModalActive, setSocial} from '../../../redux/reducers/social';


const SocialItem = ({icon, name}) => {
    const dispatch = useDispatch();

    const clickHandle = () => {
        dispatch(setSocial(name));
        dispatch(setModalActive(true));
    }

    return (
        <span onClick={clickHandle} className="social__item flex justify-center items-center">
            <i className={icon} />
        </span>
    )
}

export default SocialItem;