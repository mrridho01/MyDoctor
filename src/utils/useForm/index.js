import {useState} from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState (initialValue);
    return [
        values,
        (formTipe, formValue) => { 
            if (formTipe === "reset") {
                return setValues(initialValue);
            }
            return setValues({...values, [formTipe] : formValue}) }
    ];
};