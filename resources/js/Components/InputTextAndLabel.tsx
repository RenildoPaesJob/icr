interface InputTextProps {
	id       : string;
	className?: string;
	textLabel: string;
	type: string;
}

export default function InputTextAndLabel({ className = '', id, textLabel, type }: InputTextProps) {
	return (
		<>
			<label htmlFor={id}>{textLabel}</label>
			<input type={type} className={'rounded-lg bg-gray-300 font-medium mb-3' + className} id={id} placeholder={textLabel} />
		</>
	);
}
