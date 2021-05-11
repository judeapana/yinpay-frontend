<template>
    <v-form @submit="$emit('on-submit',form)">

        <v-btn v-text="button" type="submit"></v-btn>
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
