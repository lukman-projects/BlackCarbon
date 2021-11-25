
import {useField} from "formik";

const InputField = ({icon, placeholder, ...props}) => {
    const [field, meta] = useField(props);

    const outError = () => {
        if(meta.touched && meta.error){
            if(Array.isArray(meta.error)){
                return meta.error.map((elem, i) => {
                    return <span key={i} className="text-white">{elem} </span>
                });
            }
            return <span className="text-white">{meta.error}</span>
        }
        return null;
    }
    return (
        <>
            <div className="form__item grid items-center">
                <div className="icon__preview flex items-center">
                    <i className={`${icon} text-white`} />

                </div>

                <input
                    className="form__item-input text-white"
                    placeholder={placeholder}
                    {...props}
                    {...field}
                    {...{value: field.value ? field.value : ""}}
                />

            </div>
            {outError()}
        </>
    )
}
export default InputField;
