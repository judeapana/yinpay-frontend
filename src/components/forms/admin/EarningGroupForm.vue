<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="form" v-model="valid">
        <v-text-field :rules="rules.name" label="Name Of Earning Group" v-model="form.name"></v-text-field>
        <v-select :items="personnel_group" :rules="rules.personnel_group_id" item-text="name" item-value="id"
                  label="Personnel Group"
                  v-model="form.personnel_group_id"></v-select>
<!--        <v-text-field :rules="rules.amount" label="Amount" v-model="form.amount"></v-text-field>-->
        <v-text-field :rules="rules.notes" label="Notes" v-model="form.notes"></v-text-field>
        <v-switch :rules="rules.per_day" hint="Activate this mean the earning should be taken or calculated daily"
                  label="Per Day" v-model="form.per_day"></v-switch>
        <v-switch :rules="rules.allowance" label="Allowance" v-model="form.allowance"></v-switch>
        <v-btn :disabled="!valid" type="submit" v-text="button"></v-btn>
    </v-form>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name: 'EarningGroupForm',
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
        mounted() {
            this._get_personnel_group({page: -1}).then((personnel_groups) => {
                this.personnel_group = personnel_groups.data
            })
        },
        methods: {
            ...mapActions('personnel_group', ['_get_personnel_group'])
        },
        data() {
            return {
                personnel_group: [],
                rules: {
                    name: [this.api('name'), this.required()],
                    personnel_group_id: [this.api('personnel_group_id'), this.required()],
                    // amount: [this.api('amount'), this.required()],
                    notes: [this.api('notes'), this.required()],
                    per_day: [this.api('per_day')],
                    allowance: [this.api('allowance')]
                },
                valid: false,
                form: {
                    name: this.earning?.name || "",
                    personnel_group_id: this.earning?.personnel_group_id || '',
                    // amount: this.earning?.amount || "",
                    disabled: this.earning?.disabled || false,
                    notes: this.earning?.notes || "",
                    per_day: this.earning?.per_day || false,
                    allowance: this.earning?.allowance || false
                }
            }
        }
    }
</script>
