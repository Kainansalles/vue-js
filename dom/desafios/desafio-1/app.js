new Vue({
    el: '#desafio',
    data : {
        nome: 'Kainan',
        idade : 21,
        ramdom : Math.random(),
        imagem : "https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg"
    },
    methods: {
        multiplcado: function(){
            return this.idade * 3
        }
    }
})