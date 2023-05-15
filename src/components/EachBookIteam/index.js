import { Link } from "react-router-dom";

const EachBookIteam = (props) => {
  const { data } = props;

  return (
    <Link className="nav-link m-0 p-0" to={`/books/${data.id}`}>
      <div className="row text-center ">
        <div className="col-2 p-0  bl bb br">
          <h4>{data.id}</h4>
        </div>
        <div className="col-7 p-0  bb br">
          <h4>{data.book}</h4>
        </div>
        <div className="col-3 p-0  bb br">
          <h4>{data.author}</h4>
        </div>
      </div>
    </Link>
  );
};

export default EachBookIteam;
