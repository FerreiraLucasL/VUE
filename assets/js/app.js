const { createApp } = Vue
const url = "./assets/js/amazing.json"

createApp({
    data() {
        return {
            events: undefined,
            filteredEvents: undefined,
            categories: undefined,
            searchValue: '',
            checked: []
        }
    },
    created() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.events = data.events
                this.filteredEvents = this.events
                this.categories = [...new Set(this.events.map(event => event.category))]
            })
            .catch(err => console.error(err))
    },
    methods: {
        filter() {
            this.filteredEvents = this.events.filter(event =>
                (this.checked.includes(event.category) || this.checked.length === 0)
                && event.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        }
    }

}).mount("#app")