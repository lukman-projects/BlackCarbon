
import Image from './image';

const nonUserBg = require('../../assets/images/IMG_5426.jpg').default;

const ProfileBackground = ({ bg }) => {
    return (
        <Image url={bg} nonImage={nonUserBg} className="user-bg object-cover w-full" />
    )
}

export default ProfileBackground;
