<template>
    <div>
        <v-card 
        elevation="10" 
        max-width="70vw"
        class="pa-10 ma-10 mx-auto" 
        >
            <v-card-title>
                    Enterprix Copy of Utilities Scheduling Flow 2.0
            </v-card-title>
            <v-card-subtitle>              
                    For use by Rep on call to streamline the entry process
            </v-card-subtitle>    
            <v-card-text>
                <v-stepper non-linear   alt-labels v-model="e1">
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------HEADER------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-header>
                        <v-stepper-step 
                            editable
                            class="step-space"
                            :complete="e1 > 1"
                            step="1"
                        >
                            <small>
                                Customer Info Verification
                            </small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable
                            class="step-space"
                            :complete="e1 > 2"
                            step="2"
                        >
                           <small> Available Provider Synopsis</small>
                        </v-stepper-step>

                        <v-divider ></v-divider>

                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="3"
                        :complete="e1 > 3"
                        >
                            <small>Cable/Internet/Phone</small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="4"
                        :complete="e1 > 4"
                        >
                            <small>Home Security</small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="5"
                        :complete="e1 > 5"
                        >
                            <small>Homeowners Insurance</small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="6"
                        :complete="e1 > 6"
                        >
                            <small>PODS / Pro Movers</small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="7"
                        :complete="e1 > 7">
                            <small>Electric</small>
                        </v-stepper-step>
                        <v-divider ></v-divider>
                        <v-stepper-step 
                            editable 
                            class="step-space"
                            step="8"
                        :complete="e1 > 8"
                        >
                            <small>Water/Sewer/Trash</small>
                        </v-stepper-step>
                    </v-stepper-header>
<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------STEP 1---------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-form ref="step1">
                            <StepOne />
                        </v-form>
                        <v-card-actions>
                        <v-spacer>
                        </v-spacer>
                        <v-btn
                        color="primary"
                        @click="Next(1)"
                        >
                        Next
                        </v-btn>
                     </v-card-actions>
                    </v-stepper-content>
<!-- ----------------------------------------------STEP 2------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="2">
                        <v-form ref="step2">
                        <StepTwo/>
                        </v-form>
                        <v-card-actions>
                            <v-btn @click="e1 = 1">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(2)"
                            >
                            Next
                            </v-btn>
                       </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 3 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="3">
                        <v-form ref="step3">
                        <StepThree/>
                        </v-form>
                        <v-card-actions>
                        <v-btn @click="e1 = 2">
                            Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(3)"
                            >
                            Next
                        </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 4 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="4">
                        <v-form ref="step4">
                            <StepFour/>
                        </v-form>
                    <v-card-actions>
                            <v-btn @click="e1 = 3">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(4)"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 5 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="5">
                        <v-form ref="step5">
                            <StepFive/>
                        </v-form>
                    <v-card-actions>
                            <v-btn @click="e1 = 4">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(5)"
                            >
                            Next
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
<!-- ------------------------------------------------STEP 6 ------------------------------------------------------------------------------------------------ -->
                    <v-stepper-content step="6">
                        <v-form ref="step6">
                            <StepSix/>
                        </v-form>
                        <v-card-actions>
                            <v-btn @click="e1 = 5">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(6)"
                            >
                            Next
                            </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
    <!-- --------------------------------------STEP 7-------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="7">
                        <v-form ref="step7">
                            <StepSeven/>
                        </v-form>
                        <v-card-actions>
                            <v-btn @click="e1 = 6">
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            @click="Next(7)"
                            >
                            Next
                            </v-btn>
                        </v-card-actions>
                    </v-stepper-content>
