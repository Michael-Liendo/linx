import cn from 'classnames';

export default function TextField({
  id,
  name,
  label,
  className,
  placeholder,
  containerClassNames,
  labelClassNames,
  type = 'text',
  disabled,
  required,
  onChange,
  value,
}: InputProps) {
  return (
    <div className={containerClassNames}>
      <label
        className={cn(
          'block mb-2 text-sm font-medium text-gray-900',
          labelClassNames,
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        required={required}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        className={cn(
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
          className,
        )}
        type={type}
      />
    </div>
  );
}

interface InputProps {
  className?: string;
  id?: string;
  name: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  label?: string;
  value?: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  disabled?: boolean;
  containerClassNames?: string;
  labelClassNames?: string;
}
