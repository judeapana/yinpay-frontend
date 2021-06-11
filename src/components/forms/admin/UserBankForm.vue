<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">


        <v-select label="User" v-model="form.user_id"></v-select>
        <v-select label="Bank" v-model="form.bank_id"></v-select>
        <v-select :items="form.option" label="Code" v-model="form.code"></v-select>
        <v-text-field label="Bank Account Number" v-model="form.no"></v-text-field>
        <v-text-field label="Branch" v-model="form.branch"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-switch label="Currency" v-model="form.currency"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserBankForm',
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
            bank: {
                type: Object
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    bank_id: {},
                    code: '',
                    no: '',
                    branch: '',
                    disabled: false,
                    currency: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
