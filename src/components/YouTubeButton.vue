<template>
        <a 
            :href="href" 
            target="_blank" 
            class=" px-3 py-2 rounded border border-textColor
            hover:bg-red-600 transition-colors w-full text-center">
                {{ $slots }}
        </a>
</template>

<script lang="ts" setup>
    const props = defineProps({
        href: String
    })
</script>