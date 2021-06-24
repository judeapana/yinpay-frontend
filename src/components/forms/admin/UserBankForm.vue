<template>
    <v-form  @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_id" label="User" v-model="form.user_id"></v-select>
        <v-select :rules="rules.bank_id" label="Bank" v-model="form.bank_id"></v-select>
        <v-select :items="form.option" :rules="rules.code" label="Code" v-model="form.code"></v-select>
        <v-text-field :rules="rules.no" label="Bank Account Number" v-model="form.no"></v-text-field>
        <v-text-field :rules="rules.branch" label="Branch" v-model="form.branch"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-switch :rules="rules.currency" label="Currency" v-model="form.currency"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>

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
                rules: {
                    user_id: [this.required(), this.api('user_id')],
                    bank_id: [this.required(), this.api('bank_id')],
                    code: [this.api('code')],
                    no: [this.required(), this.api('no')],
                    branch: [this.api('branch')],
                    disabled: [this.api('disabled')],
                    currency: [this.api('currency')],
                },
                form: {
                    user_id: "",
                    bank_id: "",
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
