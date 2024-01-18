import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const dabble = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full border border-gray-300 shadow-md p-5 mx-auto", {
        "max-w-5xl": dabble,
        "max-w-md": !dabble,
      })}
    >
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-6", {
          "md:grid-cols-2": dabble,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-xs text-[#EC5990]">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-[#EC5990]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register("password", { minLength: 7 })}
          />
          {errors.password && (
            <span className="text-xs text-[#EC5990]">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Chose one
          </label>
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Write message
          </label>
          <textarea></textarea>
        </div> */}
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Checkbox
          </label>
          <input type="checkbox" />
        </div> */}
      </div>

      <div
        className={cn("grid grid-cols-1 justify-items-center gap-6 my-8", {
          "md:grid-cols-2": dabble,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
