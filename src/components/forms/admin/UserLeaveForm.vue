<template>
    <v-form @submit="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :rules="rules.user_id" label="User" v-model="form.user_id"></v-select>
        <v-select :rules="rules.ltype" label="Type Of Leave" v-model="form.ltype"></v-select>
        <v-date-picker :rules="rules.from_date" label="From Date" v-model="form.from_date"></v-date-picker>
        <v-date-picker :rules="rules.to_date" label="To Date" v-model="form.to_date"></v-date-picker>
        <v-textarea :rules="rules.reason" label="Reason" v-model="form.reason"></v-textarea>
        <v-switch :rules="rules.without_pay" label="Without Payment" v-model="form.without_pay"></v-switch>
        <v-switch :rules="rules.status" label="Status" v-model="form.status"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'UserLeaveForm',
        props: {
            errors: {
                type: Object
            },
            button: {
                type: String
            },
            leave: {
                type: Object
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
                    user_id: [this.required(), this.api('user_id')],
                    without_pay: [this.api('without_pay')],
                    ltype: [this.required(), this.api('ltype')],
                    from_date: [this.required(), this.api('from_date')],
                    to_date: [this.required(), this.api('to_date')],
                    reason: [this.required(), this.api('reason')],
                    status: [this.api('status')],
                },
                form: {
                    user_meta_id: "",
                    without_pay: false,
                    ltype: '',
                    from_date: '',
                    to_date: '',
                    reason: '',
                    status: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
