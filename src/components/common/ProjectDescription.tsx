type Props = {
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  projectDescription: string;
};
const ProjectDescription = ({
  handleFormInputChange,
  projectDescription,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="projectDescription" className="label-text">
        Project Description
      </label>
      <input
        type="text"
        name="projectDescription"
        id="projectDescription"
        className="receipt-input-style"
      />
    </div>
  );
};

export default ProjectDescription;
