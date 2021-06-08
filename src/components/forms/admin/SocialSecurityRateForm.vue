<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'SocialSecurityRateForm',
        props: {
            ssr: {
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
                    emp_rate: 0,
                    emper_rate: 0,
                    tier1: 0,
                    tier2: 0,
                }
            }
        }
    }
</script>
