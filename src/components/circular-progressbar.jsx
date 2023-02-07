import React from 'react';
import {CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './circular-progressbar.css'
import {innerChart, outerChart} from '../utils/chart-config'
import ProgressProvider from '../utils/progress-provider'
const CircularProgressbar = () => {
		const bigValue = 95;
		const smallValue = 96;
		return (
				<div className='container'>
						<div className='widget'>
								<div className='widget__data'>
								
								</div>
								<div className='widget__chart outer'>
										<ProgressProvider valueStart={0} valueEnd={smallValue}>
												{value =>
														<CircularProgressbarWithChildren
																value={value}
																circleRatio={outerChart.circleRatio}
																strokeWidth={outerChart.strokeWidth}
																styles={buildStyles(outerChart.styles)}
														>
																<div className='inner'>
																		<ProgressProvider valueStart={0} valueEnd={bigValue}>
																				{value =>
																						<CircularProgressbarWithChildren
																								value={value}
																								circleRatio={innerChart.circleRatio}
																								strokeWidth={innerChart.strokeWidth}
																								styles={buildStyles(innerChart.styles)}
																						>
																								<div className='inner__percent'>
																										<b className='big'>{value}</b>
																										<span className='small'>%</span>
																								</div>
																						</CircularProgressbarWithChildren>}
																		</ProgressProvider>
																		
																</div>
																<div className='outer__percent'>
																		<b className='small'>{value}</b>
																		<span className='small'>%</span>
																</div>
														</CircularProgressbarWithChildren>}
										</ProgressProvider>
										
								</div>
						</div>
				</div>
		);
};

export default CircularProgressbar;