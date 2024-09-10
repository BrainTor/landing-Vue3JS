<template>

    <div class="main_container_game">
        <RouterLink to="/study">
            <Back_Button style="position: absolute; top: 50px;left:4%"></Back_Button>
        </RouterLink>

        <div class="row_ham">
            <div>
                <h2>Ваш уровень:</h2>
                <p>{{ this.lvl }}</p>
            </div>
            <div>
                <h2>Ваши деньги:</h2>
                <p style="color: #00FF00;">{{ this.money }}$</p>
            </div>

        </div>
        <img :src="img_src" ref="main_but" @click="click_button" width="600px" style="cursor: pointer;">
        <div class="row_ham">
            <div>
                <h2>Ваша энергия:</h2>
                <p>{{ this.energy }}</p>
            </div>
            <div>
                <h2>Ваши деньги в час:</h2>
                <p>{{ this.money_per_h }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import Back_Button from '@/components/UI/Back_Button.vue';
import axios from 'axios';
export default {
    name: 'Ham_Page',
    data() {
        return {
            money: 0,
            lvl: 1,
            money_per_h: 900,
            energy: 100,
            money_per_click: 1,
            one_time: true,
            img_src: require('@/assets/img/games/coin1.png'),
            sources: [
                require('@/assets/img/games/coin2.png'),
                require('@/assets/img/games/coin3.png'),
                require('@/assets/img/games/coin4.png'),
                require('@/assets/img/games/coin5.png'),
                require('@/assets/img/games/coin6.png'),
                require('@/assets/img/games/coin7.png')
            ],
            startTime: 0,
            endTime:0,
            local_ref:null
        }
    }, components: {
        Back_Button
    }, methods: {
        async send_location(ref , time) {
            axios.post('http://localhost:3000/send_location', {
                location: 'game_ham',
                referal: ref, 
                time:time
            })
        },
        click_button() {
            if (this.energy <= 0) return
            this.money += this.money_per_click
            this.energy -= this.money_per_click
            this.$refs.main_but.classList.add('animate')
            setTimeout(() => { this.$refs.main_but.classList.remove('animate') }, 301)
            localStorage.setItem('money', this.money)
            localStorage.setItem('energy', this.energy)
        },
        update_money() {
            setTimeout(() => {
                if (this.money > 1000 && this.lvl == 1) {
                    this.lvl++
                    this.energy = this.energy + 500
                    this.money_per_click += 10
                    this.img_src = this.sources[0]
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energy', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }

                if (this.money > 10000 && this.lvl == 2) {
                    this.lvl++
                    this.energy = parseInt(this.energy) + 500
                    this.img_src = this.sources[1]
                    this.money_per_click += 20
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energy', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }

                if (this.money > 100000 && this.lvl == 3) {
                    this.lvl++
                    this.energy = parseInt(this.energy) + 500
                    this.img_src = this.sources[2]
                    this.money_per_click += 30
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energy', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }

                if (this.money > 1000000 && this.lvl == 4) {
                    this.lvl++
                    this.energy = parseInt(this.energy) + 500
                    this.img_src = this.sources[3]
                    this.money_per_click += 40
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energy', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }

                if (this.money > 10000000 && this.lvl == 5) {
                    this.lvl++
                    this.energy = parseInt(this.energy) + 500
                    this.img_src = this.sources[4]
                    this.money_per_click += 52
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energy', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }

                if (this.money > 100000000 && this.lvl == 6) {
                    this.lvl++
                    this.energy = parseInt(this.energy) + 500
                    this.img_src = this.sources[5]
                    this.money_per_click += 60
                    localStorage.setItem('lvl', this.lvl)
                    localStorage.setItem('energys', this.energy)
                    localStorage.setItem('money_per_click', this.money_per_click)
                }


                setTimeout(() => {
                    this.money += this.money_per_h / 3600
                    localStorage.setItem('money', this.money)
                    this.update_money()
                }, 400)
            }, 600)

        }
    },
    mounted() {
        this.startTime = new Date();
        if(localStorage.getItem('ref')!=null)
            this.local_ref = localStorage.getItem('ref')
        if (this.one_time) {
            this.one_time = false
            setInterval(() => {
                //alert(100 + 500*(this.lvl-1))
                if (this.energy < (100 + 500 * (this.lvl - 1))) {
                    this.energy++
                    localStorage.setItem('energy', this.energy)
                }
            }, 1000)
        }

        if (localStorage.getItem('money') != null) this.money = parseFloat(localStorage.getItem('money'))
        if (localStorage.getItem('energy') != null) this.energy = parseFloat(localStorage.getItem('energy'))
        if (localStorage.getItem('lvl') != null) this.lvl = parseInt(localStorage.getItem('lvl'))
        if (localStorage.getItem('money_per_click') != null) this.money_per_click = parseInt(localStorage.getItem('money_per_click'))
        this.update_money()
        if (this.money > 1000 && this.lvl == 2) this.img_src = this.sources[0]

        if (this.money > 10000 && this.lvl == 3) this.img_src = this.sources[1]

        if (this.money > 100000 && this.lvl == 4) this.img_src = this.sources[2]

        if (this.money > 1000000 && this.lvl == 5) this.img_src = this.sources[3]

        if (this.money > 10000000 && this.lvl == 6) this.img_src = this.sources[4]

        if (this.money > 100000000 && this.lvl == 7) this.img_src = this.sources[5]

    },
    async beforeUnmount(){
        this.endTime = new Date();
        let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1000);
        totalTimeSpent = Math.floor(totalTimeSpent/60) != 0?
        `Минут: ${Math.floor(totalTimeSpent/60)}, Секунд: ${Math.floor(totalTimeSpent%60)}`:
        `Секунд: ${Math.floor(totalTimeSpent%60)}`
        await this.send_location(this.local_ref, totalTimeSpent)
    }
}
</script>

<style scoped>
.row_ham {
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: white;
}

.animate {
    animation-name: scope;
    animation-duration: 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
}

@keyframes scope {
    to {
        transform: scale(0.9);
    }
}
</style>