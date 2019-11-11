import Vue from "vue";
import D3BarChart from "./barchart/d3.barchart.vue";
import D3LineChart from "./linechart/d3.linechart.vue";
import D3SlopeChart from "./slopechart/d3.slopechart.vue";

const Components = {
    D3BarChart,
    D3LineChart,
    D3SlopeChart,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;