<template>
    <div>
        <v-card
        flat
        class="mb-12"
        >
        <v-card-title class="bluelight-text" >
            Verify Info:
        </v-card-title>
        <v-card-subtitle>
            <ul>
                <li> Legal Primary & Secondary Names (Spelling)</li>
                <li> New & Previous Addresses</li>
                <li> Secondary Info</li>
                <li> Email Addresses</li>
            </ul>
        </v-card-subtitle>
        <v-card-text>
            <v-text-field
            dense
            outlined
            v-model="templateInstructions"
            label="Template Instructions"
            ></v-text-field>
            <!-- <v-text-field
            dense
            v-model="zohoCRM"
            label="Zoho CRM *"
            outlined
            ></v-text-field> -->
            <v-text-field
            v-model="zohoCRM"
            dense
            outlined
            clearable
            label="Zoho CRM *"
            type="text"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                  v-if="loading"
                  size="24"
                  color="info"
                  indeterminate
                ></v-progress-circular>
                <v-icon
                @click="clickMe"
                v-else
                color="green darken-2"
                >
                    mdi-magnify
                </v-icon>
              </v-fade-transition>
            </template>
          </v-text-field>
            <h2 color="blue" class="blue-text">--Primary--</h2>
            <v-divider class="mt-2 mb-7"></v-divider>
            
            <v-row>
                <v-col class="" cols="8">
                    <v-text-field
                    dense
                    outlined
                    v-model="primaryEmail"
                    label="Primary Email"
                    >
                </v-text-field>
            </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col>
                    <v-text-field
                    hint="First"
                    v-model="primaryFirstName"
                    persistent-hint
                    dense
                    outlined
                    label="Primary Name"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                    dense
                    v-model="primaryLastName"
                    outlined
                    persistent-hint
                    hint="Last"
                    label=""
                        ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    dense
                    v-model="primaryPhone"
                    outlined
                    label="Primary Phone"
                    ></v-text-field>
                </v-col>
            </v-row>
            <h2 color="green" class="green-text">--Secondary--</h2>
            <v-divider class="mt-2 mb-7"></v-divider>
            <v-row dense>
                <v-col class="" cols="8">
                    <v-text-field
                    dense
                    outlined
                    v-model="secondaryEmail"
                    label="Secondary Email"
                    >
                </v-text-field>
            </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col>
                    <v-text-field
                    hint="First"
                    v-model="secondaryFirstName"
                    persistent-hint
                    dense
                    outlined
                    label="Secondary Name"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                    dense
                    v-model="secondaryLastName"
                    outlined
                    persistent-hint
                    hint="Last"
                    label=""
                        ></v-text-field>
                </v-col>
            </v-row>
            <v-row  dense class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    dense
                    outlined
                    v-model="secondaryPhone"
                    label="Secondary Phone"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-select
                    dense
                    outlined
                    v-model="whoamISpeaking"
                    label="Who am i Speaking to? *"
                    :items="['Primary','Secondary','Both']"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row  v-if="whoamISpeaking == 'Secondary'"  dense cass="mt-0">
                <h2 class="mb-5">Be sure to verify the Primary info as well.</h2>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-select
                    dense
                    outlined
                    v-model="willanyService"
                    label="Will Any services be in the Secondary's name? *"
                    :items="['Yes','No']"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-select
                    dense
                    disabled
                    outlined
                    :items="['Agent','Landlord','Builder','Buyer','Transaction Coordinator','Lender','Title Company','Inspector','Uhaul Rental Only','Uhaul Customer Wants to Use Utility Helpers','Other']"
                    v-model="whosubmittedRequest"
                    label="Who submitted the request"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    dense
                    v-model="referrallPartner"
                    disabled
                    outlined
                    label="Referral Partner"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    v-model="brokerageCompany"
                    dense
                    disabled
                    outlined
                    label="Brokerage/Company"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    v-if="whosubmittedRequest == 'Builder'"
                    dense
                    v-model="builder"
                    disabled
                    outlined
                    label="Builder"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col cols="8">
                    <v-text-field
                    v-if="whosubmittedRequest =='Landlord'"
                    dense
                    v-model="landlord"
                    disabled
                    outlined
                    label="Landlord/ Managment Co"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="">
                    <v-text-field
                    dense
                    disabled
                    v-model="agentFirstName"
                    hint="First"
                    persistent-hint
                    outlined
                    label="Agent"
                    ></v-text-field>
                </v-col>
                <v-col cols="">
                    <v-text-field
                    dense
                    v-model="agentLastName"
                    hint="Last"
                    persistent-hint
                    disabled
                    outlined
                    label=""
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col cols="">
                    <v-text-field
                    dense
                    v-model="assistantFirstName"
                    disabled
                    hint="First"
                    persistent-hint
                    outlined
                    label="Assistant"
                    ></v-text-field>
                </v-col>
                <v-col cols="">
                    <v-text-field
                    dense
                    v-model="assistantLastName"
                    hint="Last"
                    persistent-hint
                    disabled
                    outlined
                    label=""
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0" v-if="whosubmittedRequest == 'Title Company'">
                <v-col cols="">
                    <v-text-field
                    dense
                    disabled
                    v-model="titleRepFirstName"
                    hint="First"
                    persistent-hint
                    outlined
                    label="Title Rep"
                    ></v-text-field>
                </v-col>
                <v-col cols="">
                    <v-text-field
                    dense
                    v-model="titleRepLastName"
                    hint="Last"
                    persistent-hint
                    disabled
                    outlined
                    label=""
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0" v-if="whosubmittedRequest=='Lender'">
                <v-col cols="">
                    <v-text-field
                    dense
                    disabled
                    v-model="lenderFirstName"
                    hint="First"
                    persistent-hint
                    outlined
                    label="Lender"
                    ></v-text-field>
                </v-col>
                <v-col cols="">
                    <v-text-field
                    dense
                    hint="Last"
                    persistent-hint
                    v-model="lenderLastName"
                    disabled
                    outlined
                    label=""
                    ></v-text-field>
                </v-col>
            </v-row>
            <p> New Address (Moving To)</p>
            <v-row dense class="mt-0">
                <v-col>
                    <v-text-field
                    dense
                    outlined
                    v-model="streetAddress"
                    label="Street Address"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col>
                    <v-text-field
                    v-model="city"
                    dense
                    outlined
                    label="City"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col>
                    <v-text-field
                    v-model="stateRegion"
                    dense
                    outlined
                    label="State/Region/Province"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col>
                    <v-text-field
                    dense
                    v-model="zipCode"
                    outlined
                    label="Postal/Zip Code"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row dense class="mt-0">
                <v-col
                cols="6"
                lg="6"
                >
                    <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="dateFormatted"
                        label="Expected Closing Date"
                        dense
                        outlined
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu2 = false"
                    ></v-date-picker>
                    </v-menu>
                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
            </v-col>
            </v-row>
            <v-row v-if="willanyService == 'Yes'" class="mt-0">
                <v-col>
                    Some Services will be in the Secondary Name 
                    Did you add/verify Secondary data?* 
                    <v-checkbox
                    label="Yes"
                    v-model="someServicesWill"
                    ></v-checkbox>
                </v-col>

            </v-row>
        </v-card-text>
        </v-card>
        1/8
    </div>
