<template>
	<div class="nav">
		<h1>NOTHING IS IMPOSSIBLE</h1>
		<h3 class="span loader">
			<span>t</span>
			<span>m</span>
			<span>l</span>
			<span>a</span>
			<span>e</span>
			<span>s</span>
			<span>.</span>
			<span>c</span>
			<span>o</span>
			<span>m</span>
		</h3>
		<Particles id="tsparticles" :particlesInit="particlesInit" :options="options" />
		<Image :src="require('../../static/img/'+vx)" fit="scale-down" width="80px" height="80px"
		 preview :preview-list="[require('../../static/img/'+vx)]" :infinite="false" :preview-tip="false" alt="vx.png">
		</Image>
	</div>
</template>
<script>
	import {loadFull} from "tsparticles";
	export default {
		setup() {
			const options = {
				background: {
				    color: {
				        value: '#000'
				    }
				},
				fpsLimit: 120,
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							area: 800
						}
					},
					color: {
						value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
					},
					shape: {
						type: "circle"
					},
					opacity: {
						value: 1
					},
					size: {
						value: {
							min: 1,
							max: 5
						}
					},
					links: {
						enable: true,
						distance: 150,
						color: {
							random: true,
							value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
						},
						opacity: 0.6,
						width: 1
					},
					move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: false,
						straight: false,
						outModes: "out"
					}
				},
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "grab"
						},
						onClick: {
							enable: true,
							mode: "push"
						}
					},
					modes: {
						grab: {
							distance: 140,
							links: {
								opacity: 1
							}
						},
						push: {
							quantity: 4
						}
					}
				}
			};

			const particlesInit = async (engine) => {
				await loadFull(engine);
			}
			return {
				options,
				particlesInit
			}
		},
		data() {
			return {
				vx: "vx.png"
			}
		},
		methods: {}
	};
</script>
<style>
	.nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 91vh;
		position: relative;
		background-color: white;
		/* background-color: #1e1f26; */
		text-align: center;
		padding: 0 2em;
	}

	.nav h1 {
		font-family: "Josefin Sans", sans-serif;
		font-size: 5vw;
		margin: 0;
		padding-bottom: 0.5rem;
		letter-spacing: 0.5rem;
		color: #03dac6;
		transition: all 0.3s ease;
		z-index: 3;
	}

	h1:hover {
		transform: translate3d(0, -10px, 22px);
		color: #ff0266;
	}

	h3.span {
		font-size: 2vw;
		/* letter-spacing: 0.7em; */
		font-family: "ROBOTO", sans-serif;
		font-weight: 300;
		color: #faebd7;
		z-index: 4;
	}

	span:hover {
		color: #ff0266;
		font-weight: 500;
		font-size: 2.2vw;
	}

	@media (min-width: 800px) {
		.nav h1 {
			font-size: 5vw;
		}
	}

	@media screen only (min-width: 360px) {
		.nav h1 {
			font-size: 8vw;
		}
	}

	.background {
		position: absolute;
		height: 100vh;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 0;
	}

	.loader span {
		color: #faebd7;
		text-shadow: 0 0 0 #faebd7;
		-webkit-animation: loading 1s ease-in-out infinite alternate;
	}

	@-webkit-keyframes loading {
		to {
			text-shadow: 20px 0 70px #ff0266;
			color: #ff0266;
		}
	}

	.loader span:nth-child(2) {
		-webkit-animation-delay: 0.1s;
	}

	.loader span:nth-child(3) {
		-webkit-animation-delay: 0.2s;
	}

	.loader span:nth-child(4) {
		-webkit-animation-delay: 0.3s;
	}

	.loader span:nth-child(5) {
		-webkit-animation-delay: 0.4s;
	}

	.loader span:nth-child(6) {
		-webkit-animation-delay: 0.5s;
	}

	.loader span:nth-child(7) {
		-webkit-animation-delay: 0.6s;
	}

	.loader span:nth-child(8) {
		-webkit-animation-delay: 0.7s;
	}
</style>
