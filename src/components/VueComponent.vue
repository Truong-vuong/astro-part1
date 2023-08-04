<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title'])

console.log(props)
</script>
<template>
    <h1>Vue component {{ title }}</h1>
</template>