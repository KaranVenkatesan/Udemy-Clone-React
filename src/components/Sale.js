import sale from "../assets/images/sal-image.jpg"; 

function Sale() {
  return (
    <div className="sale-image">
      <img src={sale} alt="Udemy Flash Sale Banner" />
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 Hours to Save</h2>
        <p>Get the top courses for just 499. Just one day to save, but a lifetime to learn.</p>
      </div>
    </div>
  );
}

export default Sale;
