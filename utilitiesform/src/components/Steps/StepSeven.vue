<template>
    <div>
        <v-card
                        class="mb-12"
                        flat
                       
                        >
                        <v-card-title class="bluelight-text">
                        Power Activation or Transfer:
                    </v-card-title>
                    <v-card-text>
                        <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="availablePowerProviders"
                                    label="Available Power Provider(s)"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense class="">
                                <v-col cols="6">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="whoIsNameWillElectric"
                                    label="Who's Name will Electric be in?"
                                    :items="['Primary','Secondary']"
                                    hint="Select Primary or Secondary"
                                    persistent-hint
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="">
                                <v-col cols="6">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="electricProviderActived"
                                    label="Electric Provider Activated"
                                    :items="groupElectricProviderActived"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="">
                                <v-col cols="6">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="activationOeTransfer"
                                    label="Activation or Transfer"
                                    :items="['New Activation','Transfer']"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="primaryDOBMenu"
                                    v-model="primaryDOBMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="primaryDOBFormated"
                                        label="Primary DOB"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="primaryDOBDate = parseDate(primaryDOBFormated)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="primaryDOBDate"
                                        no-title
                                        @input="primaryDOBMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="primarySSN"
                                    label="Primary SSN"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="secondaryDOBMenu"
                                    v-model="secondaryDOBMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="secondaryDOBFormated"
                                        label="Secondary DOB for Power"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="secondaryDOBDate = parseDate(secondaryDOBFormated)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="secondaryDOBDate"
                                        no-title
                                        @input="secondaryDOBMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="secondarySSNForPower"
                                    label="Secondary SSN for Power"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="dlForPower"
                                    label="DL# for Power"
                                    hint="Enter number and State"
                                    persistent-hint
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="employerNameBussines"
                                    label="Employer or Name of Business"
                                    hint="Required for account setup. If not employed just enter 'Retired'"
                                    persistent-hint
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="electricActivationMenu"
                                    v-model="electricActivationMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="electricActivationFormated"
                                        label="Electric Activation Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="electricActivationDate = parseDate(electricActivationFormated)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="electricActivationDate"
                                        no-title
                                        @input="electricActivationMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="electricCancellationMenu"
                                    v-model="electricCancellationMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="electricCancellationFormated"
                                        label="Electric Cancellation Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="electricCancellationDate = parseDate(electricCancellationFormated)"
                                        v-on="on"
                                        >
                                        <template v-slot:message>
                                            <p>MM/DD/YYYY <br>(for Transfers Only)</p>
                                        </template>
                                    </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="electricCancellationDate"
                                        no-title
                                        @input="electricCancellationMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="6">
                                    <v-checkbox 
                                    v-model="haveSupportKeyElectric"
                                    label="Have Support Key the Electric Order?"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row class="pt-0">
                                <v-col cols="">
                                    <v-textarea
                                    v-model="ticketNotes"
                                    label="Ticket Notes"
                                    outlined
                                    dense
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="6">
                                    <p>Activated Power Add-Ons</p>
                                    <v-checkbox 
                                    v-model="fplSurgesShield"
                                    label="FPL SurgeShield"
                                    hint="Make this selection ONLY after completing activation above."
                                    persistent-hint
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="mt-2" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="availableGasProviders"
                                    label="Available Gas Provider(s)"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-card-title class="bluelight-text">
                                Gas Activation:
                            </v-card-title>
                            <v-row dense class="">
                                <v-col cols="6">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="whosNameWillGas"
                                    label="​Who's name will the Gas be in?"
                                    :items="['Primary','Secondary']"
                                    hint="Select Primary or Secondary"
                                    persistent-hint
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="">
                                <v-col cols="6">
                                    <v-select
                                    dense
                                    outlined
                                    v-model="gasProviderActivated"
                                    label="​Gas Provider Activated"
                                    :items="groupGasProviderActivated"

                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="gasActivationMenu"
                                    v-model="gasActivationMenu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="gasActivationFormated"
                                        label="Gas Activation Date"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="gasActivationDate = parseDate(gasActivationFormated)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="gasActivationDate"
                                        no-title
                                        @input="gasActivationMenu = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="primaryDOBMenu2"
                                    v-model="primaryDOBMenu2"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="primaryDOBFormated2"
                                        label="Primary DOB"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="primaryDOBDate2 = parseDate(primaryDOBFormated2)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="primaryDOBDate2"
                                        no-title
                                        @input="primaryDOBMenu2 = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="primarySSN2"
                                    label="Primary SSN"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense class="mt-0">
                                <v-col
                                cols="6"
                                lg="6"
                                >
                                    <v-menu
                                    ref="secondDOBMenu2"
                                    v-model="secondDOBMenu2"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="secondDOBFormated2"
                                        label="secondary DOB"
                                        dense
                                        outlined
                                        hint="MM/DD/YYYY"
                                        persistent-hint
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="secondDOBDate2 = parseDate(secondDOBFormated2)"
                                        v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="secondDOBDate2"
                                        no-title
                                        @input="secondDOBMenu2 = false"
                                    ></v-date-picker>
                                    </v-menu>
                            </v-col>
                            </v-row>
                            
                            <v-row dense>
                                <v-col class="" cols="6">
                                    <v-text-field
                                    dense
                                    outlined
                                    v-model="secondarySSN"
                                    label="Secondary SSN"
                                    >
                                </v-text-field>
                            </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="6">
                                    <v-checkbox 
                                    v-model="haveSupportKeyGas"
                                    label="Have Support Key the Gas Order?"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row class="pt-0">
                                <v-col cols="">
                                    <v-textarea
                                    v-model="ticketNotes2"
                                    label="Ticket Notes"
                                    outlined
                                    dense
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                    </v-card-text>
                </v-card>
                7/8
    </div>
