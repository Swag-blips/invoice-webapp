export default function Main() {
  return (
    <div className="flex items-center  justify-center">
      <div className="flex md:w-[600px] lg:w-[730px] justify-between ">
        <div className="flex flex-col gap-6">
          <h2>Invoices</h2>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-[14px]">
            <p>Filter by status</p>
            <p>icon</p>
          </div>

          <button>New invoice</button>
        </div>
      </div>
    </div>
  );
}
