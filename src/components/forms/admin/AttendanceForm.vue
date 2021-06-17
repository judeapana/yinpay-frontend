<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-text-field label="Allotted Name" v-model="form.name"></v-text-field>
        <v-date-picker class="text-center" label="Date" v-model="form.day"></v-date-picker>
        <v-select label="Period" v-model="form.period"></v-select>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea label="Notes" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
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
                form: {
                    name: "",
                    day: "",
                    period: {},
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
