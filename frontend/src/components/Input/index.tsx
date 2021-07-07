import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './styles.module.scss';

interface IProps {
	name: string;
	label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & IProps;

function Input({ name, label, ...rest }: InputProps) {
	const inputRef = useRef(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return <input className={styles.styledInput} ref={inputRef} {...rest} />;
}

function PasswordInput() {
	const inputRef = useRef(null);
	const { fieldName, registerField } = useField('password');
	const [passwordVisible, setPasswordVisible] = useState(false);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<div className={styles.passwordInputContainer}>
			<input
				className={styles.styledInput}
				ref={inputRef}
				type={passwordVisible ? 'text' : 'password'}
				placeholder={'Password'}
			/>
			<span
				onClick={() => {
					setPasswordVisible(!passwordVisible);
				}}
			>
				{passwordVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
			</span>
		</div>
	);
}

export { Input, PasswordInput };
