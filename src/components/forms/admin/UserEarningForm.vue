<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">

        <v-select :items="users" item-text="username" item-value="user_meta.id" label="User"
                  v-model="form.user_meta_id"></v-select>
        <v-select :items="period" :rules="rules.period_id" item-text="name" item-value="id" label="Period"
                  v-model="form.period_id"></v-select>

        <v-select :items="earning_groups" item-text="name" item-value="id" label="Earning Group"
                  v-model="form.earning_group_id"></v-select>
        <v-text-field min="0" label="Rate" type="number" v-model.number="form.rate"></v-text-field>
        <v-switch label="Disabled" v-model="form.disabled"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'UserEarningForm',
        props: {
            errors: {
                type: Object
            },
            earning: {
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
            ...mapActions('earning_group', ['_get_earning_group']),
        },
        mounted() {
            this._get_period({page: -1}).then((periods) => {
                this.period = periods.data
            })
            this._get_earning_group({page: -1}).then((earning_groups) => {
                this.earning_groups = earning_groups.data
            })
            this._get_user({page: -1}).then((users) => {
                this.users = users.data
            })
        },
        data() {
            return {
                period: [],
                users: [],
                earning_groups: [],
                rules: {
                    user_meta_id: [this.required(), this.api('user_meta_id')],
                    earning_group_id: [this.required(), this.api('earning_group_id')],
                    period_id: [this.required(), this.api('period_id')],
                    rate: [this.required(), this.api('rate')],
                    disabled: [this.api('disabled')],
                },
                valid: false,
                form: {
                    user_meta_id: this.earning?.user_meta_id || "",
                    earning_group_id: this.earning?.earning_group_id || "",
                    period_id: this.earning?.period_id || "",
                    rate: this.earning?.rate || 0,
                    disabled: this.earning?.disabled || false
                }
            }
        }
    }
</script>
