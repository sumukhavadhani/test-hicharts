import { Component, OnInit } from '@angular/core';
import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {	
	title = 'High Charts Example';
	chart: any;
	options: any[];

  constructor() {}
	
	ngOnInit(): void {
		this.options = [];
		this.options.push(this.getSolidGaugeOptions('Speed Dial', 'Speed', [60], 'kmph', 0, 100));
		this.options.push(this.getSolidGaugeOptions('Fuel Gauge', 'Fuel', [50], 'Litre', 0, 50));
		this.options.push(this.getSolidGaugeOptions('RPM Gauge', 'RPM', [3500], 'RPM', 0, 10000));
	}


	private getSolidGaugeOptions(title, seriesName, seriesValues, tooltipText, min, max): any {
		var options = {
			chart: {
				type: 'solidgauge'
			},    
			title: {text: title},
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
						text: seriesName
				},
				labels: {
						y: 16
				},
				min: min,
				max: max
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
				name: seriesName,
				data: seriesValues,
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color: black' +
										'">{y}</span><br/>' +
									'<span style="font-size:12px;color:silver">' + tooltipText + '</span></div>'
				},
				tooltip: {
						valueSuffix: ' ' + tooltipText
				}
			}]
		};
		return options;
	}
}
