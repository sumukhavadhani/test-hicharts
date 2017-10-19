import { Component } from '@angular/core';
import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'High Charts Example';
	chart: any;
  constructor() {
		// this.options = {
		// 	title : { text : 'simple chart' },
		// 	series: [{
		// 			data: [29.9, 71.5, 106.4, 129.2],
		// 	}]
		// };
		this.options = {
			chart: {
				type: 'solidgauge'
			},    
			title: {text: 'Solid Gauge'},
			pane: {
				center: ['50%', '85%'],
				size: '140%',
				startAngle: -90,
				endAngle: 90,
				background: {
					backgroundColor:  '#EEE',
					innerRadius: '60%',
					outerRadius: '100%',
					shape: 'arc'
				}
			},

			tooltip: {
					enabled: false
			},

			// the value axis
			yAxis: {
				stops: [
						[0.1, '#55BF3B'], // green
						[0.5, '#DDDF0D'], // yellow
						[0.9, '#DF5353'] // red
				],
				lineWidth: 0,
				minorTickInterval: null,
				tickAmount: 2,
				title: {
						y: -70,
						text: 'Speed'
				},
				labels: {
						y: 16
				},
				min: 0,
				max: 100
			},
			plotOptions: {
				solidgauge: {
					dataLabels: {
						y: 5,
						borderWidth: 0,
						useHTML: true
					}
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Speed',
				data: [80],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color: black' +
										'">{y}</span><br/>' +
									'<span style="font-size:12px;color:silver">km/h</span></div>'
				},
				tooltip: {
						valueSuffix: ' km/h'
				}
			}]
		};
	}
	options: any;
}
