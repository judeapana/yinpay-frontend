<template>
    <v-form @submit="$emit('on-submit',form)">
        <v-select label="User" v-model="form.user_id"></v-select>
        <v-switch label="Without Payment" v-model="form.without_pay"></v-switch>
        <v-select label="Type Of Leave" v-model="form.ltype"></v-select>
        <v-date-picker label="From Date" v-model="form.from_date"></v-date-picker>
        <v-date-picker label="To Date" v-model="form.to_date"></v-date-picker>
        <v-textarea label="Reason" v-model="form.reason"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'UserLeave',
        props: {
            button: {
                type: String
            },
            leave: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_meta_id: {},
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
