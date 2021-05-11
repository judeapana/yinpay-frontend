<template>
    <v-form>
        <!--        General Settings-->
        <v-text-field v-model="form.company_name"></v-text-field>
        <v-text-field v-model="form.company_email"></v-text-field>
        <v-text-field v-model="form.company_address"></v-text-field>
        <v-text-field v-model="form.company_support_email"></v-text-field>
        <v-text-field v-model="form.company_support_phone_number"></v-text-field>
        <v-text-field v-model="form.company_logo"></v-text-field>

        <!--        Preference-->
        <v-text-field v-model="form.notify_on_payment_sms"></v-text-field>
        <v-text-field v-model="form.notify_on_payment_email"></v-text-field>
        <v-text-field v-model="form.enable_user_account"></v-text-field>
        <v-text-field v-model="form.send_payslip"></v-text-field>
        <v-text-field v-model="form.enable_otp_verification"></v-text-field>
        <v-text-field v-model="form.provide_user_portal"></v-text-field>
    </v-form>
</template>

<script>
    export default {
        name: 'Settings',
        data() {
            return {
                form: {
                    company_name: '',
                    company_email: '',
                    company_address: '',
                    company_support_email: '',
                    company_support_phone_number: '',
                    company_logo: '',
                    notify_on_payment_sms: '',
                    notify_on_payment_email: '',
                    enable_user_account: '',
                    enable_otp_verification: '',
                    send_payslip: '',
                    provide_user_portal: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
