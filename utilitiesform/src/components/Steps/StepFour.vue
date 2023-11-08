<template>
    <div>
       <v-card
           class="mb-12"
           flat
          
           >
           <v-card-title class="bluelight-text">
           Home Security:
       </v-card-title>
       <v-card-text>
        <div v-if="this.$store.state.stepOne.TCEmail == 'buyerteam@tonybaroni.com'"  >
            <p class="text-h6"> <mark> Tony Baroni Team ADT Offer</mark></p>
            <p style="font-size: large;"><b>Install Fee</b> is <b>$199</b> for <b>Command, Video Lite,</b> or <b>Home Automation</b> <br>
                <b>Install Fee</b> is <b>$299</b> for <b>Video & Home Automation</b></p><br>
            <p style="font-size: large;" > <b>1 camera free </b>on <b>Video</b> and <b>Video & Home Automation</b> (additional cams get UH discount)</p>
        </div>
           <v-row dense class="mt-0">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       v-model="whoIsNameWillSecurityBeIn"
                       label="Who's Name will Security be in?"
                       :items="['Primary','Secondary']"
                       hint="Select Primary or Secondary"
                       persistent-hint
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row dense class="mt-2">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       v-model="alarmCompany"
                       label="Alarm Company"
                       :items="['','ADT','SimpliSafe']"
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row v-if="alarmCompany == 'ADT'" dense>
                   <v-col class="" cols="6">
                       <v-text-field
                       dense
                       outlined
                       v-model="las4OfSSN"
                       label="Last 4 of SSN"
                       >
                   </v-text-field>
               </v-col>
               </v-row>
               <v-row v-if="alarmCompany == 'ADT'" dense class="mt-2">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       v-if="alarmCompany == 'ADT'"
                       v-model="ADTPackageChosen"
                       label="ADT Package Chosen"
                       :items="['','Basic','Command - Traditional','Command - Traditional w/ Life Safety','Command - Control','Command - Remote','Command - Video Lite','Command - Video & Home Automation']"
                       
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row v-if="alarmCompany == 'ADT'" dense class="mt-0">
                   <v-col
                   cols="6"
                   lg="6"
                   >
                       <v-menu
                       ref="alarmInstallMenu"
                       v-model="alarmInstallMenu"
                       :close-on-content-click="false"
                       transition="scale-transition"
                       offset-y
                       max-width="290px"
                       min-width="auto"
                       >
                       <template v-slot:activator="{ on, attrs }">
                           <v-text-field
                           v-model="alarmInstallFormated"
                           label="Alarm Install Date"
                           dense
                           outlined
                           hint="MM/DD/YYYY"
                           persistent-hint
                           append-icon="mdi-calendar"
                           v-bind="attrs"
                           @blur="alarmInstallDate = parseDate(alarmInstallFormated)"
                           v-on="on"
                           ></v-text-field>
                       </template>
                       <v-date-picker
                           v-model="alarmInstallDate"
                           no-title
                           @input="alarmInstallMenu = false"
                       ></v-date-picker>
                       </v-menu>
               </v-col>
               </v-row>
               <v-row  v-if="alarmCompany == 'ADT'" dense class="">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       v-model="alarmInstalTimeWindows"
                       label="Alarm Install Time Window"
                       :items="['','8am-12pm','12pm-4pm','4pm-8pm']"
                       hint="** 4pm-8pm is not available on Saturdays **
                           ** No Sunday Appointments **"
                       persistent-hint
                       
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row v-if="alarmCompany == 'ADT'" dense>
                   <v-col cols="6">
                       <v-checkbox 
                       v-model="needToBeScheduleBySupport"
                       v-if="alarmCompany == 'ADT'"
                       label="Needs to be scheduled by Support (date too far out)"
                       hint="(Must have entered the order and supplied TraxID)"
                       persistent-hint
                       ></v-checkbox>
                   </v-col>
               </v-row>
               <v-row dense>
                   <v-col class="mt-2" cols="6">
                       <v-text-field
                       dense
                       outlined
                       v-model="traxID"
                       label="TraxID / Order#"
                       >
                   </v-text-field>
               </v-col>
               </v-row>
               <v-row class="pt-0">
                   <v-col cols="">
                       <v-textarea
                       v-model="alarmNotes"
                       label=" Alarm Notes "
                       outlined
                       dense
                       ></v-textarea>
                   </v-col>
               </v-row>
               <v-row v-if="alarmCompany == 'ADT'" class="mt-5">
                <v-col>
                    <v-row>
                        <h4 class="red--text">*You must read the following to complete the welcome call if not transferring to SafeStreets**</h4>
                    </v-row>
                    <v-row class="mt-10">
                       <p style="color:black"> For verification purposes ADT requires my to recap a few items and ask you a few questions: </p>
                    </v-row>
                </v-col>
                
            </v-row>
            <v-row  v-if="alarmCompany == 'ADT'" class="mt-10">
                <v-col>
                    <v-row>
                        <p style="font-style: italic; color:black">We're glad you were able to take advantage of the promotional package that ADT is offering.</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">I have your monthly rate as _____ for a period of 36 months. Is this correct?</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">You will receive a paper statement showing your monthly monitoring amount. That is not a bill so once you go over it, you can discard it.</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Your activation is only _____, congratulations!</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Your payments will be drafted from your Credit Card account.</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Do you understand that your only right of rescission is the one outlined in your agreement?</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Do you already have an active alarm at this location?</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; "> 
                            <ul style="list-style-type:none" >
                                <li> <a style="color: blue;">If Yes:</a> What company are you currently with?</li>
                                <li>  How many years have you had it?</li>
                                <li>  Do you understand that we are not affiliated with _____?</li>
                                <li> Do you understand that it is your responsibility to cancel, along with any fees?</li>
                            </ul>
                        </p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Do you have any questions for me?</p>
                    </v-row>
                    <v-row>
                        <p style="font-style: italic; color:black">Thank you for choosing SafeStreets and ADT.</p>
                    </v-row>
                </v-col>
            </v-row>
            <v-row v-if="alarmCompany == 'ADT'" dense>
                <v-col cols="6">
                    <v-checkbox 
                    v-model="uhCompletedWelcomCall"
                    label="UH Completed Welcome Call"              
                    hint="(Click once you have read the entire Welcome Call Script)"
                    persistent-hint
                    ></v-checkbox>
                </v-col>
            </v-row>
               <!-- This field wil populate with CRM and sends to another  -->
               <!-- <v-row  dense>
                   <v-col class="mt-2" cols="6">
                       <v-text-field
                       dense
                       outlined
                       v-model="alreadyRequestedThroughIntroEmail"
                       label="Already Requested through Intro Email?"
                       hint="If yes, no need to ask"
                       persistent-hint
                       >
                   </v-text-field>
               </v-col>
               </v-row> -->
       </v-card-text>
