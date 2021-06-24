<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select label="Period" v-model="form.period_id"></v-select>
        <v-text-field label="Employee Rate" type="number" v-model="form.emp_rate"></v-text-field>
        <v-text-field label="Employer Rate" type="number" v-model="form.emper_rate"></v-text-field>
        <v-text-field label="Tier 1" type="number" v-model="form.tier1"></v-text-field>
        <v-text-field label="Tier 2" type="number" v-model="form.tier2"></v-text-field>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'SocialSecurityRateForm',
        props: {
            errors: {
                type: Object
            },
            ssr: {
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
                valid: false,
                rules: {
                    period_id: [this.required(), this.api('period_id')],
                    emp_rate: [this.required(), this.api('emp_rate')],
                    emper_rate: [this.required(), this.api('emper_rate')],
                    tier1: [this.required(), this.api('tier1')],
                    tier2: [this.required(), this.api('tier2')],
                },
                form: {
                    period_id: "",
                    emp_rate: 0,
                    emper_rate: 0,
                    tier1: 0,
                    tier2: 0,
                }
            }
        }
    }
</script>
