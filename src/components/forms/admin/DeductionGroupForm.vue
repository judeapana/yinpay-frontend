<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field v-model="form.name"></v-text-field>
        <v-select v-model="form.personnel_group"></v-select>
        <v-text-field type="number" v-model="form.amount"></v-text-field>
        <v-switch v-model="form.disabled"></v-switch>
        <v-textarea v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'DeductionGroupForm',
        props: {
            deduction: {
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
