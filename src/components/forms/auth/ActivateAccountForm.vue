<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field v-model="form.email" type="email" label="Email Address"></v-text-field>
        <v-btn v-text="button" type="submit"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: "ActivateAccountForm",
        props: {
            activate_acc: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    email: this?.email || ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
