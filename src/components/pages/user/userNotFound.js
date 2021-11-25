import {NavLink} from "react-router-dom";


const UserNotFound = () => {

    return (
        <div className="notfound-page from-purple-300 to-blue-200 relative">
            <img className="w-full h-full object-cover absolute left-0 top-0 z-0" src={require('../../../assets/images/bg.jpg').default}/>
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="notfound-bg shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="notfound-bg border-t border-gray-200 text-center pt-8">
                        <h1 className="notfound-404 font-bold text-white">404</h1>
                        <h1 className="notfound-title text-white font-medium py-2">User not found</h1>
                        <p className="notfound-description text-white pb-8 px-12 font-normal">The user you are looking for was not found.</p>
                        <NavLink to="/" className="text-white font-semibold px-6 py-3 rounded-md mr-6 notfound-btn">
                            HOME
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserNotFound;