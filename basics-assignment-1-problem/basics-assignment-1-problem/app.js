const app = Vue.createApp({
    data() {
        return {
            name: 'MrK',
            age: 20,
            imgUrl: 'https://aduka.asia/wp-content/uploads/2018/05/vuejs-1.png'
        }
    },

    methods: {
        agePlusFive() {
           return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }

})

const vm = app.mount('#assignment')