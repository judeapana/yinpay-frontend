<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
                <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserBankForm',
        props: {
            button: {
                type: String
            },
            doc: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    date: '',
                    doc: '',
                    description: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
