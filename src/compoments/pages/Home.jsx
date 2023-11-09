import newsGetApi from "../customHooks/newsGetApi"
import React, { useEffect, useState } from "react";
import RecentNews from './recentNews/RecentNews';
function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = newsGetApi();

  return (
    <div>
      {loading ? (
        <h1 className="data-check">Loading...</h1>

      ) :
      error ? (
        <h1 className="data-check">An error occurred while loading the page</h1>
        ) :(
        <React.Fragment>
          {/* !-- !Carousel Section Start -- */}
          <section>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" id="carousel-bar" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" id="carousel-bar" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              </div>
              <div className="carousel-inner ">
                {data
                  .slice(0, 2)
                  .map((item, index) => (
                    <div className={`carousel-item ${index == 0 && "active"}`} key={index} >
                      <div className="carousel-item-containers ">
                        <div className="img "> <img src={item.image} /></div>
                        <div className="article  ">
                          <span className="article-header-1">Editor's Pick</span>
                          <a href={item.url} target="_blank" className="article-header-2">{item.name}</a>
                          <p className="article-text">{item.description}</p>
                          <p className="article-name"><a href="#">{item.source}</a> in <a href="#">News</a></p>
                          <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                        </div>
                      </div>
                    </div>

                  ))}

              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="fa-solid fa-arrow-left fa-2xl" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="fa-solid fa-arrow-right fa-2xl" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </section>
          {/*  !-- !Carousel Section End--  */}

          {/* !Major News Section Start */}
          <section className="major-news-section">
            <div className="editor-pick-container">
              <div className="editor-pick-header">
                <h1 className="header editor">Editor's Pick</h1>
              </div>
              <div className="editor-pick-article">
                <div className="first-colump-box">
                  <a href={data[0].url} target="_blank" className="img"><img src={data[0].image} /></a>
                  <a href={data[0].url} target="_blank" className="header">{data[0].name}</a>
                  <p className="content">{data[0].description}</p>
                  <p className="article-writer"><a href="#">{data[0].source}</a> in <a href="#">News</a></p>
                  <span className="article-date">{data[0].date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                </div>
                <div className="second-colump-box">
                  {data.slice(1, 4).map((item, index) => (
                    <div className="box" key={index}>
                      <a href={item.url} target="_blank" className="img" ><img src={item.image} alt="image" /></a>
                      <div className="article-container">
                        <a href={item.url} target="_blank" className="header">{item.name}</a>
                        <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
                        <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                      </div>
                    </div>)
                  )}
                </div>
              </div>
            </div>
            <div className="trend-news-container">
              <h1 className="header">Trending</h1>
              <div className="trend-news-articles">
                {data.slice(4, 8).map((item, index) => (
                  <div className="box" key={index}>
                    <div className="article-number">{index + 1}</div>
                    <div className="article-content">
                      <a href={item.url} target="_blank" className="header">{item.name}</a>
                      <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
                      <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                    </div>
                  </div>
                )
                )}
              </div>
              <a className="see-all-trends" href="#">SEE ALL TRENDS <span className="fa-solid fa-angle-up fa-rotate-90" /></a>
            </div>
          </section>
          {/* !Major News Section End */}

          {/* !Article Section Start */}
          <div className="carousel-inner ">

            <div className={"carousel-item active"}  >
              <div className="carousel-item-containers ">
                <div className="img "> <img src={data[4].image} /></div>
                <div className="article  ">
                  <span className="article-header-1">Editor's Pick</span>
                  <a href={data[4].url} target="_blank" className="article-header-2">{data[4].name}</a>
                  <p className="article-text">{data[4].description}</p>
                  <p className="article-name"><a href="#">{data[4].source}</a> in <a href="#">News</a></p>
                  <span className="article-date">{data[4].date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                </div>
              </div>
            </div>
          </div>
          {/* !Article Section End */}


          {/* !Politic and Business news Section Start */}
          <div className="politics-business-section">
            <div className="box-container">
              <h1 className="header">Politics</h1>
              {data.slice(2, 5).map((item, index) => (
                <div className="box" key={index}>
                  <a href={item.url} target="_blank" className="img" ><img src={item.image} alt="image" /></a>
                  <div className="article-container">
                    <a href={item.url} target="_blank" className="header">{item.name}</a>
                    <p className="article">{item.description}</p>
                    <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
                    <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="box-container">
              <h1 className="header">Business</h1>
              {data.slice(5, 8).map((item, index) => (
                <div className="box" key={index}>
                  <a href={item.url} target="_blank" className="img" ><img src={item.image} alt="image" /></a>
                  <div className="article-container">
                    <a href={item.url} target="_blank" className="header">{item.name}</a>
                    <p className="article">{item.description}</p>
                    <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
                    <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* !Politic and Business news Section End */}


          {/* !Resent  and Popular news Section Start */}
          <section className="resent-popular-section">
            <div className="recent-news-container">
              <h1 className="header">Recent News</h1>
              <div className="box-container">
                <RecentNews data={data} currentPage={currentPage} />
              </div>
              <div className="recent-pagenumber-container">
                {Array(Math.ceil(data.length / 3))
                  .fill()
                  .map((item, index) => (
                    <p className={currentPage === index + 1 ? "active" : ""} onClick={(e) => setCurrentPage(parseInt(e.target.innerHTML))} key={index}>{index + 1} </p>
                  ))}
              </div>
            </div>
            <div className="trend-news-container">
              <h1 className="header">Popular Posts</h1>
              <div className="trend-news-articles">
                {data.slice(4, 8).map((item, index) => (
                  <div className="box" key={index}>
                    <div className="article-number">{index + 1}</div>
                    <div className="article-content">
                      <a href={item.url} target="_blank" className="header">{item.name}</a>
                      <p className="article-writer"><a href={item.url} target="_blank">{item.source}</a> in <a href={item.url} target="_blank">News</a></p>
                      <span className="article-date">{item.date.slice(5, 10)} <span className="mx-1">•</span> 3 min read <span className="fa-solid fa-star" /></span>
                    </div>
                  </div>
                )
                )}
              </div>
              <a className="see-all-trends" href="#">SEE ALL POPULAR <span className="fa-solid fa-angle-up fa-rotate-90" /></a>
            </div>

          </section>
          {/* !Resent  and Popular news Section End */}


        </React.Fragment>
      )
      }
    </div >
  )
}
export default Home