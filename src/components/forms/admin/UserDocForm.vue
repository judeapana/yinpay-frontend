<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-switch label="User" v-model="form.user_id"></v-switch>
        <v-date-picker label="Date" v-model="form.date"></v-date-picker>
        <v-file-input label="Document" v-model="form.doc"></v-file-input>
        <v-textarea label="Description" rows="3" v-model="form.description"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'UserBankForm',
        props: {
            button: {
                type: String
            },
            doc: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    user_id: {},
                    date: '',
                    doc: [],
                    description: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>
