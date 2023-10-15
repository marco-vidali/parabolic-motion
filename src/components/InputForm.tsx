export default function InputForm({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: number | null;
  onChange: (value: number | null) => void;
}) {
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
      className="input input-bordered w-64"
      value={value !== null ? value : ""}
      onChange={handleChange}
    />
  );
}
