import React from "react";
class App extends React.Component {
  state = {
    recipes: [
      { recipeName: "lemonrice1", ingredients: ["lemon", "rice", "chilly"] },
      { recipeName: "lemonrice2", ingredients: ["lemon", "rice", "chilly"] },
      { recipeName: "lemonrice3", ingredients: ["lemon", "rice", "chilly"] }
    ]
  };
  render() {
    const { recipes } = this.state;
    return (
      <div className="App container">
        {this.state.recipes.map((rec, index) => (
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="2"
                    aria-expanded="true"
                  >
                    {rec.recipeName}
                  </button>
                </h5>
              </div>

              <div
                id="2"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
