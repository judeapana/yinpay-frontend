<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="First Name"></v-text-field>
        <v-text-field label="Last Name"></v-text-field>
        <v-text-field label="Middle Name"></v-text-field>
        <v-text-field label="Staff ID"></v-text-field>
        <v-text-field label="Date Of Birth"></v-text-field>
                <v-btn v-text="button" type="submit"></v-btn>

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
                    first_name: '',
                    last_name: '',
                    middle_name: '',
                    other_name: '',
                    dob: '',
                    no: '',
                    department: {},
                    banks: [
                        {}
                    ],
                    associations: [
                        {}
                    ],
                    tin: {},
                    ssn: {},
                    user_meta: {
                        dob: '',
                        employment_date: '',
                    },
                    qld: [{}]
                }
            }
        },
    }
</script>

<style scoped>

</style>
