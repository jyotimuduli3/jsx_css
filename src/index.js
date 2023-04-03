import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    {/* <h1 className="heading" contentEditable="true" spellCheck="false"> */}
    <h1 className="heading">My Favourite Foods</h1>
    {/* <ul>
      <li>Chicken</li>
      <li>Fish</li>
      <li>Mushroom</li>
    </ul> */}
    <div>
      <img
        className="img"
        src="https://recipesofhome.com/wp-content/uploads/2020/03/chicken-curry-recipe.jpg"
        alt="chicken"
      />
      <img
        className="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHb9GC-sxEgT-RAYw1LBbxqjRaEt6q267Cqz59qud&s"
        alt="fish"
      />
      <img
        className="img"
        src="https://static.toiimg.com/photo/84753069.cms"
        alt="mushroom"
      />
    </div>
    <div>
      <img className="random-img" src={img} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
