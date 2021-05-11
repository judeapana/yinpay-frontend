<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field autofocus type="email" label="Email Address" v-model="form.email"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'ForgotPwdForm',
        props: {
            forgot_pwd: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    email: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
