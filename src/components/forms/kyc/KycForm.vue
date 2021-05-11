<template>
    <v-form>
        <v-stepper non-linear v-model="e6" vertical>
            <v-stepper-step editable :rules="[() => false]" :complete="e6 > 1" step="1">Your Information
                <small class="pt-3">Your personal information of the business owner is required to complete the
                    KYC</small>
            </v-stepper-step>

            <v-stepper-content step="1">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="First Name" v-model="form.personal_info.first_name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Last Name" v-model="form.personal_info.last_name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Nationality" v-model="form.personal_info.nationality"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Passport" v-model="form.personal_info.passport"></v-text-field>
                    </v-col>
                </v-row>

                <v-menu
                        v-model="dobDialog"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="form.personal_info.dob" label="Date Of Birth" prepend-icon="mdi-calendar"
                                      readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="form.personal_info.dob" @input="dobDialog = false"></v-date-picker>
                </v-menu>

                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step editable :complete="e6 > 2" step="2">Your Business
                <small class="pt-3">The KYC requires to know more about your business</small>
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="Business Name" v-model="form.company_info.company_name"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field label="Business Address"
                                      v-model="form.company_info.company_address"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-select label="Business Type" :items="['']"
                                  v-model="form.company_info.company_type"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-file-input label="Proof Of Business" v-model="form.company_info.proof"></v-file-input>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-textarea label="Description" v-model="form.company_info.description"></v-textarea>
                    </v-col>
                </v-row>

                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step editable :complete="e6 > 3" step="3">Primary Account
                <small class="pt-3">The KYC requires to know your the account information of your company through which
                    you pay your
                    worker/staff</small>
            </v-stepper-step>

            <v-stepper-content step="3">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="Name Of Bank" v-model="form.account.bank_name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Account Number" v-model="form.account.account_number"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Account Code" v-model="form.account.code"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Account Name" v-model="form.account.account_name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Currency" v-model="form.account.currency"></v-text-field>
                    </v-col>
                </v-row>

                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step editable step="4">
                View setup instructions
            </v-stepper-step>

            <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e6 = 1">
                    Continue
                </v-btn>
                <v-btn text>
                    Cancel
                </v-btn>
            </v-stepper-content>
        </v-stepper>
    </v-form>
</template>

<script>
    export default {
        props: {
            kyc: {
                type: Object,
            },
            button: {
                type: String
            }
        },
        name: 'KycForm',
        data() {
            return {
                dobDialog: false,
                e6: 1,
                form: {
                    personal_info: {
                        first_name: '',
                        last_name: '',
                        nationality: '',
                        passport: '',
                        dob: '',
                    },
                    account: {
                        bank_name: '',
                        account_number: '',
                        code: '',
                        account_name: '',
                        currency: '',
                        primary: true,
                    },
                    company_info: {
                        company_address: '',
                        company_name: '',
                        company_type: '',
                        description: '',
                        proof: ''
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>
