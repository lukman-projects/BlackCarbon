import workPhone from '../../../assets/images/phone.svg'

const InfoField = ({icon, value, name}) => {
    const outLink = () => {
        switch (name) {
            case 'email':
                const emailResult = value ? `mailto:${value}` : "";
                return emailResult;
            case 'phone':
                const phoneResult = value ? `tel:${value}` : "";
                return phoneResult;
            case 'other_link':
                return value ? value : "https://black-carbons.com";
        }
    }

    const outDefaultValue = () => {
        switch (name) {
            case 'email':
                return "info@black-carbons.com"
            case 'phone':
                return "+971528906238"
            case 'other_link':
                return "https://black-carbons.com"
        }

    }
    return (
        <div className="form__item grid items-center">
            <div className="icon__preview flex items-center">
                { name === "workPhone" ? <img src={workPhone} alt=""/> : <i className={icon}/>}
            </div>
            <a href={outLink()} className="form__item-info text-white">
                {value ? value : outDefaultValue()}

            </a>
        </div>
    )
}
export default InfoField
