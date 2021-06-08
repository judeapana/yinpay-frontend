<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'TaxForm',
        props: {
            tax: {
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
                    personnel_group: {},
                    name: "",
                    rate: 0,
                    disabled: false,
                    automate: false,
                    notes: ""
                }
            }
        }
    }
</script>
