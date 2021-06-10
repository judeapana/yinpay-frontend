<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="User" v-model="form.user_id"></v-text-field>
        <v-date-picker label="date" v-model="form.date"></v-date-picker>
        <v-select :items="form.option" v-model="form.option"></v-select>
        <v-text-field v-model="form.account_name"></v-text-field>
        <v-text-field v-model="form.account_no"></v-text-field>
        <v-switch label="Activate" v-model="form.active"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'BankForm',
        props: {
            button: {
                type: String
            },
            bank: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    date: '',
                    option: ['BTC ADDRESS', 'BANK', 'ETC ADDRESS'],
                    account_name: '',
                    address: '',
                    account_no: '',
                    active: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
