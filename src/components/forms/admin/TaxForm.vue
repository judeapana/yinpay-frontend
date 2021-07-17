<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-combobox :items="['Tax Paye']" :rules="rules.name" label="Tax Name" v-model="form.name"></v-combobox>
        <v-switch :rules="rules.automate" :value="automate" label="Automated" readonly
                  v-model="form.automate"></v-switch>
        <v-select :items="periods" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-select :items="personnel_groups" :rules="rules.personnel_group_id" item-text="name" item-value="id"
                  label="Personnel Group" v-model="form.personnel_group_id"/>
        <v-text-field min="0" :disabled="automate" :rules="rules.rate" label="Rate" v-model.number="form.rate"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>

        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'TaxForm',
        props: {
            errors: {
                type: Object
            },
            tax: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$refs.form, value.errors)
            },
        },
        methods: {
            ...mapActions('period', ['_get_period']),
            ...mapActions('personnel_group', ['_get_personnel_group'])
        },
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.periods = periods.data
            })
            this._get_personnel_group({page: -1}).then((personnel_groups) => {
                this.personnel_groups = personnel_groups.data
            })
        },
        computed: {
            automate() {
                return this.form.name === "Tax Paye" || this.tax?.automate
            }
        },
        data() {
            return {
                valid: false,
                periods: [],
                personnel_groups: [],
                rules: {
                    name: [this.required(), this.api('name')],
                    period_id: [this.required(), this.api('period_id')],
                    personnel_group_id: [this.required(), this.api('personnel_group_id')],
                    rate: [this.api('rate')],
                    disabled: [this.api('disabled')],
                    automate: [this.api('automate')],
                    notes: [this.required(), this.api('notes')],
                },
                form: {
                    period_id: this.tax?.period_id || '',
                    personnel_group_id: this.tax?.personnel_group_id || '',
                    name: this.tax?.name || "",
                    rate: this.tax?.rate || 0,
                    disabled: this.tax?.disabled || false,
                    automate: this.tax?.automate || false,
                    notes: this.tax?.notes || ""
                }
            }
        }
    }
</script>
