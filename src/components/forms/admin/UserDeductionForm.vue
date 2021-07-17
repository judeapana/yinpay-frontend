<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-select :items="period" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>
        <v-select :items="users" :rules="rules.user_meta_id" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
        <v-select :items="deduction_groups" :rules="rules.deduction_group_id" item-text="name" item-value="id"
                  label="Deduction Group"
                  v-model="form.deduction_group_id"></v-select>
        <v-text-field min="0" :rules="rules.rate" label="Rate" type="number" v-model.number="form.rate"></v-text-field>
        <v-switch :rules="rules.disabled" label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'UserDeductionForm',
        props: {
            errors: {
                type: Object
            },
            deduction: {
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
            ...mapActions('period', ['_get_period']),
            ...mapActions('user', ['_get_user']),
            ...mapActions('deduction_group', ['_get_deduction_group'])
        },
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
            this._get_deduction_group({page: -1}).then((deduction_groups) => {
                this.deduction_groups = deduction_groups.data
            })
        },
        data() {
            return {
                deduction_groups: [],
                period: [],
                users: [],
                valid: false,
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    deduction_group_id: [this.required(), this.api('deduction_group_id')],
                    period_id: [this.required(), this.api('period_id')],
                    rate: [this.required(), this.api('rate')],
                    disabled: [this.api('disabled')],
                },
                form: {
                    user_meta_id: this.deduction?.user_meta_id || "",
                    deduction_group_id: this.deduction?.deduction_group_id || "",
                    period_id: this.deduction?.period_id || "",
                    rate: this.deduction?.rate || 0,
                    disabled: this.deduction?.disabled || false
                }
            }
        }
    }
</script>
