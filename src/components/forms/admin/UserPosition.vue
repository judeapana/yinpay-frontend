<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
    </v-form>
</template>

<script>
    export default {
        name: 'UserPosition',
        data() {
            return {
                form: {}
            }
        },
    }
</script>

<style scoped>

</style>
