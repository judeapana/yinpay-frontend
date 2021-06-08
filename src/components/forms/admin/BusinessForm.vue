<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'BusinessForm',
        props: {
            business: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    name: "",
                    address: "",
                    support_email: "",
                    phone_number: "",
// logo:""
                    btype: "",
                    description: ""
                }
            }
        }
    }
</script>
