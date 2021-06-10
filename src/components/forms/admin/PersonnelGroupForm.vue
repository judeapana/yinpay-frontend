<template>
    <v-form @submit.prevent="$emit('on-submit',form)" ref="pf">
        <v-text-field label="Personnel Group Name"
                      v-model.trim="form.name">

        </v-text-field>
        <v-select :items="category" label="Personnel Category"
                  v-model.trim="form.category">
        </v-select>
        <v-textarea :rows="3" label="Description" v-model.trim="form.description"></v-textarea>
        <v-switch label="Disable" v-model="form.disabled"></v-switch>

        <v-btn class="pt-5" type="submit" v-text="button"></v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'PersonnelGroupForm',
        props: {
            errors: {
                type: Object
            },
            personnel_group: {
                type: Object
            },
            button: {
                type: String
            }
        },
        watch: {
            errors(value) {
                this.validate(this.$ref.pf, value.errors)
            }
        },
        data() {
            return {
                category: ['FullTime', 'PartTime', 'Intern', 'Contract'],
                rules: {
                    name: [this.required(), this.api('name')],
                    category: [this.required(), this.api('category')],
                    description: [],
                    disabled: [],
                },
                form: {
                    name: '',
                    category: '',
                    description: '',
                    disabled: false
                }
            }
        },
    }
</script>

<style scoped>

</style>
