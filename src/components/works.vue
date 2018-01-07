<template lang="pug">
    .works
        h2.title Страница  &laquo Мои работы &raquo
        .form
            h3.form-title Добавить работу
            .row
                app-input(
                placeholder="Название проекта"
                type="text"
                )
            .row
                app-input(
                placeholder="Технологии"
                type="text"
                )
            .row
                label.upload
                    input.type-file(
                    type="file"
                        v-on:change="getFile($event)"
                    )
                    .upload__icon
                    .upload__text Загрузить картинку
            .row
                app-button(
                title="Добавить")

        


</template>
<script>
    export default {
        data: () => ({
            fields: {

                file: null
            }
        }),

        methods: {
            getFile(event) {
                const file = event.target.files[0];
                this.fields.file = file
            },
        },
        components: {
            AppButton: require('./button'),
            AppInput: require('./input.vue')
        }
    }
</script>
<style src="styles/works.scss" lang="scss" scoped></style>