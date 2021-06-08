<template>
    <v-form @submit.prevent="$emit('on-submit',form)" v-model="valid">
        <v-text-field :disabled="disable.username" :rules="rules.username" label="Username"
                      v-model.trim="form.username"></v-text-field>
        <v-text-field :rules="rules.password" label="Password" type="password"
                      v-model.trim="form.password"></v-text-field>
        <v-btn :disabled="!valid" :loading="getLoading" type="submit" v-text="button"></v-btn>
    </v-form>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {

        props: {
            disable: {
                type: Object,
                default: () => {
                    return {username: false}
                }
            },
            signIn: {
                type: Object
            },
            button: {
                type: String
            }
        },
        name: 'SignInForm',
        data() {
            return {
                valid: false,
                rules: {
                    username: [this.required('your username is required')],
                    password: [this.required('your password is required')]
                },
                form: {
                    username: this.signIn?.username || '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
