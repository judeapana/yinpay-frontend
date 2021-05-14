<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
                <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserPosition',
        props: {
            button: {
                type: String
            },
            position: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    position: {}
                }
            }
        },
    }
</script>

<style scoped>

</style>
