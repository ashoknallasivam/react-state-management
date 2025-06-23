import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 100,
    isLiked: false,
  };

  handleLikeClick = () => {
    this.setState((prevState) => ({
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      isLiked: !prevState.isLiked,
    }));
  };

  render() {
    return (
      <>
        <div className="like-container">
          <button
            className={cx("like-button", { liked: this.state.isLiked })}
            onClick={this.handleLikeClick}
          >
            {this.state.isLiked ? "Unlike" : "Like"} | {this.state.likes}
          </button>
          <span className="likes-counter">{this.state.likes}</span>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );

    // render() {
    //     return (
    //         <>
    //             <div>
    //                 <h2>Like Button</h2>
    //                 <button className={cx("like-button", { liked : isLiked} )}></button>
    //                 <button onClick={this.toggleLike}>
    //       {this.state.isLiked ? 'Unlike' : 'Like'} ({this.state.likes})
    //     </button>
    //             </div>
    //             <style>{`
    //                 .like-button {
    //                     font-size: 1rem;
    //                     padding: 5px 10px;
    //                     color:  #585858;
    //                 }
    //                .liked {
    //                     font-weight: bold;
    //                     color: #1565c0;
    //                }
    //             `}</style>
    //         </>
    //     );
    // }
  }
}
