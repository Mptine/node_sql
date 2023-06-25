type InputFieldProps = {
    value: string;
    title: string;
    onChange: (value: string) => void;
    placeholder: string
  };
  
  export function InputField({ value, title, onChange, placeholder="" }: InputFieldProps) {
    return (
      <div className=" w-60">
        <p className=" text-xl font-semibold">{title}:</p>
        <input
          className=" rounded border-double focus:border-red h-10 bg-[#3e3e42]"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }