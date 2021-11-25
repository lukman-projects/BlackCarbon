import {useSelector} from "react-redux";


import InfoField from "./infoField";

import fieldsIcon from '../../../constants/fieldsIcon';


const OutInfo = () => {
    const state = useSelector(allState => {
        return {
            user: allState.user.user
        }
    });
    return (
        <>
            <InfoField icon={fieldsIcon.phone} value={state.user.phone} name={"phone"} />
            <InfoField icon={fieldsIcon.workPhone} value={state.user.workPhone} name={"workPhone"} />
            <InfoField icon={fieldsIcon.email} value={state.user.email} name={"email"} />
            <InfoField icon={fieldsIcon.other_link} value={state.user.other_link} name={"other_link"} />
        </>
    );
}

export default OutInfo;