</template>
<script>
const axios = require('axios');

export default {
    data: vm=>( {
     
        e1: 1,
        date:'',
        dateFormatted: '',
        menu2: false,
        loading:false,
        message: 'Hey!',
        
    }),
    watch: {
        date (val) {
          this.dateFormattedStore =  this.dateFormatted = this.formatDate(this.date)
        }
    },
    computed: {
        someServicesWill: {
            get() {
                return this.$store.state.stepOne.someServicesWill;
            },
            set(value) {
                this.$store.state.stepOne.someServicesWill = value;
            },
        },
        dateFormattedStore: {
            get() {
                return this.$store.state.stepOne.dateFormattedStore;
            },
            set(value) {
                this.$store.state.stepOne.dateFormattedStore = value;
            },
        },
        templateInstructions: {
            get() {
                return this.$store.state.stepOne.templateInstructions;
            },
            set(value) {
                this.$store.state.stepOne.templateInstructions = value;
            },
        },
        zohoCRM: {
            get() {
                return this.$store.state.stepOne.zohoCRM;
            },
            set(value) {
                this.$store.state.stepOne.zohoCRM = value;
            },
        },
        primaryEmail: {
            get() {
                return this.$store.state.stepOne.primaryEmail;
            },
            set(value) {
                this.$store.state.stepOne.primaryEmail = value;
            },
        },
        primaryFirstName: {
            get() {
                return this.$store.state.stepOne.primaryFirstName;
            },
            set(value) {
                this.$store.state.stepOne.primaryFirstName = value;
            },
        },
        primaryLastName: {
            get() {
                return this.$store.state.stepOne.primaryLastName;
            },
            set(value) {
                this.$store.state.stepOne.primaryLastName = value;
            },
        },
        primaryPhone: {
            get() {
                return this.$store.state.stepOne.primaryPhone;
            },
            set(value) {
                this.$store.state.stepOne.primaryPhone = value;
            },
        },
        secondaryEmail: {
            get() {
                return this.$store.state.stepOne.secondaryEmail;
            },
            set(value) {
                this.$store.state.stepOne.secondaryEmail = value;
            },
        },
        secondaryFirstName: {
            get() {
                return this.$store.state.stepOne.secondaryFirstName;
            },
            set(value) {
                this.$store.state.stepOne.secondaryFirstName = value;
            },
        },
        secondaryLastName: {
            get() {
                return this.$store.state.stepOne.secondaryLastName;
            },
            set(value) {
                this.$store.state.stepOne.secondaryLastName = value;
            },
        },
        secondaryPhone: {
            get() {
                return this.$store.state.stepOne.secondaryPhone;
            },
            set(value) {
                this.$store.state.stepOne.secondaryPhone = value;
            },
        },
        whoamISpeaking: {
            get() {
                return this.$store.state.stepOne.whoamISpeaking;
            },
            set(value) {
                this.$store.state.stepOne.whoamISpeaking = value;
            },
        },
        willanyService: {
            get() {
                return this.$store.state.stepOne.willanyService;
            },
            set(value) {
                this.$store.state.stepOne.willanyService = value;
            },
        },
        whosubmittedRequest: {
            get() {
                return this.$store.state.stepOne.whosubmittedRequest;
            },
            set(value) {
                this.$store.state.stepOne.whosubmittedRequest = value;
            },
        },
        referrallPartner: {
            get() {
                return this.$store.state.stepOne.referrallPartner;
            },
            set(value) {
                this.$store.state.stepOne.referrallPartner = value;
            },
        },
        brokerageCompany: {
            get() {
                return this.$store.state.stepOne.brokerageCompany;
            },
            set(value) {
                this.$store.state.stepOne.brokerageCompany = value;
            },
        },
        builder: {
            get() {
                return this.$store.state.stepOne.builder;
            },
            set(value) {
                this.$store.state.stepOne.builder = value;
            },
        },
        landlord: {
            get() {
                return this.$store.state.stepOne.landlord;
            },
            set(value) {
                this.$store.state.stepOne.landlord = value;
            },
        },
        agentFirstName: {
            get() {
                return this.$store.state.stepOne.agentFirstName;
            },
            set(value) {
                this.$store.state.stepOne.agentFirstName = value;
            },
        },
        agentLastName: {
            get() {
                return this.$store.state.stepOne.agentLastName;
            },
            set(value) {
                this.$store.state.stepOne.agentLastName = value;
            },
        },
        assistantFirstName: {
            get() {
                return this.$store.state.stepOne.assistantFirstName;
            },
            set(value) {
                this.$store.state.stepOne.assistantFirstName = value;
            },
        },
        assistantLastName: {
            get() {
                return this.$store.state.stepOne.assistantLastName;
            },
            set(value) {
                this.$store.state.stepOne.assistantLastName = value;
            },
        },
        titleRepFirstName: {
            get() {
                return this.$store.state.stepOne.titleRepFirstName;
            },
            set(value) {
                this.$store.state.stepOne.titleRepFirstName = value;
            },
        },
        titleRepLastName: {
            get() {
                return this.$store.state.stepOne.titleRepLastName;
            },
            set(value) {
                this.$store.state.stepOne.titleRepLastName = value;
            },
        },
        lenderFirstName: {
            get() {
                return this.$store.state.stepOne.lenderFirstName;
            },
            set(value) {
                this.$store.state.stepOne.lenderFirstName = value;
            },
        },
        lenderLastName: {
            get() {
                return this.$store.state.stepOne.lenderLastName;
            },
            set(value) {
                this.$store.state.stepOne.lenderLastName = value;
            },
        },
        streetAddress: {
            get() {
                return this.$store.state.stepOne.streetAddress;
            },
            set(value) {
                this.$store.state.stepOne.streetAddress = value;
            },
        },
        city: {
            get() {
                return this.$store.state.stepOne.city;
            },
            set(value) {
                this.$store.state.stepOne.city = value;
            },
        },
        stateRegion: {
            get() {
                return this.$store.state.stepOne.stateRegion;
            },
            set(value) {
                this.$store.state.stepOne.stateRegion = value;
            },
        },
        zipCode: {
            get() {
                return this.$store.state.stepOne.zipCode;
            },
            set(value) {
                this.$store.state.stepOne.zipCode = value;
            },
        },
        closingDate: {
            get() {
                return this.$store.state.stepOne.closingDate;
            },
            set(value) {
                this.$store.state.stepOne.closingDate = value;
            },
        },
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
       
    },
    async mounted(){
    // const that = this;
    //  await ZOHO.embeddedApp.on("PageLoad",function(data){         
    //     // ZOHO.CRM.UI.Resize({height:"596.5",width:"1100"})
    //     console.log(data.EntityId);
  
     
    //     //   ZOHO.CRM.API.getRecord({Entity:"Deals",RecordID:that.dealID})
    // //   .then(function(data){
    // //     console.log("alexis")
    // //     console.log(data);
    // //   })
    // })
    // ZOHO.embeddedApp.init();
  },
    methods: {
     async  clickMe () {
        this.loading = true
        setTimeout(() => {
           this.loading = false
        }, 2000)

        // const resp=  await axios({
        //     url:`https://www.zohoapis.com/crm/v2/Leads/search?criteria=(Email:starts_with:`+this.zohoCRM+`)`, 
        //     method:"GET",
        //     headers:{
        //       "Content-type":"application/json",
        //       "Authorization": "bearer 1000.e32058a05cfff0df4221170640edde71.09fd24e01f152959d7016a07b7c17dbe"
        //     },
        //   })
        const data = {
        'crmAPIRequest': this.zohoCRM,
         }
         //headers: {'Content-Type':'application/x-www-form-urlencoded'},
        //  console.log(data);
        //  console.log();
        //  console.log(JSON.parse(data));
        // url:`https://www.zohoapis.com/crm/v2/functions/FormServerless/actions/execute?auth_type=apikey&zapikey=1003.9bfee056482b123ed4c7a478d7eb4683.513ec5f354e37a03742b210e05a5a9b1`,
        // const resp = await axios({
        //     url:'https://webhook.site/ef62294c-9312-4213-b2ad-07a1702d0044',
        //      method: 'POST',
        //      headers: {'Content-Type':'application/json'},
        //      data: JSON.stringify({"data":data})
        // })
        //   console.log(resp);
        // console.log(JSON.parse(data));




      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
}
</script>
<style>
    .blue-text {
        color: blue;
    }
    .green-text{
        color: green;
    }
    .bluelight-text{
        color:#3399ff;
    }
    .comic-sans-font{
        font-family: 'Comic Sans MS';
    }
</style>