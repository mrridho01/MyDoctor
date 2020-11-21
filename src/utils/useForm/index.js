import {useState} from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState (initialValue);
    return [
        values,
        (formTipe, formValue) => { return setValues({...values, [formTipe] : formValue}) }
    ];
};