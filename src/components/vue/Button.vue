<script setup>
import { vueState, isCartOpen } from '../../store.js';
import { useStore } from '@nanostores/vue';

const $isCartOpen = useStore(isCartOpen);
const $vueState = useStore(vueState);

vueState.listen((profile, changed) => {
  console.log(`${changed} new value ${profile[changed]}`)
})
</script>
<template>
    <div>
        <button @click="vueState.setKey(name, 'Quy')">{{ $vueState.name }}</button>
        <button  @click="isCartOpen.set(!$isCartOpen)">
            Text button
        </button>
        <button v-if='!$isCartOpen'>12342323</button>
    </div>
</template>