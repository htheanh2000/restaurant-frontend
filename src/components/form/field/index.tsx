import React from 'react';
import { useField } from 'formik';
import Input from '@/components/input';
import Error from '../errorMessage';
import classNames from 'classnames';

// Define interface for props
interface FieldProps {
    label: string;
    id?: string;
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    min?: number;
    max?: number;
}

const Field = ({ label,className, ...props } : FieldProps) => {
    const [field, meta] = useField(props);
    return (
        <div className={classNames('mt-8', className)}>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <Input label={label} {...field} {...props} />
            {(meta.touched && meta.error) ? <Error>{meta.error}</Error> : null}
        </div>
    );
};

export default Field