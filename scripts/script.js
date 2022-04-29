const App = {
    data() {
        return {
            step: 1,
            counter: 0,
            maximum: 3,
            Add: {
                class: "add"
            },
            Remove: {
                class: "remove"
            },
            Reset: {
                class: "reset"
            }
        }
    },
    methods: {
        counterAdd() {
            if (this.counter < this.maximum){
                this.counter++;
            }
        },
        counterReset() {
            this.counter = 0;
        },
        counterRemove() {
            if(this.counter == 0){
                this.counter = this.counter;
            } else {
                this.counter--;
            }
        }
    }
}

const App2 = {
    data() {
        return {
            header: "Hello Sigma Students!",
            color: "black"
        }
    },
    methods: {
        Reverse() {
            this.header = this.header.split("").reverse().join("");
        },
        changeColor() {
            this.color = this.color === "black" ? "cadetblue" : "black";
        }
    }
}

Vue.createApp(App).mount("#app");
Vue.createApp(App2).mount("#app2");