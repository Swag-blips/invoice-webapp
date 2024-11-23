type Props = {
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ProjectDescription = ({ handleFormInputChange }: Props) => {
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
        onChange={handleFormInputChange}
      />
    </div>
  );
};

export default ProjectDescription;
