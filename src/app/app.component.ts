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
	superOptions: any[];

  constructor() {}
	
	ngOnInit(): void {
		this.superOptions = [];

		this.superOptions.push({
			name: 'Speed Vertical',
			options: this.getSolidGaugeOptions('Speed Dial', [{
				name: 'Speed',
				data: [80],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color: black' +
										'">{y}</span><br/>' +
									'<span style="font-size:12px;color:silver">kmph</span></div>'
				},
				tooltip: {
						valueSuffix: ' kmph'
				}
			}],  0, 100, -90, 90, {
					backgroundColor:  '#EEE',
					innerRadius: '60%',
					outerRadius: '100%',
					shape: 'arc'
				})
		});

		this.superOptions.push({
			name: 'Fuel Vertical',
			options: this.getSolidGaugeOptions('Fuel Gauge',[{
				name: 'Track1',
				data: [{
					color: '#EEE',
					radius: '95%',
					innerRadius: '88%',
					y: 90
				}]
			}, {
				name: 'Track2',
				data: [{
					color: '#EFF',
					radius: '75%',
					innerRadius: '63%',
					y: 65
				}]
			}, {
				name: 'Track3',
				data: [{
					color: '#FEE',
					radius: '55%',
					innerRadius: '38%',
					y: 50
				}]
			}], 0, 200, 0, 360, [{
					outerRadius: '95%',
					innerRadius: '88%',
					backgroundColor: '#EEE',
					borderWidth: 0
				}, {
					outerRadius: '75%',
					innerRadius: '63%',
					backgroundColor: '#EFF',
					borderWidth: 0
				}, {
					outerRadius: '55%',
					innerRadius: '38%',
					backgroundColor: '#FEE',
					borderWidth: 0
				}]
			)
		});
		
		this.superOptions.push({
			name: 'RPM Vertical',
			options: this.getSolidGaugeOptions('RPM Gauge', [{
				name: 'RPM',
				data: [3500],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color: black' +
										'">{y}</span><br/>' +
									'<span style="font-size:12px;color:silver">RPM</span></div>'
				},
				tooltip: {
						valueSuffix: ' RPM'
				}
			}], 0, 10000, -90, 90, {
					backgroundColor:  '#EEE',
					innerRadius: '60%',
					outerRadius: '100%',
					shape: 'arc'
				})
		});
	}



	private getSolidGaugeOptions(title, series, min, max, startAngle, endAngle, paneBackground): any {
		var options = {
			chart: {
				type: 'solidgauge'
			},    
			title: {text: title},
			pane: {
				// center: ['50%', '85%'],
				size: '100%',
				startAngle: startAngle,
				endAngle: endAngle,
				background: paneBackground
			},

			tooltip: {
					enabled: true
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
				// title: {
				// 		y: -70
				// },
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

			series: series
		};
		return options;
	}
}
