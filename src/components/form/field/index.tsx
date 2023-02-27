import React from 'react';
import { useField } from 'formik';
import Input from '@/components/input';
import Error from '../errorMessage';

// Define interface for props
interface FieldProps {
    label: string;
    id?: string;
    name: string;
    type?: string;
    placeholder?: string;
}

const Field = ({ label, ...props } : FieldProps) => {
    const [field, meta] = useField(props);
    return (
        <div className='mt-8'>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <Input label={label} {...field} {...props} />
            {(meta.touched && meta.error) ? <Error>{meta.error}</Error> : null}
        </div>
    );
};

export default Field