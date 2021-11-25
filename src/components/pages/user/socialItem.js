

const SocialItem = ({icon, link}) => {

    return (
        <a href={link} className="social__item flex justify-center items-center">
            <i className={icon} />
        </a>
    )
}

export default SocialItem;