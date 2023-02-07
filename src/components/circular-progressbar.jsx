import React, {useState} from 'react';
import {CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {innerChart, outerChart} from '../utils/chart-config'
import ProgressProvider from '../utils/progress-provider'

import './circular-progressbar.scss'
import  slash from '../assets/Slash.svg'

const CircularProgressbar = ({props}) => {
		
		const [predict, setPredict] = useState({current: 222555, target: 233555})
		const [nit, setNit] = useState({current: 222555, target: 233555})
		const changeValueHandler = () => {
				setNit({
						current: randomInteger(200000, 230000),
						target: randomInteger(230000, 250000),
				}
		);
				setPredict(
						{
								current: randomInteger(200000, 230000),
								target: randomInteger(230000, 250000),
						}
				);
		}
		function randomInteger(min, max) {
				let rand = min + Math.random() * (max + 1 - min);
				return Math.floor(rand);
		}
		function numberWithSpaces(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}
		
		return (
				<div className='container'>
						<div className='widget'>
								<div className='info'>
										<div className='info__data'>
												<div className='label'>нит</div>
												<div className='stats'>
														<div className='stats__current'>{numberWithSpaces(nit.current)}</div>
														<div>
																<img className='slash' src={slash}/>
														</div>
														<div className='stats__target'>{numberWithSpaces(nit.target)}</div>
												</div>
										</div>
										<div className='info__data'>
												<div className='label'>прогноз</div>
												<div className='stats'>
														<div className='stats__current'>{numberWithSpaces(predict.current)}</div>
														<div>
																<img className='slash' src={slash}/>
														</div>
														<div className='stats__target'>{numberWithSpaces(predict.target)}</div>
												</div>
										</div>
								</div>
								<div className='widget__chart outer'>
										<ProgressProvider
												valueStart={0}
												valueEnd={Math.round(nit.current / nit.target * 100)}
										>
												{value =>
														<CircularProgressbarWithChildren
																value={value}
																circleRatio={outerChart.circleRatio}
																strokeWidth={outerChart.strokeWidth}
																styles={buildStyles(outerChart.styles)}
														>
																<div className='inner'>
																		<ProgressProvider
																				valueStart={0}
																				valueEnd={Math.round(predict.current / predict.target * 100)}
																		>
																				{value =>
																						<CircularProgressbarWithChildren
																								value={value}
																								circleRatio={innerChart.circleRatio}
																								strokeWidth={innerChart.strokeWidth}
																								styles={buildStyles(innerChart.styles)}
																						>
																								<div className='inner__percent'>
																										<b className='big'>{value}</b>
																										<b className='small'>%</b>
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
						<button onClick={changeValueHandler}>Rand</button>
				</div>
		);
};

export default CircularProgressbar;