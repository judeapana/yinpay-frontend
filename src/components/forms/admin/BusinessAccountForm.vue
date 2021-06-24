<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-row>
            <v-col cols="6">
                <v-select :items="['Bank Account', 'Mobile Money']" :rules="rules.account_type" label="Account Type"
                          v-model="form.account_type"></v-select>
            </v-col>
            <v-col cols="6">
                <v-text-field :rules="rules.account_name" label="Account Name"
                              v-model="form.account_name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field :rules="rules.code" label="Code" v-model="form.code"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select :items="['GH']" :rules="rules.currency" label="Currency" v-model="form.currency"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-switch label="Primary" v-model="form.primary"></v-switch>
            </v-col>
        </v-row>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>

</template>
<script>
    export default {
        name: 'BusinessAccountForm',
        props: {
            errors: {
                type: Object
            },
            account: {
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
                rules: {
                    account_type: [this.required(), this.api('account_type')],
                    account_name: [this.required(), this.api('account_name')],
                    code: [this.required(), this.api('code')],
                    currency: [this.required(), this.api('currency')],
                    primary: [this.api('primary')]
                },
                valid: false,
                form: {
                    account_type: "",
                    account_number: "",
                    code: "",
                    account_name: "",
                    currency: "",
                    primary: false
                }
            }
        }
    }
</script>
