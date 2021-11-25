import {useSelector} from "react-redux";

import {outNonEmptySocials} from '../../../utils/socials';
import {objectLength} from '../../../utils/object-methods';
import socialIcons from '../../../constants/socialsIcon';
import SocialItem from './socialItem';

const SocialsOut = () => {
    const userInfo = useSelector(({user}) => user);

    const outSocials = () => {
        const socials = outNonEmptySocials(userInfo.user);
        if (objectLength(socials)) {
            const html = [];
            for (let i in socials) {
                html.push(<SocialItem link={socials[i]} icon={socialIcons[i]} key={i}/>);
            }
            return html;
        }
        return <span className="text-white text-center socials-empty">
            <a href="https://instagram.com/black_carbons">
                <i className="fab fa-instagram social__item text-2xl pt-3"/></a>
        </span>
    }
    return <div className="user__socials flex w-full">{outSocials()}</div>
}

export default SocialsOut;