<!-- --------------------------------------STEP 8-------------------------------------------------------------------------------------------------------------------- -->
                    <v-stepper-content step="8">
                        <v-form ref="step8">
                        <StepEight/>
                        </v-form>
                    <v-card-actions>
                        <v-btn @click="e1 = 7">
                            Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                        dense
                        @click="dialog=true"
                        color="primary"
                        >Review Recap</v-btn>
                        <v-btn
                        color="primary"
                        :loading="loading"
                        @click="Submit()"
                        >
                        Submit
                        </v-btn>
                    </v-card-actions>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card-text>
            <v-row justify="center">
                <v-dialog 
                v-model="dialog"
                persistent
                max-width="600px"
                >
                    <v-card flat>
                        <reviewSummary/>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="dialog=false" text color="primary" >Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-card>
    </div>
</template>
<script>
import StepOne from './Steps/StepOne.vue'
import StepTwo from './Steps/StepTwo.vue'
import StepThree from './Steps/StepThree.vue'
import StepFour from './Steps/StepFour.vue'
import StepFive from './Steps/StepFive.vue'
import StepSix from './Steps/StepSix.vue'
import StepSeven from './Steps/StepSeven.vue'
import StepEight from './Steps/StepEight.vue'
import reviewSummary from './Steps/reviewSummary.vue'

