<script setup>
import { ref, reactive, computed, watch, onMounted, onBeforeMount, onUnmounted } from "vue";

const message = ref('Hello World');
const countUpdated = ref(0);

onBeforeMount(() => {
    console.log(`CREATED CompositionAPI ${Date.now()}`)
});

onMounted(() => {
    console.log(`MOUNTED CompositionAPI to the DOM ${Date.now()}`)
});

onUnmounted(() => {
    console.log(`UNMOUNTED CompositionAPI to the DOM ${Date.now()}`)
});

watch(message, (newMessage, oldMessage) => {
    countUpdated.value+=1;
});

const modifiedMessage = computed(() => {
    return `${message.value.split('_')[0]}_${Date.now()}`;
});

const updateMessage = () => {
    message.value = `${message.value.split('_')[0]}_${Date.now()}`;
}
</script>

<template>
    <div>
        <h3>Hi, from CompositionAPI</h3>
        <p>{{ message }}</p>
        <p>{{ modifiedMessage }}</p>
        <p>{{ countUpdated }}</p>

        <button @click="updateMessage">Update Message</button>
    </div>
</template>

<style></style>