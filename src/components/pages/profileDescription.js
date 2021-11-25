const UserDescription = ({description}) => {
    const outDescription = () => {
        if (description) {
            return (
                <div className="user-biography  w-full grid items-center">
                    <p className="text-white text-center ">{description}</p>
                    <div className="user-line"/>
                </div>

            )
        }
        return <div className="w-full grid grid-cols-1 items-center justify-start">
            <p className="user-biography-empty font-normal text-white">
                Thank you for your purchase</p>
        </div>
    }
    return outDescription();
}

export default UserDescription;
