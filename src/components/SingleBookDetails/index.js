import { Component } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";

class SingleBookDetails extends Component {
  state = { bookData: {}, isLoading: true };

  componentDidMount() {
    this.getBlogItemData();
  }

  getBlogItemData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const response = await fetch(
      `https://books-app-production.up.railway.app/books/${id}`
    );
    const data = await response.json();
    console.log(data);

    // const updatedData = {
    //   title: data.title,
    //   imageUrl: data.image_url,
    //   content: data.content,
    //   avatarUrl: data.avatar_url,
    //   author: data.author,
    // };
    this.setState({ bookData: data, isLoading: false });
  };

  renderBlogItemDetails = () => {
    const { bookData } = this.state;
    const { id, book, author } = bookData;
    console.log(book);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 p-3 mt-5">
            <h4>Book Id : {id}</h4>
            <h6>
              {book} was written by {author} <br /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. <br />{" "}
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. <br />{" "}
              <br />
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. <br /> <br />
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </h6>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    );
  }
}

export default SingleBookDetails;
