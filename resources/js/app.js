new Vue({
    el: '#app',
    data:{
    	clientes:[],
    },

	mounted:function(){
		this.cargaclientes();
	},

	methods:{
		cargaclientes:function(){
			axios.get('cliente')
			.then(response=>{
				this.clientes = response.data;
				//alert('xxx');
				console.log(this.clientes);
			});
		},
	},

});
