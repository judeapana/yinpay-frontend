<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Period Tag" v-model="form.name"></v-text-field>
        <v-date-picker :rules="rules.month" label="Month" v-model="form.month"></v-date-picker>
        <v-switch :rules="rules.make_payment" label="Issue Payment" v-model="form.make_payment"></v-switch>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" rows="3" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'PeriodForm',
        props: {
            errors: {
                type: Object
            },
            period: {
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
                    name: [this.api('name'), this.required()],
                    month: [this.api('month'), this.required()],
                    make_payment: [this.api('make_payment'), this.required()],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes'), this.required()],
                },
                form: {
                    name: "",
                    month: "",
                    make_payment: "",
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
