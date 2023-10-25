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
        <v-row dense class="mt-0">
            <v-col>
                <p>
                    <span class="yellow black--text text-h6">Tony Baroni Team ADT Offer</span>
                    Install Fee is $199 for Command, Video Lite, or Home Automation
                    <br class="">
                    Install Fee is $299 for Video & Home Automation
                </p>
            </v-col>
        </v-row>
           <v-row dense class="mt-0">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
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
                       label="Alarm Company"
                       :items="['ADT','SimpliSafe']"
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row dense>
                   <v-col class="" cols="6">
                       <v-text-field
                       dense
                       outlined
                       label="Last 4 of SSN"
                       >
                   </v-text-field>
               </v-col>
               </v-row>
               <v-row dense class="mt-2">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       label="ADT Package Chosen"
                       :items="['Basic','Command - Traditional','Command - Traditional w/ Life Safety','Command - Control','Command - Remote','Command - Video Lite','Command - Video & Home Automation']"
                       
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row dense class="mt-0">
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
               <v-row dense class="">
                   <v-col cols="6">
                       <v-select
                       dense
                       outlined
                       label="Alarm Install Time Window"
                       :items="['8am-12pm','12pm-4pm','4pm-8pm']"
                       hint="** 4pm-8pm is not available on Saturdays **
                           ** No Sunday Appointments **"
                       persistent-hint
                       
                       ></v-select>
                   </v-col>
               </v-row>
               <v-row dense>
                   <v-col cols="6">
                       <v-checkbox 
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
                       label="TraxID / Order#"
                       >
                   </v-text-field>
               </v-col>
               </v-row>
               <v-row class="pt-0">
                   <v-col cols="">
                       <v-textarea
                       label=" Alarm Notes "
                       outlined
                       dense
                       ></v-textarea>
                   </v-col>
               </v-row>
               <v-row dense>
                   <v-col cols="6">
                       <v-checkbox 
                       label="UH Completed Welcome Call"              
                       hint="(Click once you have read the entire Welcome Call Script)"
                       persistent-hint
                       ></v-checkbox>
                   </v-col>
               </v-row>
               <v-row dense>
                   <v-col class="mt-2" cols="6">
                       <v-text-field
                       dense
                       outlined
                       label="Already Requested through Intro Email?"
                       hint="If yes, no need to ask"
                       persistent-hint
                       >
                   </v-text-field>
               </v-col>
               </v-row>
       </v-card-text>
</v-card>
    4/8
    </div>
</template>

<script>
export default {
    data: vm=>( {
        alarmInstallMenu:false,
        alarmInstallDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        alarmInstallFormated:vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
        
    }),
    watch: {
        alarmInstallDate (val) {
            this.alarmInstallFormated = this.formatDate(this.alarmInstallDate)
        },
    },
    computed: {
      
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