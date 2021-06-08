<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="forgot_pwd" v-model="valid">
        <v-text-field :rules="rules.email_address"  label="Email Address" type="email"
                      v-model="form.email_address"></v-text-field>
        <v-btn :disabled="!valid" :loading="getLoading" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'ForgotPwdForm',
        props: {
            errors: {
                type: Object
            },
            forgot_pwd: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.forgot_pwd, value.errors)
            }
        },
        data() {
            return {
                valid: false,
                rules: {
                    'email_address': [this.required(), this.email(), this.api('email_address')]
                },
                form: {
                    email_address: ''
                }
            }
        }, computed: {
            ...mapGetters('auth', ['getLoading'])
        }
    }
</script>

<style scoped>

</style>
