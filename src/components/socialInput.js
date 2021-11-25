import { useField } from "formik";



const SocialInput = (props) => {
    const [field] = useField(props);
    return (
        <input

            {...field}
            {...props}
            {...{value: field.value ? field.value : ""}}
        />
    )
}

export default SocialInput;