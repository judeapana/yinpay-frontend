<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-text-field label="Name Of Earning Group" v-model="form.name"></v-text-field>
        <v-text-field label="Personnel Group" v-model="form.personnel_group"></v-text-field>
        <v-text-field label="Amount" v-model="form.amount"></v-text-field>
        <v-text-field label="Notes" v-model="form.notes"></v-text-field>
        <v-text-field label="Per Day" v-model="form.per_day"></v-text-field>
        <v-text-field label="Allowance" v-model="form.allowance"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'EarningGroupForm',
        props: {errors: {
                type: Object
            },
            earning: {
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
