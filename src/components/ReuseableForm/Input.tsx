export const Input = ({ label, register, errors, type }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="name">
        {label}
      </label>
      <input type={type} id="name" {...register} />
      {errors.name && (
        <span className="text-xs text-[#EC5990]">{errors.name.message}</span>
      )}
    </div>
  );
};
