new Vue({
    el: '#app',
    data : {
        running : false,
        playerLife : 100,
        monsterLife : 100,
        explosionMonster : false,
        explosionPlayer : false,
        explosionLife : false,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame (){
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = []
        },
        healAndHurt(){
            this.explosionLife = true
            this.explosionPlayer = true
            this.heal(9, 15)
            this.hurt('playerLife', 9,12,'Jogador', false, 'Monstro', 'monster')
            setTimeout(() => {
                this.explosionLife = false
                this.explosionPlayer = false
            }, 500);
        },
        attack(especial){
            this.explosionMonster = true
            this.hurt('monsterLife',7, 10, 'Monstro', especial, 'Jogador', 'player')
            if(this.monsterLife > 0){
                setTimeout(() => {
                    this.explosionPlayer = true
                    this.hurt('playerLife', 9,12,'Jogador', false, 'Monstro', 'monster')
                }, 500);
            }
            setTimeout(() => { this.explosionMonster = false }, 500);
            setTimeout(() => { this.explosionPlayer  = false }, 1000);
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.max(this.playerLife + heal, 0)
            this.registerLog(`Jogador recuperou ${heal} de vida.`, 'heal')
        },
        hurt(player, min, max, target, especial, source, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[player] = Math.max(this[player] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },
    },
    watch: {
        hasResult(value) {
            if (value)
                this.running = false
        }
    }
})