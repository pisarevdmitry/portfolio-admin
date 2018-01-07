<template lang="pug">
    input.input(
    v-bind:type="type"
    v-bind:placeholder="placeholder"
    v-bind:data-error="error"
     v-on:input="changeValue($event.target.value)"
    )



</template>
<script>
    export default {
        props: {
            value: String,
            error: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            changeValue(value) {
                this.$emit('input', value)
            }
        }
    }
</script>
<style src="styles/input.scss" lang="scss" scoped></style>