<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field :disabled="disable.username" label="Username" v-model.trim="form.username"></v-text-field>
        <v-text-field label="Password" v-model.trim="form.password"></v-text-field>
        <v-btn v-text="button" type="submit"></v-btn>
    </v-form>
</template>

<script>
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
                form: {
                    username: this.signIn?.username || '',
                    password: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
