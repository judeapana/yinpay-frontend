<template>
    <v-form @submit.prevent="$emit('on-submit',form)">
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'WorkingDayForm',
        props: {
            days: {
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
                    days: 0,
                    hours: 0,
                    disabled: false,
                    notes: ""
                }
            }
        }
    }
</script>
