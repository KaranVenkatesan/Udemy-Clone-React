import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg";
import five from "../assets/images/c5.jpg";
import six from "../assets/images/c6.jpg";
import seven from "../assets/images/c7.jpg";
import eight from "../assets/images/c8.jpg";

function Popular() {
  return (
    <div>
      <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
        <div className="course-card">
          <img src={one} alt="2024 Python Data Visualization Masterclass" />
          <p>2024 Python Data Visualization Masterclass</p>
          <p>Col Steele</p>
          <p>4.1 ⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={two} alt="Web Development Bootcamp 2024" />
          <p>Web Development Bootcamp 2024</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>799 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={three} alt="Master UI/UX Designing with Figma" />
          <p>Master UI/UX Designing with Figma</p>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>599 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={four} alt="Basic to Advance Programming with EMC" />
          <p>Basic to Advance Programming with EMC</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>899 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={five} alt="JavaScript" />
          <p>JavaScript</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>599 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={six} alt="AI/ML" />
          <p>AI/ML</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>999 <del>5999</del></p>
        </div>
        <div className="course-card">
          <img src={seven} alt="PHP" />
          <p>PHP</p>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>599 <del>1999</del></p>
        </div>
        <div className="course-card">
          <img src={eight} alt="Hardware Engineer" />
          <p>Hardware Engineer</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>699 <del>1999</del></p>
        </div>
      </div>
      </div>

    </div>


  );
}


export default Popular;
