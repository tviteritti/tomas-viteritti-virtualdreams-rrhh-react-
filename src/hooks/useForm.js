import { useState } from 'react';

export const useForm = (initialForm, validateForm, openModal1) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            
            openModal1();
            setForm(initialForm);
        };
        
    };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}

