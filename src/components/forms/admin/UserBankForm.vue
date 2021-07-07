<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>

        <v-select :items="banks" :rules="rules.bank_id" item-text="name" item-value="id" label="Bank"
                  v-model="form.bank_id"></v-select>

        <v-text-field :rules="rules.no" label="Bank Account Number" v-model="form.no"></v-text-field>
        <v-text-field :rules="rules.branch" label="Branch" v-model="form.branch"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-combobox :items="['GH']" :rules="rules.currency" label="Currency" v-model="form.currency"></v-combobox>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    import {mapActions} from "vuex";

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
        methods: {
            ...mapActions('user', ['_get_user']),
            ...mapActions('bank', ['_get_bank'])
        },
        mounted() {
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
            this._get_bank({page: -1}).then((banks) => {
                this.banks = banks.data
            })
        },

        data() {
            return {
                users: [],
                banks: [],
                valid: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    bank_id: [this.required(), this.api('bank_id')],
                    no: [this.required(), this.api('no')],
                    branch: [this.api('branch')],
                    disabled: [this.api('disabled')],
                    currency: [this.api('currency')],
                },
                form: {
                    user_meta_id: this.bank?.user_meta_id || "",
                    bank_id: this.bank?.bank_id || "",
                    no: this.bank?.no || '',
                    branch: this.bank?.branch || '',
                    disabled: this.bank?.disabled || false,
                    currency: this.bank?.currency || '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
