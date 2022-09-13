<template>
	<Row align="middle">   
		<Col flex="6"> </Col>
	    <Col flex="16">
				<Menu mode="horizontal" :accordion="true" theme="light" v-model:active-name="menuname" @on-select="changemenu">
					<MenuItem name="1" to="/home">
					<Icon type="ios-home" />
					首页
					</MenuItem>
					<Submenu name="2">
						<template #title>
							<Icon type="ios-stats" />
							Java
						</template>
						<MenuItem name="2-1" to="/java/j1">java1</MenuItem>
						<MenuItem name="2-2" to="/java/j2">java2</MenuItem>
						<MenuItem name="2-3" to="/java/j3">java3</MenuItem>
					</Submenu>
					<Submenu name="3">
						<template #title>
							<Icon type="ios-stats" />
							前端
						</template>
						<MenuItem name="3-1" to="/font/f1">font1</MenuItem>
						<MenuItem name="3-2" to="/font/f2">font2</MenuItem>
						<MenuItem name="3-3" to="/font/f3">font3</MenuItem>
					</Submenu>
					<Submenu name="4">
						<template #title>
							<Icon type="ios-stats" />
							Golang
						</template>
						<MenuItem name="4-1" to="/golang/g1">golang1</MenuItem>
						<MenuItem name="4-2" to="/golang/g2">golang2</MenuItem>
						<MenuItem name="4-3" to="/golang/g3">golang3</MenuItem>
					</Submenu>
					<Submenu name="5">
						<template #title>
							<Icon type="ios-stats" />
							区块链
						</template>
						<MenuItem name="5-1" to="/block/b1">block1</MenuItem>
						<MenuItem name="5-2" to="/block/b2">block2</MenuItem>
						<MenuItem name="5-3" to="/block/b3">block3</MenuItem>
					</Submenu>
					<Submenu name="6">
						<template #title>
							<Icon type="md-document" />
							文档
						</template>
						<MenuItem name="6-1" to="/doc/d1">doc1</MenuItem>
						<MenuItem name="6-2" to="/doc/d2">doc2</MenuItem>
						<MenuItem name="6-3" to="/doc/d3">doc3</MenuItem>
					</Submenu>
					<Submenu name="7">
						<template #title>
							<Icon type="ios-hammer" />
							工具
						</template>
						<MenuItem name="7-1" to="/tool/t1">tool1</MenuItem>
						<MenuItem name="7-2" to="/tool/t2">tool2</MenuItem>
						<MenuItem name="7-3" to="/tool/t3">tool3</MenuItem>
					</Submenu>
				</Menu>
		</Col>
		<Col flex="1" class-name="login"> 
			<Button type="info" ghost>login</Button>
		</Col>
	</Row>
</template>
<script>
	export default {
		props:{
			menuname:{
				type:String
			}
		},
		setup(props,context) {
				const menuname=props.menuname;
		        const changemenu = (val) => {
		            context.emit('changemenu',val)
		        }
		        return { changemenu,menuname}
		    },
	}
</script>
