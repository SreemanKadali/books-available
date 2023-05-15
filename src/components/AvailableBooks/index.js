import { Component } from "react";
import Loader from "react-loader-spinner";
import "./index.css";
import EachBookIteam from "../EachBookIteam";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class AvailableBooks extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    books: [],
  };

  componentDidMount() {
    this.availableBooksApi();
  }

  availableBooksApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const response = await fetch(
      "https://books-app-production.up.railway.app/books/"
    );

    if (response.ok === true) {
      const fetchedData = await response.json();
      console.log(fetchedData);

      this.setState({
        apiStatus: apiStatusConstants.success,
        books: fetchedData,
      });
    } else if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  renderLoadingView = () => (
    <div className="products-loader-container d-flex justify-content-center">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  renderAvailableBooks = () => {
    const { books } = this.state;
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="row text-center">
                <div className="col-2 p-0 bt bl bb br">
                  <h2>ID</h2>
                </div>
                <div className="col-7 p-0 bt bb br">
                  <h2>Book</h2>
                </div>
                <div className="col-3 p-0 bt bb br">
                  <h2>Author</h2>
                </div>
              </div>
              {books.map((each) => (
                <EachBookIteam key={each.id} data={each} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  renderBooksFailureView = () => <h1>Server failed</h1>;

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAvailableBooks();
      case apiStatusConstants.failure:
        return this.renderBooksFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  }
}

export default AvailableBooks;
