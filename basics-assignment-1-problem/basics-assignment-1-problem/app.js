const app = Vue.createApp({
    data() {
        return {
            name: 'MrK',
            age: 20,
            imgUrl: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1'
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