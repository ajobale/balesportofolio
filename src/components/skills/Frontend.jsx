import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-category-alt skill__icon"></i>
            <div>
              <h3 className="skills__name"> UI/UX </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-html5 skill__icon "></i>
            <div>
              <h3 className="skills__name"> HTML </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-css3 skill__icon"></i>
            <div>
              <h3 className="skills__name"> CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-tailwind-css skill__icon"></i>
            <div>
              <h3 className="skills__name"> Tailwind CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-javascript skill__icon"></i>
            <div>
              <h3 className="skills__name"> Javascript </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-react skill__icon"></i>

            <div>
              <h3 className="skills__name"> React </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            {" "}
            <i class="uil uil-vuejs skill__icon"></i>
            <div>
              <h3 className="skills__name"> Vue</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-git skill__icon"></i>
            <div>
              <h3 className="skills__name"> Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
