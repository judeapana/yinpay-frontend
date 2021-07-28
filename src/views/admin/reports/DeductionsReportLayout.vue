<template>
    <v-card class="mx-auto" id="printable" tile>
        <v-card-title class="text-md-center">Payslip for {{data.period.name}}</v-card-title>
        <v-card-actions>
            <v-row>
                <v-col class="" md="6">
                    <table class="text-muted">
                        <tr>
                            <td>Company Name: {{getCurrentBs.name}}</td>
                        </tr>
                        <tr>
                            <td>Type: {{getCurrentBs.btype}}</td>
                        </tr>
                        <tr>
                            <td>Address : {{getCurrentBs.address}}</td>
                        </tr>
                        <tr>
                            <td>Our Email Address : {{getCurrentBs.support_email}}</td>
                        </tr>
                        <tr>
                            <td>Our Phone Number : {{getCurrentBs.phone_number}}</td>
                        </tr>
                    </table>
                </v-col>
                <v-col md="5">
                    <h4>Worker Information</h4>
                    <p>Worker Name: {{data.user.user_meta.title}} {{data.user.first_name +" "+data.user.last_name}}</p>
                    <p>Email Address: {{data.user.email_address}}</p>
                    <p>Phone Number: {{data.user.phone_number}}</p>
                </v-col>
                <v-col md="1">
                    <v-img :src="getCurrentBs.logo" class="float-right" width="100"></v-img>
                </v-col>
            </v-row>

        </v-card-actions>

        <v-card-actions>
            <v-btn @click="printSection" class="d-print-none" fab small>
                <v-icon>mdi-printer</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-simple-table dense>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                            Payslip Details
                        </th>
                        <th class="text-left"></th>
                    </tr>
                    </thead>

                    <thead>
                    <tr>
                        <th class="text-left">
                            Deduction
                        </th>
                        <th class="text-left"></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index" v-for="(item,index) in data.deductions">
                        <td>{{Object.keys(item)[0]}}</td>
                        <td>{{item[Object.keys(item)[0]]}}</td>
                    </tr>
                    <template v-for="(item) in data.tax_deductions">
                        <template v-for="keys in Object.keys(item)">
                            <tr :key="keys">
                                <td>{{keys}}</td>
                                <td>{{item[keys]}}</td>
                            </tr>
                        </template>
                    </template>
                    <tr>
                        <td>TOTAL Tax Deduction</td>
                        <td>{{data.tax_deduction_sum}}</td>
                    </tr>
                    <tr>
                        <td>TOTAL Deduction</td>
                        <td>{{data.total_deduction}}</td>
                    </tr>
                    <tr>
                        <td>SSNIT Total Tiers</td>
                        <td>{{data.ssnit_total_tiers}}</td>
                    </tr>
                    <tr>
                        <td>SSNIT Employee AMT</td>
                        <td>{{data.ssnit_emp_amt}}</td>
                    </tr>
                    <tr>
                        <td>SSNIT Tier 2</td>
                        <td>{{data.ssnit_tier2_amt}}</td>
                    </tr>
                    <tr>
                        <td>SSNIT EMPLOYER AMT</td>
                        <td>{{data.ssnit_emper_amt}}</td>
                    </tr>
                    <tr>
                        <td>SSNIT Tier 1 AMT</td>
                        <td>{{data.ssnit_tier1_amt}}</td>
                    </tr>

                    <tr>
                        <td>Total SSNIT AMT</td>
                        <td>{{data.ssnit_total_amt}}</td>
                    </tr>
                    <tr>
                        <td>TAX Paye</td>
                        <td>{{data.tax_paye}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'DeductionsReportLayout',
        props: ['data'],
        computed: {
            ...mapGetters('business', ['getCurrentBs'])
        },
        data() {
            return {}
        },
        methods: {
            printSection() {
                this.$htmlToPaper("printable");
            }

        }
    }
</script>
