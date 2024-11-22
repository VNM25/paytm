export function InputBox({ props }) {
  return (
    <div className="flex flex-col gap-1 my-3">
      <label className="font-semibold">{props.label}</label>
      <input
        type="text"
        className="border rounded p-1"
        placeholder={props.placeholder}
        onChange={(e) =>
          props.changeFormData((formData) => {
            formData[props.key] = e.target.value;
            return formData;
          })
        }
      />
    </div>
  );
}
