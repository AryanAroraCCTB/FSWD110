<script>
export default {
    created() {
        console.log(`CREATED Options API ${Date.now()}`)
    },
    mounted() {
        console.log(`MOUNTED Options API to the DOM ${Date.now()}`)
    },
    unmounted() {
        console.log(`UNMOUNTED Options API to the DOM ${Date.now()}`)
    },
    data() {
        return {
            message: 'Hello World',
            countUpdated: 0 
        }
    },
    computed: {
        modifiedMessage() {
            const modifiedMessage = this.message.split('_')[0]
            return `${modifiedMessage}_${Date.now()}`
        }
    },
    watch: {
        message(newMessage, oldMessage) {
            this.countUpdated++
        }
    },
    methods: {
        updateMessage() {
            this.message = `${this.message.split('_')[0]}_${Date.now()}`
        }
    }
}
</script>

<template>
    <div>
        <h3>Hi, from OptionsAPI</h3>
        <p>{{ message }}</p>
        <p>{{ modifiedMessage }}</p>
        <p>{{ countUpdated }}</p>

        <button @click="updateMessage">Update Message</button>
    </div>
</template>

<style></style>