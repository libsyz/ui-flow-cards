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
    "donutChartWireframe1",
    "donutChartWireframe2",
    "donutChartWireframe3",
    "donutChart1",
    "donutChart2",
    "donutChart3"
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
      this.drawDonutChart();
      this.chartsDrawn = true;
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
    this.donutChartWireframe1Target.classList.toggle("d-none");
    this.donutChartWireframe2Target.classList.toggle("d-none");
    this.donutChartWireframe3Target.classList.toggle("d-none");
  }

  toggleChart() {
    this.donutChart1Target.classList.toggle("d-none");
    this.donutChart2Target.classList.toggle("d-none");
    this.donutChart3Target.classList.toggle("d-none");
  }

  drawDonutChart() {
    new Chartkick.PieChart(
      "dashboard-4-chart-1",
      { "You Inc.": 65, Google: 10 },
      { thousands: ",", donut: true, legend: false }
    );

    new Chartkick.PieChart(
      "dashboard-4-chart-2",
      { "You Inc.": 65, Google: 10 },
      { thousands: ",", donut: true, legend: false }
    );

    new Chartkick.PieChart(
      "dashboard-4-chart-3",
      { "You Inc.": 65, Google: 10 },
      { thousands: ",", donut: true, legend: false }
    );
  }

}
