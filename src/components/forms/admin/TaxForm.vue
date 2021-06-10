<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-combobox items="" label="Tax Name" v-model="form.name"></v-combobox>
        <v-select label="Period" v-model="form.period"></v-select>
        <v-select label="Personnel Group" v-model="form.personnel_group"/>
        <v-text-field label="Rate" v-model="form.rate"></v-text-field>
        <v-text-field label="Disabled" v-model="form.disabled"></v-text-field>
        <v-select label="Automate" v-model="form.automate"></v-select>
        <v-textarea label="Notes" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'TaxForm',
        props: {
            tax: {
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
                    name: "",
                    rate: 0,
                    disabled: false,
                    automate: false,
                    notes: ""
                }
            }
        }
    }
</script>
