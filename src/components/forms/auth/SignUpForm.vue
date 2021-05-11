<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field v-model.trim="form.first_name" label="First Name"></v-text-field>
        <v-text-field v-model.trim="form.last_name" label="Last Name"></v-text-field>
        <v-text-field type="email" v-model.trim="form.email" label="Email Address"></v-text-field>
        <v-text-field type="password" v-model="form.password" label="Password"></v-text-field>
        <v-text-field type="password" v-model="form.confirm_pwd" label="Confirm Password"></v-text-field>
        <v-btn v-text="button" type="submit"></v-btn>
    </v-form>
</template>

<script>
    export default {
        props: {
            signUp: {
                type: Object
            },
            button: {
                type: String
            }
        },
        name: 'SignUpForm',
        data() {
            return {
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_pwd: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
