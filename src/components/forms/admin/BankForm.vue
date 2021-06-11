<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-text-field label="Name Of Bank" v-model="form.bank_name"></v-text-field>
        <v-text-field label="Account Name" v-model="form.account_name"></v-text-field>
        <v-text-field label="Account Code" v-model="form.code"></v-text-field>
        <v-text-field label="Currency" v-model="form.currency"></v-text-field>
        <v-switch label="Primary" v-model="form.primary"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'BankForm',
        props: {
            errors: {
                type: Object
            },
            bank: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                value: 100,
                form: {
                    bank_name: '',
                    account_number: '',
                    code: '',
                    account_name: '',
                    currency: '',
                    primary: true
                }
            }
        },
    }
</script>

<style scoped>

</style>
