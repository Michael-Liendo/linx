import { Input } from './ui/input';
import { Label } from './ui/label';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	onValue?: (value: string) => void;
}

function TextField({
	className,
	label,
	type,
	id,
	error,
	onValue,
	...props
}: InputProps) {
	return (
		<div>
			{label && <Label htmlFor={id}>{label}</Label>}
			<Input
				type={type}
				className={className}
				onChange={({ target: { value } }) => onValue?.(value)}
				{...props}
			/>
			{error && (
				<p className='mt-2 text-sm text-red-600 dark:text-red-500'>{error}</p>
			)}
		</div>
	);
}

export { TextField };
