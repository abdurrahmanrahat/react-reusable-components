import { createContext } from "react";
import { TForm } from "../../types";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ dabble: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, dabble = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ dabble }}>
      <form
        onSubmit={onSubmit}
        className={cn("w-full border border-gray-300 shadow-md p-5 mx-auto", {
          "max-w-5xl": dabble,
          "max-w-md": !dabble,
        })}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
