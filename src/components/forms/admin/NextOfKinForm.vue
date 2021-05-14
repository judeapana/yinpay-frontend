<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn v-text="button" type="submit"></v-btn>

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
                    image: ''
                }
            }
        },
    }
</script>

<style scoped>

</style>
