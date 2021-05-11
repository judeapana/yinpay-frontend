<template>
    <v-form @submit.prevent="$emit('on-submit',form)">

    </v-form>
</template>

<script>
    export default {
        name: 'SpouseForm',
        props: {
            spouse: {
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
