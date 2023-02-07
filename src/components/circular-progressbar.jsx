import React from 'react';
import {CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './circular-progressbar.css'
import {innerChart, outerChart} from './chart-config'
const CircularProgressbar = () => {
		const bigValue = 95;
		const smallValue = 96;
		return (
				<div className='container'>
						<div className='widget'>
								<div className='widget__data'>
								
								</div>
								<div className='widget__chart outer'>
										<CircularProgressbarWithChildren
												value={smallValue}
												circleRatio={outerChart.circleRatio}
												strokeWidth={outerChart.strokeWidth}
												styles={buildStyles(outerChart.styles)}
										>
												<div className='inner'>
														<CircularProgressbarWithChildren
																value={bigValue}
																circleRatio={innerChart.circleRatio}
																strokeWidth={innerChart.strokeWidth}
																styles={buildStyles(innerChart.styles)}
														>
																<div className='inner__percent'>
																		<b className='big'>{bigValue}</b>
																		<span className='small'>%</span>
																</div>
														</CircularProgressbarWithChildren>
												</div>
												<div className='outer__percent'>
														<b className='small'>{smallValue}</b>
														<span className='small'>%</span>
												</div>
										</CircularProgressbarWithChildren>
								</div>
						</div>
				</div>
		);
};

export default CircularProgressbar;