</template>
<script>

export default {
    data: vm=>( {
        e1: 7,
        primaryDOBMenu:false,
        primaryDOBDate:'',
        primaryDOBFormated:'',
        secondaryDOBMenu:false,
        secondaryDOBDate:'',
        secondaryDOBFormated:'',
        electricActivationMenu: false,
        electricActivationDate: '',
        electricActivationFormated:'',
        electricCancellationMenu: false,
        electricCancellationDate: '',
        electricCancellationFormated:'',
        gasActivationMenu:false,
        gasActivationDate:'',
        gasActivationFormated:'',
        primaryDOBMenu2:false,
        primaryDOBDate2:'',
        primaryDOBFormated2:'',
        secondDOBMenu2:false,
        secondDOBDate2:'',
        secondDOBFormated2:'',
        groupElectricProviderActived:       ['AEP - Ohio',
                                            'Alabama Power',
                                            'Ameren',
                                            'Appalachian Power - AEP',
                                            'Appalachian Power',
                                            'Atlantic City Electric',
                                            'Austin Electric and Utilities - TX',
                                            'Avista',
                                            'Baltimore Gas and Electric',
                                            'Beaches Energy - Jacksonville Beach',
                                            'Black Hills Energy',
                                            'Bowling Green Municipal Utilities - KY',
                                            'Brunswick Electric',
                                            'CDE Lightband',
                                            'CFEC - Central Florida Electric Co-Op',
                                            'CLECO',
                                            'CORE Electric Cooperative',
                                            'Carroll Electric Cooperative Corporation',
                                            'Central Electric Coop - PA',
                                            'Chelco Energy',
                                            'Chickasaw Electric',
                                            'Choose Power',
                                            'Cimarron Electric',
                                            'City Utilities of Springfield',
                                            'City of Alachua - FL',
                                            'City of Bartow - FL',
                                            'City of Chattahoochee - FL',
                                            'City of College Park - GA',
                                            'City of Concord - NC',
                                            'City of East Point - GA',
                                            'City of Edmond - OK',
                                            'City of Fort Meade - FL',
                                            'City of Fort Morgan - CO',
                                            'City of Green Coves Springs - FL',
                                            'City of High Point - NC',
                                            'City of Homestead - FL',
                                            'City of Independence - MO',
                                            'City of Lake Worth - FL',
                                            'City of Leesburg - FL',
                                            'City of Longmont - CO',
                                            'City of Loveland - CO',
                                            'City of Lubbock - TX',
                                            'City of Monroe - NC',
                                            'City of Mount Dora - FL',
                                            'City of Mount Vernon - MO',
                                            'City of New Smyrna Beach - FL',
                                            'City of Newberry - FL',
                                            'City of Nixa - MO',
                                            'City of Ocala - FL',
                                            'City of Robertsdale - AL',
                                            'City of Seymour - MO',
                                            'City of Tallahassee - FL',
                                            'City of Winter Park - FL',
                                            'Clark Public Utilities - WA',
                                            'Clay Electric',
                                            'Cobb EMC',
                                            'Colorado Springs Utilities',
                                            'Commonwealth Edison Company - IL',
                                            'Coserv - TX',
                                            'Cowetta-Fayette EMC - GA',
                                            'Cumberland Electric',
                                            'Delaware Electric Coop',
                                            'Delmarva Power',
                                            'Dominion Energy',
                                            'Duke Energy',
                                            'Duquesne Light - PA',
                                            'EREC - Escambia River Electric Co-op',
                                            'EWEB - Eugene Water & Electric Board',
                                            'Energy United',
                                            'Entergy',
                                            'EverSource',
                                            'FKEC - Florida Keys Electric Cooperative',
                                            'FPL - Florida Power & Light',
                                            'FPLNW - Florida Power & Light Northwest',
                                            'FPU - Florida Public Utilities',
                                            'Fort Pierce Utility Authority - FPUA',
                                            'Four County Electric Membership Corporation',
                                            'GCEC - Gulf Coast Electric Coop',
                                            'GRU - Gainesville Regional Utilities',
                                            'Georgia Power',
                                            'Glades Electric',
                                            'Greystone Power',
                                            'Gulf Power',
                                            'Hendricks Power Coop- IN',
                                            'Holy Cross Electric',
                                            'Huntsville Utilities - AL',
                                            'Idaho Power - ID',
                                            'Indiana Michigan Power - AEP',
                                            'JEA Utilities - FL',
                                            'Jackson Electric Membership Corporation',
                                            'Jersey Central Power & Light - FirstEnergy',
                                            'Jones-Onslow Electric Membership Co-Op',
                                            'KEC - Kootenai Electric Cooperative',
                                            'KU Kentucky Utilities - KY',
                                            'KUA - Kissimmee Utility Authority',
                                            'Kentucky Power - AEP',
                                            'Kodiak Electric Association - AK',
                                            'LADWP - Los Angeles Dept of Water and Power',
                                            'LG&E Louisville Gas and Electric - KY',
                                            'La Plata Electric Association',
                                            'Laclede Electric Coop',
                                            'Lakeland - FL',
                                            'Lansing Board of Water & Light - MI',
                                            'Lee County Electric',
                                            'Liberty Utility - MO',
                                            'Liberty Utility - NH',
                                            'MLGW - Memphis Light Gas and Water',
                                            'Merrimac Light Department',
                                            'Met Ed - FirstEnergy',
                                            'Metropolitan Edison',
                                            'MonPower - FirstEnergy',
                                            'Morgan County REA',
                                            'Mountain View Electric',
                                            'National Grid',
                                            'Northern Neck Electric Coop - VA',
                                            'OGE - Oklahoma Gas & Electric',
                                            'OREMC - Okefenoke',
                                            'OUC - Orlando Utilities Commission',
                                            'Ohio Edison - FirstEnergy',
                                            'Omaha Public Power District',
                                            'Orange & Rockland Utilities',
                                            'Ozark Electric',
                                            'PECO - Philadelphia Electric Company',
                                            'PEPCO - Potomac Electric Power Company',
                                            'PG&E - Pacific Gas & Electric',
                                            'PPL - Pennsylvania Power & Lights',
                                            'PSE&G - Public Service Electric & Gas Company',
                                            'Peace River Electric Cooperative',
                                            'Penelec - FirstEnergy',
                                            'Penn Power - FristEnergy',
                                            'Piedmont Electric Co-Op',
                                            'Potomac Edison - FirstEnergy',
                                            'Poudre Valley Electric',
                                            'Public Service Company of Oklahoma - AEP',
                                            'REC - Rappahannock Electric Cooperative',
                                            'Rhode Island Energy',
                                            'Riviera Utilities - AL',
                                            'SECO Energy',
                                            'SMECO - Southern Maryland Electric Co-Op',
                                            'SMUD - Sacramento Municipal Utility District',
                                            'SVEC - Suwannee Valley Electric Cooperative',
                                            'SWEC - Southwest Electric Co-op',
                                            'Sac Osage Electric Cooperative',
                                            'Sawnee River Electric Membership Cooperative',
                                            'Snapping Shoals Electric',
                                            'Southern California Edison',
                                            'Southwestern Electric Power Company - AEP',
                                            'TECO - Tampa Electric Company',
                                            'Tacoma Public Utilities - WA',
                                            'Talquin Co-op',
                                            'Tri-County Electric',
                                            'Unified Electric',
                                            'United Power',
                                            'Unitil',
                                            'Upper Peninsula Power Company',
                                            'WREC - Withlacoochee River Electric Cooperative',
                                            'Wake Electric Membership Corporation',
                                            'Walton EMC',
                                            'We Energies - WI',
                                            'Webster Electric Co-Op',
                                            'West FL Electric Coop',
                                            'West Penn Power - FirstEnergy',
                                            'White River Electric Cooperative',
                                            'Xcel Energy',
                                            'your HOA'],
        groupGasProviderActivated:  ['Avista',
                                    'Baltimore Gas and Electric',
                                    'Center Point Energy',
                                    'Chattanooga Gas - TN',
                                    'City of Gainesville - Billed by GRU',
                                    'Colorado Springs Utilities',
                                    'Columbia Gas',
                                    'Coserv - TX',
                                    'Huntsville Utilities - AL',
                                    'KU Kentucky Utilities - KY',
                                    'LG&E Louisville Gas and Electric - KY',
                                    'MLGW - Memphis Light Gas and Water',
                                    'Michigan Gas Utilities',
                                    'Nicor Gas - IL',
                                    'Orange & Rockland Utilities',
                                    'PECO - Philadelphia Electric Company',
                                    'Piedmont Natural Gas',
                                    'Rhode Island Energy',
                                    'SoCal Gas',
                                    'Southwest Gas',
                                    'Spire Energy',
                                    'Summit Utilities',
                                    'TECO - Peoples Gas',
                                    'Unitil',
                                    'Washington Gas',
                                    'Xcel Energy',]
    }),
    watch: {
        primaryDOBDate (val) {
        this.primaryDOBFormatedStore =  this.primaryDOBFormated = this.formatDate(this.primaryDOBDate)
        },
        secondaryDOBDate (val) {
        this.secondaryDOBFormatedStore =    this.secondaryDOBFormated = this.formatDate(this.secondaryDOBDate)
        },
        electricActivationDate (val) {
        this.electricActivationFormatedStore =    this.electricActivationFormated = this.formatDate(this.electricActivationDate)
        },
        electricCancellationDate (val) {
        this.electricCancellationFormatedStore =   this.electricCancellationFormated = this.formatDate(this.electricCancellationDate)
        },
        gasActivationDate (val) {
        this.gasActivationFormatedStore =   this.gasActivationFormated = this.formatDate(this.gasActivationDate)
        },
        primaryDOBDate2 (val) {
          this.primaryDOBFormated2Store =  this.primaryDOBFormated2 = this.formatDate(this.primaryDOBDate2)
        },
        secondDOBDate2 (val) {
         this.secondDOBFormated2Store =   this.secondDOBFormated2 = this.formatDate(this.secondDOBDate2)
        },
        
    },
    computed: {
        secondDOBFormated2Store: {
            get() {
                return this.$store.state.stepSeven.secondDOBFormated2Store;
            },
            set(value) {
                this.$store.state.stepSeven.secondDOBFormated2Store = value;
            },
        },
        primaryDOBFormated2Store: {
            get() {
                return this.$store.state.stepSeven.primaryDOBFormated2Store;
            },
            set(value) {
                this.$store.state.stepSeven.primaryDOBFormated2Store = value;
            },
        },
        gasActivationFormatedStore: {
            get() {
                return this.$store.state.stepSeven.gasActivationFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.gasActivationFormatedStore = value;
            },
        },
        electricCancellationFormatedStore: {
            get() {
                return this.$store.state.stepSeven.electricCancellationFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.electricCancellationFormatedStore = value;
            },
        },
        electricActivationFormatedStore: {
            get() {
                return this.$store.state.stepSeven.electricActivationFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.electricActivationFormatedStore = value;
            },
        },
        secondaryDOBFormatedStore: {
            get() {
                return this.$store.state.stepSeven.secondaryDOBFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.secondaryDOBFormatedStore = value;
            },
        },
        primaryDOBFormatedStore: {
            get() {
                return this.$store.state.stepSeven.primaryDOBFormatedStore;
            },
            set(value) {
                this.$store.state.stepSeven.primaryDOBFormatedStore = value;
            },
        },
        availablePowerProviders: {
            get() {
                return this.$store.state.stepSeven.availablePowerProviders;
            },
            set(value) {
                this.$store.state.stepSeven.availablePowerProviders = value;
            },
        },
        whoIsNameWillElectric: {
            get() {
                return this.$store.state.stepSeven.whoIsNameWillElectric;
            },
            set(value) {
                this.$store.state.stepSeven.whoIsNameWillElectric = value;
            },
        },
        electricProviderActived: {
            get() {
                return this.$store.state.stepSeven.electricProviderActived;
            },
            set(value) {
                this.$store.state.stepSeven.electricProviderActived = value;
            },
        },
        activationOeTransfer: {
            get() {
                return this.$store.state.stepSeven.activationOeTransfer;
            },
            set(value) {
                this.$store.state.stepSeven.activationOeTransfer = value;
            },
        },
        primarySSN: {
            get() {
                return this.$store.state.stepSeven.primarySSN;
            },
            set(value) {
                this.$store.state.stepSeven.primarySSN = value;
            },
        },
        secondarySSNForPower: {
            get() {
                return this.$store.state.stepSeven.secondarySSNForPower;
            },
            set(value) {
                this.$store.state.stepSeven.secondarySSNForPower = value;
            },
        },
        dlForPower: {
            get() {
                return this.$store.state.stepSeven.dlForPower;
            },
            set(value) {
                this.$store.state.stepSeven.dlForPower = value;
            },
        },
        employerNameBusiness: {
            get() {
                return this.$store.state.stepSeven.employerNameBusiness;
            },
            set(value) {
                this.$store.state.stepSeven.employerNameBusiness = value;
            },
        },
        haveSupportKeyElectric: {
            get() {
                return this.$store.state.stepSeven.haveSupportKeyElectric;
            },
            set(value) {
                this.$store.state.stepSeven.haveSupportKeyElectric = value;
            },
        },
        ticketNotes: {
            get() {
                return this.$store.state.stepSeven.ticketNotes;
            },
            set(value) {
                this.$store.state.stepSeven.ticketNotes = value;
            },
        },
        fplSurgesShield: {
            get() {
                return this.$store.state.stepSeven.fplSurgesShield;
            },
            set(value) {
                this.$store.state.stepSeven.fplSurgesShield = value;
            },
        },
        availableGasProviders: {
            get() {
                return this.$store.state.stepSeven.availableGasProviders;
            },
            set(value) {
                this.$store.state.stepSeven.availableGasProviders = value;
            },
        },
        whosNameWillGas: {
            get() {
                return this.$store.state.stepSeven.whosNameWillGas;
            },
            set(value) {
                this.$store.state.stepSeven.whosNameWillGas = value;
            },
        },
        gasProviderActivated: {
            get() {
                return this.$store.state.stepSeven.gasProviderActivated;
            },
            set(value) {
                this.$store.state.stepSeven.gasProviderActivated = value;
            },
        },
        primarySSN2: {
            get() {
                return this.$store.state.stepSeven.primarySSN2;
            },
            set(value) {
                this.$store.state.stepSeven.primarySSN2 = value;
            },
        },
        secondarySSN: {
            get() {
                return this.$store.state.stepSeven.secondarySSN;
            },
            set(value) {
                this.$store.state.stepSeven.secondarySSN = value;
            },
        },
        haveSupportKeyGas: {
            get() {
                return this.$store.state.stepSeven.haveSupportKeyGas;
            },
            set(value) {
                this.$store.state.stepSeven.haveSupportKeyGas = value;
            },
        },
        ticketNotes2: {
            get() {
                return this.$store.state.stepSeven.ticketNotes2;
            },
            set(value) {
                this.$store.state.stepSeven.ticketNotes2 = value;
            },
        },
        employerNameBussines: {
            get() {
                return this.$store.state.stepSeven.employerNameBussines;
            },
            set(value) {
                this.$store.state.stepSeven.employerNameBussines = value;
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