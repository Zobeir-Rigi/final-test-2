export const InputeField = ({ id, label, ...props }) => {
	return (
		<div className="input-field">
			<label htmlFor={id} > {label}</label>
			<input id={id} {...props} />
		</div>
	);
};
