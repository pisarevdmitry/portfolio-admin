<template lang="pug">
    button(
    type="button",
    v-on:click.prevent="handleClick"
        v-bind:disabled="disabled"
    ) {{title}}
</template>
<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'Отправить'
            }
        },
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
    }
</script>
<style src="styles/button.scss" lang="scss" scoped></style>