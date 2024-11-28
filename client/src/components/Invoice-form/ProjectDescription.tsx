import { FormErrors } from "../../types";

type Props = {
  projectDescription: string;
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors | null;
};
const ProjectDescription = ({
  projectDescription,
  errors,
  handleFormInputChange,
}: Props) => {
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
        <p className="text-[10px] tracking-[-0.21px] text-error">
          {errors?.projectDescription && errors.projectDescription}
        </p>
      </div>
      <input
        type="text"
        value={projectDescription}
        name="projectDescription"
        id="projectDescription"
        className={` ${
          errors?.projectDescription
            ? "error-invoice-input-style"
            : "invoice-input-style"
        }`}
        onChange={handleFormInputChange}
      />
    </div>
  );
};

export default ProjectDescription;
