<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="User Name" v-model="form.username"></v-text-field>
        <v-text-field label="Password" v-model="form.password"></v-text-field>
        <v-text-field label="First Name" v-model="form.first_name"></v-text-field>
        <v-text-field label="Last Name" v-model="form.last_name"></v-text-field>
        <v-text-field label="Email Address" v-model="form.email_address"></v-text-field>
        <v-text-field label="Phone Number" v-model="form.phone_number"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-select label="Personnel Group" v-model="form.user_meta.personnel_group_id"></v-select>
        <v-select label="Department" v-model="form.user_meta.department_id"></v-select>
        <v-text-field label="Title" v-model="form.user_meta.title"></v-text-field>
        <v-text-field label="Marital Status" v-model="form.user_meta.marital_status"></v-text-field>
        <v-text-field label="Gender" v-model="form.user_meta.gender"></v-text-field>
        <v-text-field label="Religion" v-model="form.user_meta.religion"></v-text-field>
        <v-text-field label="Retired" v-model="form.user_meta.retired"></v-text-field>
        <v-text-field label="Resigned" v-model="form.user_meta.resigned"></v-text-field>
        <v-text-field label="Date Of Birth" v-model="form.user_meta.dob"></v-text-field>
        <v-text-field label="Address" v-model="form.user_meta.addr"></v-text-field>
        <v-text-field label="SSN" v-model="form.user_meta.ssn"></v-text-field>
        <v-text-field label="TIN" v-model="form.user_meta.tin"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'UserForm',
        props: {
            user: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    phone_number: '',
                    disabled: '',
                    user_meta: {
                        personnel_group_id: '',
                        department_id: '',
                        title: '',
                        marital_status: '',
                        gender: '',
                        religion: '',
                        retired: false,
                        resigned: false,
                        dob: '',
                        addr: '',
                        ssn: '',
                        tin: '',
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>
