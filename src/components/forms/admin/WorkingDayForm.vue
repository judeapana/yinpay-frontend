<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="periods" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-select :items="personnel_groups" :rules="rules.personnel_group_id" item-text="name" item-value="id"
                  label="Personnel Group"
                  v-model="form.personnel_group_id"></v-select>
        <v-text-field :rules="rules.days" label="Days" min="0" type="number" v-model.number="form.days"></v-text-field>
        <v-text-field :rules="rules.hours" label="Hours" min="0" type="number"
                      v-model.number="form.hours"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-textarea :rules="rules.notes" label="Notes" v-model="form.notes"></v-textarea>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'WorkingDayForm',
        props: {
            errors: {
                type: Object
            },
            days: {
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
        methods: {
            ...mapActions('personnel_group', ['_get_personnel_group']),
            ...mapActions('period', ['_get_period']),
        },
        mounted() {
            this._get_personnel_group({page: -1}).then((personnel_groups) => {
                this.personnel_groups = personnel_groups.data
            })
            this._get_period({page: -1}).then((periods) => {
                this.periods = periods.data
            })
        },
        data() {
            return {
                personnel_groups: [],
                periods: [],
                valid: false,
                rules: {
                    period_id: [this.required(), this.api('period_id')],
                    personnel_group_id: [this.required(), this.api('personnel_group_id')],
                    days: [this.required(), this.api('days')],
                    hours: [this.required(), this.api('hours')],
                    disabled: [this.api('disabled')],
                    notes: [this.api('notes')],
                },
                form: {
                    period_id: "" || this.days?.period_id,
                    personnel_group_id: "" || this.days?.personnel_group_id,
                    days: 0 || this.days?.days,
                    hours: 0 || this.days?.hours,
                    disabled: this.days?.disabled,
                    notes: "" || this.days?.notes
                }
            }
        }
    }
</script>
