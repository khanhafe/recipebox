import React from "react";
class App extends React.Component {
  state = {
    recipes: [
      { recipeName: "lemonrice1", ingredients: ["lemon1", "rice", "chilly"] },
      { recipeName: "lemonrice2", ingredients: ["lemon2", "rice", "chilly"] },
      { recipeName: "lemonrice3", ingredients: ["lemon3", "rice", "chilly"] }
    ]
  };
  render() {
    //const { recipes } = this.state;
    return (
      <div className="App container">
        {this.state.recipes.map((rec, index) => (
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#" + rec.recipeName}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {rec.recipeName}
                  </button>
                </h5>
              </div>

              <div
                id={rec.recipeName}
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  {rec.ingredients.map(ing => <li>{ing}</li>)}
                </div>
                <button className="btn btn-success">Edit</button>{" "}
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
