import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
            {" "}
            <span class=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2021/07/Swiss-franc_euro_reuters-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More .....
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
