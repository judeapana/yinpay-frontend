<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="periods" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-text-field :rules="rules.emp_rate" label="Employee Rate" type="number"
                      v-model.number="form.emp_rate"></v-text-field>
        <v-text-field :rules="rules.emp_rate" label="Employer Rate" type="number"
                      v-model.number="form.emper_rate"></v-text-field>
        <v-text-field :rules="rules.tier1" label="Tier 1" type="number" v-model.number="form.tier1"></v-text-field>
        <v-text-field :rules="rules.tier2" label="Tier 2" type="number" v-model.number="form.tier2"></v-text-field>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'SocialSecurityRateForm',
        props: {
            errors: {
                type: Object
            },
            ssr: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                console.log(value)
                this.validate(this.$refs.form, value.errors)
            }
        },
        methods: {
            ...mapActions('period', ['_get_period'])
        },
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.periods = periods.data
            })
        },
        data() {
            return {
                periods: [],
                valid: false,
                rules: {
                    period_id: [this.required(), this.api('period_id')],
                    emp_rate: [this.api('emp_rate')],
                    emper_rate: [this.api('emper_rate')],
                    tier1: [this.api('tier1')],
                    tier2: [this.api('tier2')],
                },
                form: {
                    period_id: this.ssr?.period_id || "",
                    emp_rate: this.ssr?.emp_rate || 0,
                    emper_rate: this.ssr?.emper_rate || 0,
                    tier1: this.ssr?.tier1 || 0,
                    tier2: this.ssr?.tier2 || 0,
                }
            }
        }
    }
</script>
