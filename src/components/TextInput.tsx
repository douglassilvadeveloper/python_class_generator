type TextInputProps = {
  id: string;
  name: string;
  labelDescription: string;
  placeholder: string;
  inputTextValue: string | string[];
  onTextChange: (value: string) => void;
  autoFocus?: boolean;
};

function TextInput({
  id,
  name,
  placeholder,
  labelDescription,
  inputTextValue,
  onTextChange,
  autoFocus = false,
}: TextInputProps) {
  const handleTextChange = ({ target }: any) => {
    if (onTextChange) {
      const newValue = target.value;
      onTextChange(newValue);
    }
  };

  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {labelDescription}
      </label>
      <input
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={inputTextValue}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default TextInput;
