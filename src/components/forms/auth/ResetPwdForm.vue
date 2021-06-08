<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="reset_pwd" v-model="valid">
        <v-text-field :rules="rules.password" label="New Password" type="password"
                      v-model="form.password"></v-text-field>
        <v-text-field :rules="rules.confirm_pwd" label="Confirm Password" type="password"
                      v-model="form.confirm_pwd"></v-text-field>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'ResetPwdForm',
        props: {
            errors: {
                type: Object
            },
            reset_pwd: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.reset_pwd, value.errors)
            }
        },
        data() {
            return {
                valid: false,
                rules: {
                    password: [this.required(), this.api('password')],
                    confirm_pwd: [this.required(), this.matches(this, 'form.password', "Password and confirm password must be the same")],
                },
                form: {
                    password: '',
                    confirm_pwd: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
