// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
require("chartkick")
require("chart.js")

export default class extends Controller {
  static targets = [ "main", "label", "wireframe", "chart" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
    new Chartkick["LineChart"]("chart-1", {"2020-01-01": 11000,
                                           "2020-02-01": 12000,
                                           "2020-03-01": 23000,
                                           "2020-04-01": 17000,
                                           "2020-05-01": 27000,
                                           "2020-06-01": 30000 }
                                           ,
                                           {thousands: ",",
                                            library: { backgroundColor: "#000"} });
  }

  toggle() {
    this.toggleText()
    this.toggleWireframe();
    this.toggleChart();
  }

  toggleText(){
    if (this.active == false) {
      this.active = true;
      this.mainTarget.classList.remove('wireframe');
      this.labelTarget.innerText = "See Wireframe";
    } else {
      this.active = false;
      this.mainTarget.classList.add('wireframe');
      this.labelTarget.innerText = "See Live"
    }
  }


  toggleWireframe() {
    this.wireframeTarget.classList.toggle('d-none');
  }

  toggleChart() {
    this.chartTarget.classList.toggle('d-none');
  }

}
