new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        clicado(){
            alert("clicado");
        },
        alterarValor(e){
            this.valor = e.target.value;
        }
    }
})