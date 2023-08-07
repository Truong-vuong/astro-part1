<script setup>
import { vueState } from '../../store.js';
import { useStore } from '@nanostores/vue';
console.log(vueState.value)
</script>

<template>
    <h2> vue {{ vueState.value.name }}</h2>
</template>