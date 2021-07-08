import styles from './styles.module.scss';

export default function Button({
	children,
	...rest
}: JSX.IntrinsicElements['button']) {
	return (
		<button className={styles.styledButton} {...rest}>
			{children}
		</button>
	);
}

export { Button };
