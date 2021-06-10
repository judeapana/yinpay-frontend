<template>
    <v-form @submit="$emit('on-submit',form)">
        <v-text-field v-model="form.title"></v-text-field>
        <v-date-picker v-model="form.date"></v-date-picker>
        <v-textarea rows="4" v-model="form.text"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'MemoForm',
        props: {
            button: {
                type: String
            },
            memo: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    title: '',
                    date: '',
                    text: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
