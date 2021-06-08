<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'DailyRateForm',
        props: {
            daily_rate: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    period: {},
                    user_meta: {},
                    main_amount: "",
                    emergency_amount: "",
                    disabled: "",
                    notes: ""
                }
            }
        }
    }
</script>
