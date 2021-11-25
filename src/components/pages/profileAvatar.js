
import Image from './image.js';


const nonUserAvatar = require('../../assets/images/IMG_5218.gif').default;

const ProfileAvatar = ({src}) => {
	return (
		<div className=" p-8 -mt-9 bg-desc  relative">
			<div className="profile__img absolute ">
                <Image url={src} nonImage={nonUserAvatar}  />
			</div>
		</div>
	)
}


export default ProfileAvatar;
