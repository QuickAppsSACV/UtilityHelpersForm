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
            v-if="formType=='Page'"
            @keydown.enter="getListLeads" 
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
                @click="getListLeads"
                v-else
                color="green darken-2"
                >
                    mdi-magnify
                </v-icon>
              </v-fade-transition>
            </template>
          </v-text-field>
          <v-select
          dense
          outlined
          v-if="selectBoolean"
          @change="getData()"
          :items="crmItems"
          v-model="selectedEmail"
          item-text="name"
          label="Select email"
          ></v-select>
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
        crmItems: [],
        selectBoolean:false,
        selectedEmail: '',
        formType: '',
        leadID:''
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
        //-------------------------step2------------------------------
        researchNotes: {
            get() {
                return this.$store.state.stepTwo.researchNotes;
            },
            set(value) {
                this.$store.state.stepTwo.researchNotes = value;
            },
        },
        availableGas: {
            get() {
                return this.$store.state.stepTwo.availableGas;
            },
            set(value) {
                this.$store.state.stepTwo.availableGas = value;
            },
        },
        availableTrash: {
            get() {
                return this.$store.state.stepTwo.availableTrash;
            },
            set(value) {
                this.$store.state.stepTwo.availableTrash = value;
            },
        },
        recycleIsCollected: {
            get() {
                return this.$store.state.stepTwo.recycleIsCollected;
            },
            set(value) {
                this.$store.state.stepTwo.recycleIsCollected = value;
            },
        },
        yardIsCollected: {
            get() {
                return this.$store.state.stepTwo.yardIsCollected;
            },
            set(value) {
                this.$store.state.stepTwo.yardIsCollected = value;
            },
        },
        // --------------------------step 3------------------------------------
        previousStreet: {
            get() {
                return this.$store.state.stepThree.previousStreet;
            },
            set(value) {
                this.$store.state.stepThree.previousStreet = value;
            },
        },  
        previousCity: {
            get() {
                return this.$store.state.stepThree.previousCity;
            },
            set(value) {
                this.$store.state.stepThree.previousCity = value;
            },
        },
        previousState: {
            get() {
                return this.$store.state.stepThree.previousState;
            },
            set(value) {
                this.$store.state.stepThree.previousState = value;
            },
        },
        previousZipCode: {
            get() {
                return this.$store.state.stepThree.previousZipCode;
            },
            set(value) {
                this.$store.state.stepThree.previousZipCode = value;
            },
        },
        primaryBirthDateFormattedStore: {
            get() {
                return this.$store.state.stepThree.primaryBirthDateFormattedStore;
            },
            set(value) {
                this.$store.state.stepThree.primaryBirthDateFormattedStore = value;
            },
        },
        //step 4 -------------------------------------------------
        alreadyRequestedThroughIntroEmail:{
            get(){
                return this.$store.state.stepFour.alreadyRequestedThroughIntroEmail;
            },
            set(value){
            this.$store.state.stepFour.alreadyRequestedThroughIntroEmail=value;
            },
        },
        //step7-----------------------------------------
        availableGasProviders: {
            get() {
                return this.$store.state.stepSeven.availableGasProviders;
            },
            set(value) {
                this.$store.state.stepSeven.availableGasProviders = value;
            },
        },
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
       
    },
    async mounted(){
    const that = this;
    this.formType = "Page";
     await ZOHO.embeddedApp.on("PageLoad",function(data){      
         ZOHO.CRM.UI.Resize({height:"100%",width:"100%"})
         that.leadID = data.EntityId
         that.formType = "Widget";
         that.getData();
    })
    ZOHO.embeddedApp.init();
  },
    methods: {
     async  getListLeads () {
        console.log(this.formType);
        try { 
         this.loading = true
         let data = {
          "zohoCRM": this.zohoCRM
        };       
        const callCRM = await axios.request({
                url: "https://utilitiesformcatalyst-833998083.development.catalystserverless.com/server/utilities_form_catalyst_function/crm",
                method: 'POST',
                headers:{
                "Content-type":"application/x-www-form-urlencoded",
                },
                data: data
            })
            this.crmItems = [];
            this.crmItems.push(...JSON.parse("["+callCRM.data.message+"]"));
            this.selectBoolean = true;
            this.loading = false
        } catch (error) {
            this.loading = false
            console.log(error)
        }

      },
      async getData(){
        if(this.formType == 'Page'){
            try{
            let data = {
              "leadID": this.selectedEmail
            };  
            const callCRM = await axios.request({
                    url: "https://utilitiesformcatalyst-833998083.development.catalystserverless.com/server/utilities_form_catalyst_function/getData",
                    method: 'POST',
                    headers:{
                    "Content-type":"application/x-www-form-urlencoded",
                    },
                    data: data
                })
            let lead = JSON.parse(callCRM.data.message)
    
            //step 1---------------------------------------------
            this.primaryEmail = lead.Email;
            this.primaryFirstName = lead.First_Name;
            this.primaryLastName = lead.Last_Name;
            this.primaryPhone = lead.Phone;
            this.secondaryFirstName = lead.Buyer2_First_Name;
            this.secondaryLastName = lead.Buyer2_Last_Name;
            this.secondaryPhone = lead.Buyer2_Phone ;
            this.secondaryEmail = lead.Secondary_Email;
            this.streetAddress = lead.Street;
            this.city = lead.City;
            this.state = lead.stateRegion;
            this.zipCode = lead.Zip_Code;
            this.closingDate = lead.Close_Date;
            this.whosubmittedRequest = lead.Lead_Submitted_By;
            this.agentFirstName = lead.Agent_First_Name;
            this.agentLastName = lead.Agent_Last_Name;
            this.assistantFirstName = lead.TC_Name;
            this.assistantLastName = lead.TC_Last_Name;
            this.referrallPartner = lead.Referral_Source;
            
            //step2---------------------------------------------------
            this.researchNotes = lead.Research_Notes;
            this.availableGas = lead.Available_Gas_Providers;
            this.availableTrash = lead.Available_Trash_Providers;
            this.recycleIsCollected = lead.Not_Weekly_Recycle;
            this.yardIsCollected = lead.Not_Weekly_Yard;
    
            
            // step3----------------------------------------------
            this.previousStreet = lead.Previous_Street_Address;
            this.previousState = lead.Previous_State;
            this.previousCity = lead.Previous_City;
            this.previousZipCode = lead.Previous_Zip;
            this.primaryBirthDateFormattedStore = lead.Date_of_Birth
    
            //step4-----------------------------------------------
            this.alreadyRequestedThroughIntroEmail = lead.Submitted_on_Intro_Email;
            //step7--------------------------------------------------
            // this.availableGasProviders = lead.Available_Gas_Providers
    
            }catch(err){
                console.log(err)
            }
        }else{
        const that = this;
        ZOHO.CRM.API.getRecord({Entity:"Leads",RecordID:that.leadID})
         .then(function(data){
        const lead = data.data[0];
         //step 1---------------------------------------------
        that.primaryEmail = lead.Email;
        that.primaryFirstName = lead.First_Name;
        that.primaryLastName = lead.Last_Name;
        that.primaryPhone = lead.Phone;
        that.secondaryFirstName = lead.Buyer2_First_Name;
        that.secondaryLastName = lead.Buyer2_Last_Name;
        that.secondaryPhone = lead.Buyer2_Phone ;
        that.secondaryEmail = lead.Secondary_Email;
        that.streetAddress = lead.Street;
        that.city = lead.City;
        that.state = lead.stateRegion;
        that.zipCode = lead.Zip_Code;
        that.closingDate = lead.Close_Date;
        that.whosubmittedRequest = lead.Lead_Submitted_By;
        that.agentFirstName = lead.Agent_First_Name;
        that.agentLastName = lead.Agent_Last_Name;
        that.assistantFirstName = lead.TC_Name;
        that.assistantLastName = lead.TC_Last_Name;
        that.referrallPartner = lead.Referral_Source;
        
        //step2---------------------------------------------------
        that.researchNotes = lead.Research_Notes;
        that.availableGas = lead.Available_Gas_Providers;
        that.availableTrash = lead.Available_Trash_Providers;
        that.recycleIsCollected = lead.Not_Weekly_Recycle;
        that.yardIsCollected = lead.Not_Weekly_Yard;

        
        // step3----------------------------------------------
        that.previousStreet = lead.Previous_Street_Address;
        that.previousState = lead.Previous_State;
        that.previousCity = lead.Previous_City;
        that.previousZipCode = lead.Previous_Zip;
        that.primaryBirthDateFormattedStore = lead.Date_of_Birth

        //step4-----------------------------------------------
        that.alreadyRequestedThroughIntroEmail = lead.Submitted_on_Intro_Email;
        //step7--------------------------------------------------
        // that.availableGasProviders = lead.Available_Gas_Providers
    })
            
        }

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