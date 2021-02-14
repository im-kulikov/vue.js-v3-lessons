Vue.createApp({
    data() {
        return {
            input: '',
            items: [],
        };
    },
    computed: {
        todo_size: function() {
            return this.items.filter(function(task) { return  !task.checked }).length
        },
        done_size: function() {
            return this.items.filter(function(task) { return !!task.checked }).length
        }
    },
    methods: {
        handle(event) {
            this.input = event.target.value;
        },

        update(index, type) {
            console.log(index, type);

            switch (type) {
            case "remove":
                this.items.splice(index, 1);
                return;
            case "done":
                this.items[index].checked = true;
                break;
            case "todo":
                this.items[index].checked = false;
                break;
            }
        },

        adding() {

            if (this.input === '') { return };

            this.items.push({
                id:      Math.random(),
                title:   this.input,
                checked: false,
            });
            
            this.input = '';
        },
        
    }
}
).mount('#app');