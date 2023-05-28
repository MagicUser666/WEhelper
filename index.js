var Helper = new Vue({
    el: "#Helper",
    data() {
        return {
            serial: '',
            ip: ''
        }
    },
    methods: {

    }
});

function initData(serial, ip) {
    Helper.serial = serial;
    Helper.ip = ip;
}