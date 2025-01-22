import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg";

function Recommended() {
    return (
        <div>
      <div class="recommended">
            <h1 class="recommended__title">Recommended For You</h1>
            <p>Pick the best fit</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={one}></img>
                    <h3>Python Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div class="course-card">
                    <img src={two}></img>
                    <h3>Data Analyst- Bootcamp 2024</h3>
                    <p>Col Steele</p>
                    <p>3.5⭐⭐⭐</p>
                    <p>999 <del>2000</del></p>
                </div>
                <div class="course-card">
                    <img src={three}></img>
                    <h3>Artificial Intelligence Masterclass</h3>
                    <p>Col Steele</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>800 <del>2000</del></p>
                </div>
                <div class="course-card">
                    <img src={four}></img>
                    <h3>Advance Javascript Course</h3>
                    <p>Col Steele</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>600 <del>1500</del></p>
                </div>
            </div>
        </div>
    </div>


    );
}

export default Recommended;
