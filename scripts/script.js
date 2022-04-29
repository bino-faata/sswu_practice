const App = {
    data() {
        return {
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
                document.querySelector("#message").innerHTML = "";
            }
        },
        counterReset() {
            this.counter = 0;
        },
        counterRemove() {
            if(this.counter != 0){
                this.counter--;
            } else {
                document.querySelector("#message").innerHTML = "Counter should be 0 or greater!";
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