<template>
    <v-form @submit="$emit('on-submit',form)">
        <v-btn v-text="button" type="submit"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserLeave',
        props: {
            button: {
                type: String
            },
            leave: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user: '',
                    issued_date: '',
                    end_period: '',
                    reason: '',
                    approved: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
