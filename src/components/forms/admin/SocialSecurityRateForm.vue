<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-select label="Period" v-model="form.period"></v-select>
        <v-text-field label="Employee Rate" type="number" v-model="form.emp_rate"></v-text-field>
        <v-text-field label="Employer Rate" type="number" v-model="form.emper_rate"></v-text-field>
        <v-text-field label="Tier 1" type="number" v-model="form.tier1"></v-text-field>
        <v-text-field label="Tier 2" type="number" v-model="form.tier2"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
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
                form: {
                    period: {},
                    emp_rate: 0,
                    emper_rate: 0,
                    tier1: 0,
                    tier2: 0,
                }
            }
        }
    }
</script>
