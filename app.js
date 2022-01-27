let vm = Vue.createApp({
    data() {
        return {
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                { name: 'John', age: 20 },
                { name: 'Ricky', age: 18 },
                { name: 'amy', age: 31 }
            ]
        }
    }
}).mount('#app');