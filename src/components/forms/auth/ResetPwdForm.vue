<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="New Password" type="password" v-model="form.new_pwd"></v-text-field>
        <v-text-field label="Confirm Password" type="password" v-model="form.confirm_pwd"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'ResetPwdForm',
        props: {
            reset_pwd: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    new_pwd: '',
                    confirm_pwd: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
