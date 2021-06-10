<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-select label="User" v-model="form.user_meta"></v-select>
        <v-select label="Deduction Group" v-model="form.deduction_group"></v-select>
        <v-text-field label="Rate" type="number" v-model="form.rate"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'UserDeductionForm',
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
                    user_meta: {},
                    deduction_group: {},
                    rate: 0,
                    disabled: false
                }
            }
        }
    }
</script>
