<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-select label="Period" v-model="form.period"></v-select>
        <v-select label="User" v-model="form.user_meta"></v-select>
        <v-text-field label="Main Amount" type="number" v-model="form.main_amount"></v-text-field>
        <v-text-field label="Emergency Amount" type="number" v-model="form.emergency_amount"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea label="Notes" rows="2" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'DailyRateForm',
        props: {
            daily_rate: {
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
                    user_meta: {},
                    main_amount: "",
                    emergency_amount: "",
                    disabled: "",
                    notes: ""
                }
            }
        }
    }
</script>
