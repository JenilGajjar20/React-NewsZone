import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, imageUrl, newsUrl, sourceName, authorName, date } = this.props;
    return (
      <div className="news-card">
        <p className="author-name">{authorName ? authorName : "Unknown"}</p>
        <div className="source-name">
          <p>{sourceName}</p>
        </div>
        <div className="news-img">
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUOAkg8EMrDwubvbgboPHvc8Rbr_QOl4Ejw&usqp=CAU"
                : imageUrl
            }
            alt="..."
          />
        </div>
        <div className="news-content">
          <h3>
            <a href={newsUrl} target="_blank">
              {title}
            </a>
          </h3>
          <p>{new Date(date).toDateString()}</p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
