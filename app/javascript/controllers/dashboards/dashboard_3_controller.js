// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";
require("chartkick");
require("chart.js");

export default class extends Controller {
  static targets = [
    "main",
    "label",
    "columnChartWireframe",
    "donutChartWireframe",
    "columnChart",
    "donutChart",
  ];

  static classes = ["wireframe"];
  active = false;
  chartsDrawn = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  toggle() {
    this.toggleText();
    this.toggleWireframe();
    this.toggleChart();
    if (!this.chartsDrawn) {
      this.drawColumnChart();
      this.drawDonutChart();
      this.chartsDrawn = false;
    }
  }

  toggleText() {
    if (this.active == false) {
      this.active = true;
      this.mainTarget.classList.remove("wireframe");
      this.labelTarget.innerText = "See Wireframe";
    } else {
      this.active = false;
      this.mainTarget.classList.add("wireframe");
      this.labelTarget.innerText = "See Live";
    }
  }

  toggleWireframe() {
    this.columnChartWireframeTarget.classList.toggle("d-none");
    this.donutChartWireframeTarget.classList.toggle("d-none");
  }

  toggleChart() {
    this.columnChartTarget.classList.toggle("d-none");
    this.donutChartTarget.classList.toggle("d-none");
  }

  drawDonutChart() {
    new Chartkick.PieChart(
      "dashboard-3-chart-2",
      { "You Inc.": 65, Google: 10, Amazon: 17, Microsoft: 5, Other: 3 },
      { thousands: ",", donut: true, legend: true }
    );
  }

  drawColumnChart() {
    new Chartkick.ColumnChart(
      "dashboard-3-chart-1",
      {
        January: 12000,
        February: 23000,
        March: 17000,
        April: 27000,
        May: 30000,
      },
      { thousands: ",", library: { backgroundColor: "#000" } }
    );
  }
}
