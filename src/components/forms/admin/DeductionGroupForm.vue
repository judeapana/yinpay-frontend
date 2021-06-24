<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" v-model="form.name"></v-text-field>
        <v-select :rules="rules.personnel_group_id" v-model="form.personnel_group_id"></v-select>
        <v-text-field :rules="rules.amount" type="number" v-model="form.amount"></v-text-field>
        <v-switch :rules="rules.disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'DeductionGroupForm',
        props: {
            errors: {
                type: Object
            },
            deduction: {
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
                    personnel_group_id: [this.api('personnel_group_id'), this.required()],
                    amount: [this.api('amount'), this.required()],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                },
                form: {
                    name: "",
                    personnel_group: {},
                    amount: "",
                    disabled: false,
                    notes: "",
                    per_day: false,
                    allowance: false
                }
            }
        }
    }
</script>
