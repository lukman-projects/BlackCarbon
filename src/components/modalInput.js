import {useField} from "formik";


const ModalInput = (props) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input
                {...field}
                value={field.value ? field.value : ""}
                {...props}
                className="rounded p-4"
            />
            {meta.error && <div className="text-red-800">{meta.error}</div>}
        </>
    )
}


export default ModalInput;