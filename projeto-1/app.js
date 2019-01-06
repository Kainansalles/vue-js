new Vue({
    el: '#app',
    data : {
        running : false,
        hasResult: false,
        playerLife : 100,
        monsterLife : 100,
        logs: []
    },
    methods: {
        startGame (){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        healAndHurt(){

        },
        attack(atack){
            if(atack){
                this.playerLife -= Math.round(1,5)
                this.monsterLife -= Math.round(2,3)
            }else{

            }
        }
    }
})