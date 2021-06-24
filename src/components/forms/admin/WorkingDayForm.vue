<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.period_id" label="Period" v-model="form.period_id"></v-select>
        <v-select :rules="rules.personnel_group_id" label="Personnel Group"
                  v-model="form.personnel_group_id"></v-select>
        <v-text-field :rules="rules.days" label="Days" type="number" v-model="form.days"></v-text-field>
        <v-text-field :rules="rules.hours" label="Hours" type="number" v-model="form.hours"></v-text-field>
        <v-text-field :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-text-field>
        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'WorkingDayForm',
        props: {
            errors: {
                type: Object
            },
            days: {
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
                form: {
                    period_id: "",
                    personnel_group_id: "",
                    days: 0,
                    hours: 0,
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
