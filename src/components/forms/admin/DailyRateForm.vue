<template>
    <v-form v-model="valid" @submit.prevent="$emit('on-submit',form)" ref="form">
        <v-select :rules="rules.period_id" label="Period" v-model="form.period_id"></v-select>
        <v-select :rules="rules.user_meta_id" label="User" v-model="form.user_meta_id"></v-select>
        <v-text-field :rules="rules.main_amount" label="Main Amount" type="number"
                      v-model="form.main_amount"></v-text-field>
        <v-text-field :rules="rules.emergency_amount" label="Emergency Amount" type="number"
                      v-model="form.emergency_amount"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" rows="2" v-model="form.notes"></v-textarea>
        <v-btn type="submit" v-text="button"></v-btn>

    </v-form>
</template>
<script>
    export default {
        name: 'DailyRateForm',
        props: {
            errors: {
                type: Object
            },
            daily_rate: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            }
        },
        data() {
            return {
                valid:false,
                rules: {
                    period_id: [this.api('period_id')],
                    main_amount: [this.api('main_amount')],
                    emergency_amount: [this.api('emergency_amount')],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                    user_meta_id: [this.api('user.user_meta.id')]

                },
                form: {
                    period_id: "",
                    user_meta_id: "",
                    main_amount: "",
                    emergency_amount: "",
                    disabled: "",
                    notes: ""
                }
            }
        }
    }
</script>
