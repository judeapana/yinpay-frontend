<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>

</template>
<script>
    export default {
        name: 'BusinessAccountForm',
        props: {
            account: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    account_type: "",
                    account_number: "",
                    code: "",
                    account_name: "",
                    currency: "",
                    primary: ""
                }
            }
        }
    }
</script>
