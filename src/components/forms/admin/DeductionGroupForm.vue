<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
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
