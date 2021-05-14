<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
                <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserSsnForm',
        props: {
            button: {
                type: String
            },
            ssn: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    no: '',
                    notes: '',
                    active: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
