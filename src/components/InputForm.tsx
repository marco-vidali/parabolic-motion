import { InputFormProps } from "../types";

export default function InputForm({
  placeholder,
  value,
  onChange,
}: InputFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "") {
      onChange(null);
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        onChange(numericValue);
      }
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-96 2xl:w-64"
      value={value !== null ? value : ""}
      onChange={handleChange}
    />
  );
}
