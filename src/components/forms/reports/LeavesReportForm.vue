<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-date-picker elevation="2" full-width range v-model="form.date"></v-date-picker>
        <v-text-field
                :rules="rules.date"
                label="From Date n To Date"
                prepend-icon="mdi-calendar"
                readonly
                v-model="form.date"
        ></v-text-field>
        <v-btn :disabled="!valid" type="submit">Generate</v-btn>
    </v-form>
</template>
<script>
    export default {
        name: "LeaveReportForm",
        data() {
            return {
                valid: false,
                rules: {
                    date: [this.required()]
                },
                form: {
                    date: ['', '']
                }
            }
        }
    }
</script>
