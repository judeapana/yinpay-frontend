<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_meta_id" label="User" v-model="form.user_meta_id"></v-select>
        <v-select :rules="rules.deduction_group_id" label="Deduction Group"
                  v-model="form.deduction_group_id"></v-select>
        <v-text-field :rules="rules.rate" label="Rate" type="number" v-model="form.rate"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    export default {
        name: 'UserDeductionForm',
        props: {
            errors: {
                type: Object
            },
            deduction: {
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
                valid: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    deduction_group_id: [this.required(), this.api('deduction_group_id')],
                    rate: [this.required(), this.api('rate')],
                    disabled: [this.api('disabled')],
                },
                form: {
                    user_meta_id: "",
                    deduction_group_id: "",
                    rate: 0,
                    disabled: false
                }
            }
        }
    }
</script>
