var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "After School Classes",
        lessonsNavButton: "Lesson Details Route",
        userNavButton: "User Details Route",
        lessons: [],
    },  
    methods: {
        showLessons: function(){
            window.location.href = "/lessons";
        },
        showUser: function(){
            window.location.href = "/user";
        },
        async fetchData() {
            const response = await fetch('http://localhost:4000/lessons');
            this.lessons = await response.json();
        }
    },   
    created() {
        this.fetchData();
    },
    computed: {     
        async fetchData() {
            fetch('http://localhost:4000/lessons').then(
            function (response) {
            response.json().then(
                function (json) {
                    this.lessons = json;
                    console.log(this.lessons)
                });
            })
        },     
    }
});