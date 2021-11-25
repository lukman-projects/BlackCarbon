import ProfileAvatar from './profileAvatar';
import vCards from 'vcards-js'
import axios from "axios";
import { saveAs } from 'file-saver'

const ProfileInfo = ({profile}) => {

    const outUserInfo = () => {
        const result = {
            name: "",
            position: "",
            nameClasses: "",
            positionClasses: ""
        }
        if (profile.name) {
            result.name = profile.name;
        } else {
            result.nameClasses = "text-white";
            result.name = 'BLACK CARBON';
        }
        if (profile.position) {
            result.position = profile.position;
        } else {
            result.positionClasses = "text-white";
            result.position = "Digital Business Card";
        }
        return (
            <div className="bg-desc rounded-b-2xl border-b-solid  flex flex-col items-start justify-start">
                <span className={`${result.positionClasses} user-name text-white font-bold`}>
				    {result.name}
                </span>
                <span className={`${result.positionClasses} user-position text-white font-normal`}>
				    {result.position}
                </span>
            </div>

        )
    }
    return (
        <div className="profile__top flex justify-center m-auto flex-col ">
            <ProfileAvatar src={profile.avatar}/>
            {outUserInfo()}
        </div>
    )
}

export default ProfileInfo;
