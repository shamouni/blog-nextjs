interface IHeaderProps {
  title: string;
}

const Heading = ({ title }: IHeaderProps) => {
  return (
    <div className="row">
      <div className="col-12 col-head">
        <h2 className="heading bold mt-4">
          <span>{title || ""}</span>
        </h2>
      </div>
    </div>
  );
};

export default Heading;
