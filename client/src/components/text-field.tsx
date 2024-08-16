import { Input } from './ui/input';
import { Label } from './ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onValue?: (value: string) => void;
}

function TextField({
  className,
  label,
  type,
  id,
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
    </div>
  );
}

export { TextField };
