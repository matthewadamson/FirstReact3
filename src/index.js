import React from "react";
import ReactDOM from "react-dom";

const randomImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        alt="herodotus"
        className="images1"
        src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg1NjI1ODQ1NDcx/hpim0650-jpg.jpg"
      />
      <img
        alt="dong bei cai"
        className="images1"
        src="https://static01.nyt.com/images/2010/02/10/dining/10chinesespan-1/10chinesespan-1-articleLarge.jpg?year=2010&h=331&w=600&sig=0x41fd3ddac5aa615b2149e3c2ad56724c"
      />
      <img
        alt="The Bible"
        className="images1"
        src="https://advancingnativemissions.com/wp-content/uploads/2019/10/The-Most-Important-Verses-in-the-Bible-Blog-Featured-Image-850x509.jpg"
      />
      <img alt="random" className="images1" src={randomImg} />
      <img alt="random" className="images1" src={randomImg + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
