import { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

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

	return <input ref={inputRef} {...rest} />;
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
		<>
			<input
				ref={inputRef}
				type={passwordVisible ? 'text' : 'password'}
				placeholder={'Password'}
			/>
			<span
				onClick={() => {
					setPasswordVisible(!passwordVisible);
				}}
				style={{
					marginLeft: '22.813rem',
					marginBottom: '4.063rem',
					cursor: 'pointer',
					position: 'absolute',
				}}
			>
				{passwordVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
			</span>
		</>
	);
}

export { Input, PasswordInput };
