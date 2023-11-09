import React from "react"

function RecentNews({ data, currentPage }) {
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <React.Fragment>
      {data.slice(startIndex, endIndex).map((item, index) => (
        <div className="box" key={index}>
          <div className="article-container">
            <a href={item.url} target="_blank" className="header">{item.name}</a>
            <p className="article">{item.description}</p>
            <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
            <span className="article-date">{item.date.slice(5, 10)}<span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
          </div>
          <div className="img" ><img src={item.image} alt="image" /></div>
        </div>
      ))}
    </React.Fragment>
  )
}
export default RecentNews