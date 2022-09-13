<template>
	<Typography>
		<Title>关于 View UI Plus</Title>
		<Paragraph>
			View UI Plus 是 View Design 设计体系中基于 Vue.js 3 的一套 UI 组件库，主要用于企业级中后台系统。View UI Plus 提供了超过 80 个常用底层组件（如 <Text
				code>Button</Text>、<Text code>Input</Text>、<Text code>DatePicker</Text>等）及业务组件（如 City、Auth、Login 等）。
		</Paragraph>
		<Title :level="2">设计原则</Title>
		<blockquote>以下是对基本设计原则的概述，每一个优秀的设计中都应用了这些设计原则，它们相互关联，只应用某一个原则的情况很少。（出自《写给大家看的设计书》）</blockquote>
		<Title :level="3">对比</Title>
		<Paragraph>
			对比的基本思想是，要避免页面上的元素太过<Text strong>相似</Text>。如果元素（字体、颜色、大小、线宽、形状、空间等）<Text strong>不相同</Text>，那就干脆让它们<Text
				strong>截然不同</Text>。要让页面引人注意，对比通常是最重要的一个因素，正是它能使读者首先看这个页面。
		</Paragraph>
		<Title :level="3">重复</Title>
		<Paragraph>
			让设计中的视觉要素在整个作品中重复出现。可以重复颜色、形状、材质、空间关系、线宽、字体、大小和图片，等等。这样一来，既能增加<Text mark>条理性</Text>，还可以加强<Text
				mark>统一性</Text>。
		</Paragraph>
		<Title :level="2">特性</Title>
		<Paragraph>
			<ul>
				<li>丰富的组件和功能，满足绝大部分网站场景</li>
				<li>
					提供开箱即用的
					<Link to="/home">Admin 系统</Link> 和
					<Link to="/home">快速增删改查</Link> 表格组件，极大程度节省开发成本
				</li>
				<li>友好的 API ，自由灵活地使用空间</li>
				<li>细致、漂亮的 UI</li>
				<li>事无巨细的文档</li>
				<li>可自定义主题</li>
			</ul>
		</Paragraph>
		<Title :level="2">安装</Title>
		<Paragraph>
			<pre>$ npm install view-ui-plus --save</pre>
		</Paragraph>
		<Paragraph>
			按 <Text keyboard>⌘</Text> + <Text keyboard>K</Text> 键搜索组件...
		</Paragraph>
	</Typography>
</template>
<script>
	export default {
		data() {
			return {

			};
		},
		methods: {}
	};
</script>