</v-card>
    4/8
    </div>
</template>

<script>
export default {
    data: vm=>( {
        alarmInstallMenu:false,
        alarmInstallDate:'',
        alarmInstallFormated:'',
        
        
    }),
    watch: {
        alarmInstallDate (val) {
           this.alarmInstallFormatedStore = this.alarmInstallFormated = this.formatDate(this.alarmInstallDate)
        },
    },
    computed: {
        alarmInstallFormatedStore:{
            get(){
                return this.$store.state.stepFour.alarmInstallFormatedStore;
            },
            set(value){
            this.$store.state.stepFour.alarmInstallFormatedStore=value;
            },
        },
        whoIsNameWillSecurityBeIn:{
            get(){
                return this.$store.state.stepFour.whoIsNameWillSecurityBeIn;
            },
            set(value){
            this.$store.state.stepFour.whoIsNameWillSecurityBeIn=value;
            },
        },
        alarmCompany:{
            get(){
                return this.$store.state.stepFour.alarmCompany;
            },
            set(value){
            this.$store.state.stepFour.alarmCompany=value;
            },
        },
        las4OfSSN:{
            get(){
                return this.$store.state.stepFour.las4OfSSN;
            },
            set(value){
            this.$store.state.stepFour.las4OfSSN=value;
            },
        },
        ADTPackageChosen:{
            get(){
                return this.$store.state.stepFour.ADTPackageChosen;
            },
            set(value){
            this.$store.state.stepFour.ADTPackageChosen=value;
            },
        },
        alarmInstalTimeWindows:{
            get(){
                return this.$store.state.stepFour.alarmInstalTimeWindows;
            },
            set(value){
            this.$store.state.stepFour.alarmInstalTimeWindows=value;
            },
        },
        needToBeScheduleBySupport:{
            get(){
                return this.$store.state.stepFour.needToBeScheduleBySupport;
            },
            set(value){
            this.$store.state.stepFour.needToBeScheduleBySupport=value;
            },
        },
        traxID:{
            get(){
                return this.$store.state.stepFour.traxID;
            },
            set(value){
            this.$store.state.stepFour.traxID=value;
            },
        },
        alarmNotes:{
            get(){
                return this.$store.state.stepFour.alarmNotes;
            },
            set(value){
            this.$store.state.stepFour.alarmNotes=value;
            },
        },
        uhCompletedWelcomCall:{
            get(){
                return this.$store.state.stepFour.uhCompletedWelcomCall;
            },
            set(value){
            this.$store.state.stepFour.uhCompletedWelcomCall=value;
            },
        },
        alreadyRequestedThroughIntroEmail:{
            get(){
                return this.$store.state.stepFour.alreadyRequestedThroughIntroEmail;
            },
            set(value){
            this.$store.state.stepFour.alreadyRequestedThroughIntroEmail=value;
            },
        },
        
    },
    methods: {
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