<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="Period Tag" v-model="form.name"></v-text-field>
        <v-date-picker label="Month" v-model="form.month"></v-date-picker>
        <v-switch label="Issue Payment" v-model="form.make_payment"></v-switch>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea label="Notes" rows="3" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'PeriodForm',
        props: {
            period: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
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
