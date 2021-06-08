<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'PeriodForm',
        props: {
            period: {
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
                    month: "",
                    make_payment: "",
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
