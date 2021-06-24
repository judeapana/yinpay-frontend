<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Earning Group" v-model="form.name"></v-text-field>
        <v-text-field :rules="rules.personnel_group_id" label="Personnel Group"
                      v-model="form.personnel_group_id"></v-text-field>
        <v-text-field :rules="rules.amount" label="Amount" v-model="form.amount"></v-text-field>
        <v-text-field :rules="rules.notes" label="Notes" v-model="form.notes"></v-text-field>
        <v-select :rules="rules.per_day" label="Per Day" v-model="form.per_day"></v-select>
        <v-select :rules="rules.allowance" label="Allowance" v-model="form.allowance"></v-select>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'EarningGroupForm',
        props: {
            errors: {
                type: Object
            },
            earning: {
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
                    name: [this.api('name'), this.required()],
                    personnel_group_id: [this.api('personnel_group_id'), this.required()],
                    amount: [this.api('amount'), this.required()],
                    notes: [this.api('notes'), this.required()],
                    per_day: [this.api('per_day')],
                    allowance: [this.api('allowance')]
                },
                valid: false,
                form: {
                    name: "",
                    personnel_group_id: '',
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
