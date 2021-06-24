<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Allotted Name" v-model="form.name"></v-text-field>
        <v-date-picker :rules="rules.day" class="text-center" label="Date" v-model="form.day"></v-date-picker>
        <v-select :rules="rules.period" label="Period" v-model="form.period_id"></v-select>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>

</template>
<script>
    export default {
        name: 'AttendanceForm',
        props: {
            errors: {
                type: Object
            },
            attendance: {
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
                    day: [this.api('day'), this.required()],
                    period: [this.api('period'), this.required()],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                },
                valid: false,
                form: {
                    name: "",
                    day: "",
                    period_id: "",
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
