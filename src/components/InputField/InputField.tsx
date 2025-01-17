import { cx } from './util';

export interface InputFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  subtext?: string;
  onChange: (value: string) => void;
  inputType?: 'text' | 'password' | 'number' | 'email';
  hasError?: boolean;
  className?: string;
  inputClass?: string;
  rightIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const InputField = ({
  label,
  placeholder,
  subtext,
  value = '',
  onChange,
  inputType = 'text',
  hasError = false,
  className = '',
  inputClass = '',
  rightIcon,
}: InputFieldProps) => {
  return (
    <div
      className={cx(
        'flex flex-col gap-2.5',
        hasError ? 'text-support-error-1' : 'text-neutral-7',
        className,
      )}
    >
      <div className="relative w-full">
        {label && (
          <label
            htmlFor="input-field"
            className="absolute left-2.5 top-2.5 text-xs font-regular"
          >
            {label}
          </label>
        )}
        <input
          id="input-field"
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          className={cx(
            'border rounded-lg text-2xl w-full placeholder:text-neutral-7 text-shade-4 focus:border-2 focus:border-shade-4 focus-visible:outline-none transition',
            label ? 'p-2.5 pt-5' : 'py-3 px-2.5',
            hasError
              ? 'bg-support-error-3 border-support-error-1 focus:bg-inherit focus:border-support-error-1'
              : 'border-neutral-6',
            inputType === 'number' &&
              '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            !!rightIcon && 'pr-5',
            inputClass,
          )}
        />
        {rightIcon && (
          <span
            className={cx(
              'absolute right-0 flex items-center pr-3 pointer-events-none',
              label ? 'bottom-3 pb-px' : 'inset-y-0',
            )}
          >
            {rightIcon}
          </span>
        )}
      </div>
      {subtext && (
        <div
          id="input-field-subtext"
          className={cx(
            'flex items-center gap-2 text-xl font-regular w-full',
            hasError ? 'text-support-error-1' : 'text-inherit',
          )}
        >
          {hasError && (
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.5C3.58011 0.5 0 4.08003 0 8.5C0 12.92 3.58003 16.5 8 16.5C12.42 16.5 16 12.9197 16 8.5C16 4.08035 12.42 0.5 8 0.5ZM7.1161 4.5663H8.8839V9.5165H7.1161V4.5663ZM8 12.4337C7.5138 12.4337 7.1161 12.036 7.1161 11.5498C7.1161 11.0636 7.51382 10.6659 8 10.6659C8.48618 10.6659 8.8839 11.0636 8.8839 11.5498C8.8839 12.036 8.48618 12.4337 8 12.4337Z"
                  fill="#ED3241"
                />
              </svg>
            </span>
          )}
          {subtext}
        </div>
      )}
    </div>
  );
};
