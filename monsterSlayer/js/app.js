new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    computed: {

    },
    methods: {
        startGame: function(params) {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.playerAttack(3, 10);
        },
        specialAttack: function() {
            this.playerAttack(10, 15);
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won this time! Wanna play again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0) {
                if(confirm('You lost this time! Wanna play again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }

            return false;
        },
        playerAttack: function(min, max) {
            var damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage;
            this.logAttack(true, 'Player hits Monster for ' + damage)
            if(!this.checkWin()) {
                this.monsterAttack();
            }
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.logAttack(false, 'Player hits Monster for ' + damage)
            this.checkWin();
        },
        logAttack: function(isPlayer, text) {
            this.turns.unshift({
                isPlayer: isPlayer,
                text: text
            });
        }
    },
    watch: {
        
    }
});
