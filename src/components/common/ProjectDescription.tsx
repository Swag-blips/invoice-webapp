import { BillFromErrors } from "../../types";

type Props = {
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: BillFromErrors | null;
};
const ProjectDescription = ({ errors, handleFormInputChange }: Props) => {
  console.log(errors?.projectDescription);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor="projectDescription"
          className={` ${
            errors?.projectDescription ? "error-label-text" : "label-text"
          }`}
        >
          Project Description
        </label>
        <p className="text-[10px] tracking-[-0.21px] text-[#EC5757]">
          {errors?.projectDescription && errors.projectDescription}
        </p>
      </div>
      <input
        type="text"
        name="projectDescription"
        id="projectDescription"
        className={` ${
          errors?.projectDescription
            ? "error-receipt-input-style"
            : "receipt-input-style"
        }`}
        onChange={handleFormInputChange}
      />
    </div>
  );
};

export default ProjectDescription;
