<template lang="pug">
    .blog
        h2.title Страница &laquo Блог &raquo
        .form
            h3.form-title Добавить запись
            .row
                app-input(
                type="text",
                placeholder="Название"
                )
            .row
                app-input(
                type="text",
                placeholder="Дата"
                )
            .row
                textarea.input.blog-textarea(
                placeholder="Содержание"
                )
            .row
                app-button(
                title="Добавить"
                )



</template>
<script>
    export default {
        components: {
            AppButton: require('./button'),
            AppInput: require('./input.vue')
        }
    }
</script>
<style src="styles/blog.scss" lang="scss" scoped></style>