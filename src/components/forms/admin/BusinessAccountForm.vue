<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="Account Type" v-model="form.account_type"></v-text-field>
        <v-text-field label="Account Name" v-model="form.account_name"></v-text-field>
        <v-text-field label="Code" v-model="form.code"></v-text-field>
        <v-select :items="['GH']" label="Currency" v-model="form.currency"></v-select>
        <v-switch label="Primary" v-model="form.primary"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>

</template>
<script>
    export default {
        name: 'BusinessAccountForm',
        props: {
            account: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    account_type: "",
                    account_number: "",
                    code: "",
                    account_name: "",
                    currency: "",
                    primary: ""
                }
            }
        }
    }
</script>