const axios = require('axios');
export default {
    components: {
        StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
        StepSeven,
        StepEight,
        reviewSummary
     },
    data: vm=>( {
        e1: 1,
        dialog:false,
        loading: false
    }),
    watch: {
    },
    computed: {
        formType: {
            get() {
                return this.$store.state.stepOne.formType;
            },
            set(value) {
                this.$store.state.stepOne.formType = value;
            },
        },
        Security_Answer_Internet: {
            get() {
                return this.$store.state.stepOne.Security_Answer_Internet;
            },
            set(value) {
                this.$store.state.stepOne.Security_Answer_Internet = value;
            },
        },
    },
    methods: {
        Next(step){
            switch (step){
                case 1 :       
                if (this.$refs.step1.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 2 :       
                if (this.$refs.step2.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 3 :       
                if (this.$refs.step3.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 4 :       
                if (this.$refs.step4.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 5 :       
                if (this.$refs.step5.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 6 :       
                if (this.$refs.step6.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                case 7 :       
                if (this.$refs.step7.validate()) {
                    this.e1 = this.e1 +1;
                }
                break;
                
            }
        },
        async Submit(){
            if (this.$refs.step8.validate()) {
                this.loading = true;
                if(this.formType == 'Widget'){
                    if(this.$store.state.stepThree.selectedInternetProvider == "Frontier" ||this.$store.state.stepThree.createTicketInternet != "" ||this.$store.state.stepThree.createTicketTV != "" ||this.$store.state.stepFour.needToBeScheduleBySupport == true ||this.$store.state.stepSeven.haveSupportKeyElectric == true){
                        // Security_Answer_Internet
                    
                    var custom_field = {"cf_lead_id": this.$store.state.stepOne.leadID[0]}
                        //Create Contact Desk
                        //THIS IS THE ORIGINAL CODE FOR CREATE A CONTACT IN DESK
                        // var func_name = "createContactDesk";
                        // var req_data ={
                        //     "firstName" : this.$store.state.stepOne.primaryFirstName,
                        //     "lastName" : this.$store.state.stepOne.primaryLastName,
                        //     "email":this.$store.state.stepOne.primaryEmail,
                        //     "phone": this.$store.state.stepOne.primaryPhone,
                        //     "zip": this.$store.state.stepOne.zipCode,
                        //     "street": this.$store.state.stepOne.streetAddress,
                        //     "state": this.$store.state.stepOne.stateRegion,
                        //     "city": this.$store.state.stepOne.city,
                        //     "description": "Sent By "+this.$store.state.stepOne.ownerEmail,
                        //     "cf": custom_field,
                        // },

                        //THIS IS THE SAMPLE CODE TO CREATE A CONTACT IN DESK 
                        var req_data ={
                            "firstName" : "test",
                            "lastName" : "fromWdiget",
                            "email": "test@test.com",
                            "phone": "",
                            "zip": "",
                            "street": "",
                            "state": "",
                            "city": "",
                            "description": "test",
                            "cf": custom_field,
                        };
                        try{
                            const that = this;
                    var request ={
                        url : "https://flow.zoho.com/689711155/flow/webhook/incoming?zapikey=1001.01017bcb7c986cf5949f64aac79921e1.a6fcda992401f78a23032ff7d5fbab63&isdebug=false",
                        body:{req_data}
                    }
                    ZOHO.CRM.HTTP.post(request)
                    .then(function(data){
                    console.log(data)
                    that.loading = false;
                    })
                    }catch(err){
                        console.log("Errorrrrr " +err)
                        this.loading = false;
                    }

                    
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                        if(this.$store.state.stepThree.selectedInternetProvider == "Frontier" && this.$store.state.stepThree.createTicketInternet != "Error Received (Re-Key)" ){
                            //There is no action in zoho flow for this condition -----they need to know-----------------------
                        }
            //---------------------------------Another Validation----------------------------------------------------------------------------------------------------------------------------------------
                        //Step 3
                        //INTERNET ONLY
                    if((this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.selectedTV == "" && this.$store.state.stepThree.selectedPhone == "")|| (this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.selectedTV != this.$store.state.stepThree.selectedInternetProvider && this.$store.state.stepThree.createTicketTV != ""  ))
                    {
                            // 
                            if(this.$store.state.stepThree.whosNameWillinternet == 'Primary'){
                                // Create Ticket on Zoho Desk for internet
                                
                                let data = {
                                    "departmentId": "Department Desk--Need Authorization",
                                    "layout": "in the API we dont need it",
                                    "cf":
                                    {
                                        "cf_lead_url": "https://crm.zoho.com/crm/org656558443/tab/Leads/"+this.$store.state.stepOne.leadID[0],
                                        "cf_lead_id": this.$store.state.stepOne.leadID[0],
                                        "cf_lead_owner_email": this.$store.state.stepOne.ownerEmail,
                                        "cf_lead_owner": this.$store.state.stepOne.ownerName
                                    },
                                    "email": this.$store.state.stepOne.primaryEmail,
                                    "phone": this.$store.state.stepOne.primaryPhone,
                                    "subject": "Internet Only Ticket for "+this.$store.state.stepOne.primaryFirstName+" "+this.$store.state.stepOne.primaryLastName+". Requested by "+this.$store.state.stepEight.salesRep+" "+this.$store.state.stepThree.createTicketInternet,
                                    "description": 
                                        `<B>Ticket Type: `+this.$store.state.stepThree.createTicketInternet+` (INTERNET ONLY)<B/><br><br><br>
                                        <b>New Address: `+this.$store.state.stepOne.streetAddress+` `+this.$store.state.stepOne.city+` `+this.$store.state.stepOne.stateRegion+` `+this.$store.state.stepOne.zipCode+`</b><br>
                                        Previous Address: `+this.$store.state.stepThree.previousStreet +` `+this.$store.state.stepThree.previousCity+` `+this.$store.state.stepThree.previousState+` `+this.$store.state.stepThree.previousZipCode+`<br><br>
                                        Name: `+this.$store.state.stepOne.primaryFirstName+` `+this.$store.state.stepOne.primaryLastName+`<br>
                                        DOB: `+this.$store.state.stepThree.primaryBirthDateFormattedStore+` `+this.$store.state.stepSeven.primaryDOBFormatedStore+`<br>
                                        Phone: `+this.$store.state.stepOne.primaryPhone+`<br>
                                        Email: `+this.$store.state.stepOne.primaryEmail+`<br><br>
                                        Internet Provider: `+this.$store.state.stepThree.selectedInternetProvider+`<br>
                                        Cable Notes: `+this.$store.state.stepThree.internetPlan+`<br>
                                        Ticket Notes: `+this.$store.state.stepThree.ticketNotes+`<br>
                                        Acct/WO Number: `+this.$store.state.stepThree.internetAccountWorkorder+`<br>
                                        Install Type: `+this.$store.state.stepThree.InstallationTypeInternet +`<br>
                                        Requested Install Date/Time: `+this.$store.state.stepThree.internetInstallDateFormattedStore+` `+this.$store.state.stepThree.internetInstallTime+`<br><br>
                                        Security Question: `+this.$store.state.stepThree.securityQuestion+`<br>
                                        Security Answer: `+this.$store.state.stepThree.securityAnswer+`<br>
                                        Security Pin: `+this.$store.state.stepThree.securityPin+``,
                                    "status": "Open",
                                    "contactId": "no lo tenemos"
                                    
                                }

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary'){
                                // Crate Ticket on Zoho Desk  for internet
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.selectedTV == this.$store.state.stepThree.selectedInternetProvider && this.$store.state.stepThree.selectedPhone != this.$store.state.stepThree.selectedInternetProvider){
                                // 
                            if(this.$store.state.stepThree.whosNameWillinternet == 'Primary'){
                                // Create Ticket on Zoho Desk for internet

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary'){
                                // Crate Ticket on Zoho Desk for internet
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.selectedTV == this.$store.state.stepThree.selectedInternetProvider && this.$store.state.stepThree.selectedPhone == this.$store.state.stepThree.selectedInternetProvider){
                                // 
                            if(this.$store.state.stepThree.whosNameWillinternet == 'Primary'){
                            // Create Ticket on Zoho Desk for internet

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary'){
                                // Crate Ticket on Zoho Desk for internet
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.createTicketTV != "" && this.$store.state.stepThree.selectedPhone == ""){
                            if(this.$store.state.stepThree.whosNameWillinternet == 'Primary' && this.$store.state.stepThree.whosNameWillTv == 'Primary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Primary' && this.$store.state.stepThree.whosNameWillTv == 'Secondary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary' && this.$store.state.stepThree.whosNameWillTv == 'Secondary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary' && this.$store.state.stepThree.whosNameWillTv == 'Primary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.createTicketTV != "" && this.$store.state.stepThree.selectedPhone == this.$store.state.stepThree.selectedInternetProvider ){
                        if(this.$store.state.stepThree.whosNameWillinternet == 'Primary' && this.$store.state.stepThree.whosNameWillTv == 'Primary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Primary' && this.$store.state.stepThree.whosNameWillTv == 'Secondary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary' && this.$store.state.stepThree.whosNameWillTv == 'Secondary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary' && this.$store.state.stepThree.whosNameWillTv == 'Primary'){
                                // Create 2 Tickets on Zoho Desk
                                    //1 for internet and 1 for Tv
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet == "" && this.$store.state.stepThree.createTicketTV != ""){
                                // 
                            if(this.$store.state.stepThree.whosNameWillTv == 'Primary'){
                            // Create Ticket on Zoho Desk for TV

                            }else if(this.$store.state.stepThree.whosNameWillTv == 'Secondary'){
                                // Crate Ticket on Zoho Desk for TV
                            }else{
                                //SEND EMAIL
                            }
                    }else if(this.$store.state.stepThree.createTicketInternet != "" && this.$store.state.stepThree.selectedTV !=  this.$store.state.stepThree.selectedInternetProvider && this.$store.state.stepThree.selectedPhone == this.$store.state.stepThree.selectedInternetProvider  ){
                                // 
                            if(this.$store.state.stepThree.whosNameWillinternet == 'Primary'){
                                // Create Ticket on Zoho Desk for internet

                            }else if(this.$store.state.stepThree.whosNameWillinternet == 'Secondary'){
                                // Crate Ticket on Zoho Desk  for internet
                            }else{
                                //SEND EMAIL
                            }
                    }
                    
    //------------------------------Another Validation ------------------------------------------------------------------------------------------------------------
                        //Step 7
                        if(this.$store.state.stepSeven.haveSupportKeyElectric == true){
                            // 
                            if( this.$store.state.stepSeven.whoIsNameWillElectric== 'Primary'){
                            // Create Ticket on Zoho Desk for Electric

                            }else if( this.$store.state.stepSeven.whoIsNameWillElectric== 'Secondary'){
                                // Crate Ticket on Zoho Desk for Electric
                            }else{
                                //SEND EMAIL
                            }
                        }
    //--------------------------------------------------------------------------------------------------------------------------------
                        if(this.$store.state.stepFour.needToBeScheduleBySupport == true){
                            if(this.$store.state.stepFour.whoIsNameWillSecurityBeIn== 'Primary'){
                            // Create Ticket on Zoho Desk for Electric

                            }else if( this.$store.state.stepFour.whoIsNameWillSecurityBeIn== 'Secondary'){
                                // Crate Ticket on Zoho Desk for Electric
                            }else{
                                //SEND EMAIL
                            }
                        }
    //----------------------------------------------------------------------------------------------------------------------------           
                        //Add Note to Lead in CRM
                    }
                // THIS IS THE WORKING CODE TO UPDATE CRM LEAD
                    var config={
                        Entity:"Leads",
                        APIData:{
                            "id": this.$store.state.stepOne.leadID[0],
                            "Email": this.$store.state.stepOne.primaryEmail,
                            "Phone": this.$store.state.stepOne.primaryPhone,
                            "Street": this.$store.state.stepOne.streetAddress,
                            "City": this.$store.state.stepOne.city,
                            "State": this.$store.state.stepOne.state,
                            "Zip_Code": this.$store.state.stepOne.zipCode,
                            "Close_Date": this.$store.state.stepOne.closingDate,
                            "Buyer2_Phone": this.$store.state.stepOne.secondaryPhone,
                            "Secondary_Email": this.$store.state.stepOne.secondaryEmail,
                            "Previous_Street_Address": this.$store.state.stepThree.previousStreet,
                            "Previous_City": this.$store.state.stepThree.previousCity,
                            "Previous_State": this.$store.state.stepThree.previousState,
                            "Previous_Zip": this.$store.state.stepThree.previousZipCode,
                            "Activated_Internet_Provider": this.$store.state.stepThree.selectedInternetProvider,
                            "Internet_Notes": this.$store.state.stepThree.internetPlan,
                            "Installation_Type_Internet": this.$store.state.stepThree.InstallationTypeInternet,
                            "Internet_Install_Date": this.$store.state.stepThree.internetInstallDateFormattedStore,
                            "Internet_Install_Time_Window": this.$store.state.stepThree.internetInstallTime,
                            "Activated_TV_Provider": this.$store.state.stepThree.selectedTV,
                            "TV_Notes": this.$store.state.stepThree.tvPlanEquipment,
                            "Installation_Type_TV": this.$store.state.stepThree.installationTypeSelectedTV,
                            "TV_Install_Date": this.$store.state.stepThree.tvInstallDateFormattedStore,
                            "TV_Install_Time": this.$store.state.stepThree.tvInstallTime,
                            "Activated_Phone_Provider": this.$store.state.stepThree.selectedPhone,
                            "Phone_Notes":this.$store.state.stepThree.phonePlanEquipment,
                            "Installation_Type_Phone":this.$store.state.stepThree.installationTypePhone,
                            "Phone_Install_Date":this.$store.state.stepThree.phoneInstallDateFormattedStore,
                            "Phone_Install_Time":this.$store.state.stepThree.phoneInstallTime,
                            "Alarm_Compnay":this.$store.state.stepFour.alarmCompany,
                            "ADT_Package_Chosen":this.$store.state.stepFour.ADTPackageChosen,
                            "ADT_Install_Date":this.$store.state.stepFour.alarmInstallFormatedStore,
                            "ADT_Install_Time_Window":this.$store.state.stepFour.alarmInstalTimeWindows,
                            "TraxID":this.$store.state.stepFour.traxID,
                            "ADT_Notes":this.$store.state.stepFour.alarmNotes,
                            "Insurance_quote_requested":this.$store.state.stepFive.insuranceQuoteRequested,
                            "Pro_Mover_Company":this.$store.state.stepSix.proMovingCompany,
                            "Pro_Mover_Notes":this.$store.state.stepSix.proMoverNotes,
                            "How_Sent_to_Pro_Mover":this.$store.state.stepSix.howSentProMover,
                            "Power_Provider_Activated":this.$store.state.stepSeven.electricProviderActived,
                            "Activation_or_Transfer":this.$store.state.stepSeven.activationOeTransfer,
                            "Power_Activation_Date":this.$store.state.stepSeven.electricActivationFormatedStore,
                            "Gas_Provider_Activated":this.$store.state.stepSeven.gasProviderActivated,
                            "Gas_Activation_Date":this.$store.state.stepSeven.gasActivationFormatedStore,
                            "Activated_Water_Sewer":this.$store.state.stepEight.activatedWaterSelected,
                            "Water_Tracking_Number":this.$store.state.stepEight.waterTrackingNo,
                            "Water_Activation_Date":this.$store.state.stepEight.waterActivationDateStore,
                            "Sales_Rep":this.$store.state.stepEight.salesRep,
                            "TV_Essentials_Non_RGU":this.$store.state.stepThree.tvEssentials,
                            "First_Name":this.$store.state.stepOne.primaryFirstName,
                            "Last_Name":this.$store.state.stepOne.primaryLastName,
                            "Buyer2_First_Name":this.$store.state.stepOne.secondaryFirstName,
                            "Buyer2_Last_Name":this.$store.state.stepOne.secondaryLastName,
                            "Secondary_Date_of_Birth":this.$store.state.stepTwo.secondaryBirthDateFormattedStore,
                            "Solar_Consultation_Date":this.$store.state.stepSix.solarConDateFormattedStore,
                            "Solar_Notes":this.$store.state.stepSix.solarNotes,
                            "Solar_Consultation_Time_Window":this.$store.state.stepSix.solarConsulationTime                        
                        },
                        Trigger:["workflow"]
                    }
                    const that = this;
                    await  ZOHO.CRM.API.updateRecord(config)
                    .then(function(data){
                        console.log(data);
                        that.loading = false;
                        //Show Snackbar with text about updating CRM
                    })
                

        //----------------------------------------------PRUEBA PARA FLOW ------------------------------------------------------------------------------------------------
                /*
                    //     const callCRM = await axios.request({
                    //     url: "https://flow.zoho.com/689711155/flow/webhook/incoming?zapikey=1001.01017bcb7c986cf5949f64aac79921e1.a6fcda992401f78a23032ff7d5fbab63&isdebug=false",
                    //     method: 'POST',
                    //     headers:{
                    //     // "Content-type":"application/json",
                    //     "Content-type":"application/x-www-form-urlencoded"
                    //     },
                    //     data: JSON.stringify(APIdata)
                    // })
                    //   console.log(callCRM);
                    // this.loading = false;
                
                */
                /*  try{
                    var request ={
                        url : "https://flow.zoho.com/689711155/flow/webhook/incoming?zapikey=1001.01017bcb7c986cf5949f64aac79921e1.a6fcda992401f78a23032ff7d5fbab63&isdebug=false",
                        body:{APIdata}
                    }
                    ZOHO.CRM.HTTP.post(request)
                    .then(function(data){
                    console.log(data)
                    that.loading = false;
                    })

                    }catch(err){
                        console.log("Errorrrrr " +err)
                        this.loading = false;
                    }
                    */
                }else{
                    //Here it is with the WEB
                    
                }
            }
        }
    },
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
    .step-space{
        flex-basis:0 !important;
        max-width: 100px !important;
    }
</style>