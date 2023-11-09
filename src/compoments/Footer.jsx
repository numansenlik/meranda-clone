function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer">
          <div className="footer-article">
            <h2>Newsletter Subcribe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
              obcaecati possimus nisi ea iste!</p>
          </div>
          <form className="send-email-form">
            <input type="text" className="search-input" id="search-box" placeholder="Enter your email " />
            <button type="submit" className="fa-solid fa-paper-plane" />
          </form>
        </div>
      </section>

    </>
  )
}
export default Footer