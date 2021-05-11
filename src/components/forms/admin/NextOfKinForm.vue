<template>
    <v-form @submit.prevent="$emit('on-submit',form)">

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
