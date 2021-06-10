<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-text-field label="Full Name" v-model="form.full_name"></v-text-field>
        <v-date-picker label="Date Of Birth" v-model="form.dob"></v-date-picker>
        <v-text-field label="Relationship" v-model="form.rel"></v-text-field>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'NextOfKinForm',
        props: {
            next_of_kin: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    full_name: '',
                    dob: '',
                    rel: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
