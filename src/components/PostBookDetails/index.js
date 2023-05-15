import { Component } from "react";
import "./index.css";

class PostBookDetails extends Component {
  state = {
    book: "",
    author: "",
  };

  onChangeBookTitle = (event) => {
    this.setState({ book: event.target.value });
  };

  onChangeAuthorName = (event) => {
    this.setState({ author: event.target.value });
  };

  postDataToServer = async (event) => {
    event.preventDefault();
    const { book, author } = this.state;
    const bookDetails = { book, author };

    const url = "https://books-app-production.up.railway.app/books/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookDetails),
    };

    if (book !== "" && author !== "") {
      const response = await fetch(url, options);
      console.log(response);
      // const data = await response.json();
      if (response.ok === true) {
        const { history } = this.props;
        history.replace("/");
      }
    }
  };

  render() {
    const { book, author } = this.state;
    return (
      <>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-md-7">
              <form className="" onSubmit={this.postDataToServer}>
                <div className="">
                  <label className="input-label" htmlFor="book-id">
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="book-id"
                    className="form-control"
                    value={book}
                    onChange={this.onChangeBookTitle}
                  />
                </div>
                <div className="mt-3">
                  <label className="input-label" htmlFor="author-id">
                    Author Name
                  </label>
                  <input
                    type="text"
                    id="author-id"
                    className="form-control"
                    value={author}
                    onChange={this.onChangeAuthorName}
                  />
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary pl-3 pr-3">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostBookDetails;
