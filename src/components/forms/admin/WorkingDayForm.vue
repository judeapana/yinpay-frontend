<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="Period" v-model="form.period"></v-text-field>
        <v-text-field label="Personnel Group" v-model="form.personnel_group"></v-text-field>
        <v-text-field label="Days" type="number" v-model="form.days"></v-text-field>
        <v-text-field label="Hours" type="number" v-model="form.hours"></v-text-field>
        <v-text-field label="Disabled" v-model="form.disabled"></v-text-field>
        <v-textarea label="Notes" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'WorkingDayForm',
        props: {
            days: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    period: {},
                    personnel_group: {},
                    days: 0,
                    hours: 0,
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
