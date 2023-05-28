var Helper = new Vue({
    el: "#Helper",
    data() {
        return {
            name: ''
        }
    },
    methods: {

    }
});

mp.events.add('initData', (name) => {
    this.Helper.name = name;
})