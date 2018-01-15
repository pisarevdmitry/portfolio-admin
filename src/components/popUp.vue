<template lang="pug">
    .popUp
        div Сообщение отправлено
        app-button(title="Закрыть")
</template>
<script>
    export default {

        components: {

            AppButton: require('./button')
        }
    }
</script>
<style src="styles/popUp.scss" lang="scss" scoped></style>