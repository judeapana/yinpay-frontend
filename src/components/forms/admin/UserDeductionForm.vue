<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'UserDeductionForm',
        props: {
            deduction: {
                type: Object
            },
            button: {
                type: String
            }
        },
        data() {
            return {
                form: {
                    user_meta: {},
                    deduction_group: {},
                    rate: 0,
                    disabled: false
                }
            }
        }
    }
</script>
