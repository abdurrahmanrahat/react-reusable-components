import { useContext } from "react";
import { FormElementContext } from ".";
import cn from "../../utils/cn";

export const FormSection = ({ children }) => {
  const { dabble } = useContext(FormElementContext);
  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-6", {
        "md:grid-cols-2": dabble,
      })}
    >
      {children}
    </div>
  );
};
