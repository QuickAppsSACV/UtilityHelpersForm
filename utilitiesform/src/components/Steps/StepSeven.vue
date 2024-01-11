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
                        disabled
                        v-model="availablePower"
                        label="Available Power Provider(s)"
                        >
                    </v-text-field>
                </v-col>
            </v-row>
                <v-row dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
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
                        clearable
                        dense
                        @change="searchProvider()"
                        outlined
                        v-model="electricProviderActived"
                        label="Electric Provider Activated"
                        :items="groupElectricProviderActived"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row v-if="electricProviderActived== 'Colorado Springs Utilities'">
                    <v-col>
                        <v-row> <p style="color:red">**IMPORTANT**</p>Please insure you have the following information for the Secondary as the provider requires Emergency Contact Info:</v-row>
                        <v-row>
                            <ul>
                                <li><p><span style="color:black">Name</span> (first & last)</p></li>
                                <li><p style="color:black">Phone Number</p></li>
                            </ul> 
                        </v-row>
                    </v-col>
                </v-row>
                <v-row  dense class="mt-5">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="activationOeTransfer"
                        label="Activation or Transfer"
                        :items="['New Activation','Transfer']"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row v-if="this.$store.state.stepThree.primaryBirthDateFormattedStore == '' && whoIsNameWillElectric == 'Primary'" dense class="mt-0">
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
                            v-model="primaryDOBFormatedStore"
                            label="Primary DOB"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="primaryDOBDate = parseDate(primaryDOBFormatedStore)"
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
                <!-- ssn require -->
                <v-row v-if="(this.$store.state.stepThree.primarySSN == '' && whoIsNameWillElectric == 'Primary') && ssnCRM" dense>
                    <!-- Power -->
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
                <!-- DOB require -->
                <v-row v-if="(this.$store.state.stepThree.secondaryBirthDateFormattedStore == '' && whoIsNameWillElectric == 'Secondary') && dobCRM" dense class="mt-0">
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
                            v-model="secondaryDOBFormatedStore"
                            label="Secondary DOB for Power"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="secondaryDOBDate = parseDate(secondaryDOBFormatedStore)"
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
                <!-- ssn2 require -->
                <v-row v-if="(this.$store.state.stepThree.secondarySSNforcable == '' &&  whoIsNameWillElectric == 'Secondary') && ssnCRM"  dense>
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
                <v-row  v-if="ElectricProviderAUX.includes(electricProviderActived)" dense>
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
                <v-row v-if="electricProviderActived == 'Omaha Public Power District'" dense>
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="employerNameBusiness"
                        label="Employer or Name of Business"
                        hint="Required for account setup. If not employed just enter 'Retired'"
                        persistent-hint
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="electricProviderActived == 'FPLNW - Florida Power & Light Northwest'">
                    <v-col>
                        <mark>While activating <b> <u>FPL Northwest</u></b> please create the following temporary password for customer:</mark>
                        <br>
                        <p><span style="font-size: large;color:red">Password1</span>(must be case-sensitive)</p>
                        <i style="color:black">Customer will automatically receive it in their confirmation email, with instructions to change it.</i>
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
                <v-row v-if="activationOeTransfer == 'Transfer'" dense class="mt-0">
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
                <v-row v-if="haveSupportKeyElectric == true" class="pt-0">
                    <v-col cols="">
                        <v-textarea
                        v-model="ticketNotes"
                        label="Ticket Notes"
                        outlined
                        dense
                        ></v-textarea>
                    </v-col>
                </v-row>
                <div v-if="availablePower.toLowerCase().includes('fpl')" class="mb-5 mt-2">
                    <v-row >
                    <v-col cols="2">
                        <v-img
                            :src="require('../../assets/fplHome.png')"
                            contain
                            class="mx-auto"
                            height="200"
                            />
                    </v-col>
                    </v-row>
                    <a href="https://nexterahome.force.com/surgeportal" target="_blank"> <h1>Click Here to add SurgeShield Protection</h1></a>
                    <v-row class="pt-5">
                        <v-col justify="center">
                        <h2 style="color:black">SurgeShield</h2> <br>
                            <p style="color:black;font-size: medium;">Attaches a <u>state-of-the-art surge protector directly at your electric meter</u> to help protect your<u>appliances</u>  from power surges through your electric meter.
                                The SurgeShield program also comes with a <u><b>$5,000 limited manufacturer’s warranty per covered appliance</b></u>, per occurrence for damages caused by a failure of the surge protector to properly perform.
                                <br><b style="color:blue">$10.95 plus tax</b> <i style="color:grey">(discounted from $11.95)</i><br>
                                <b style="color:red"> +2 Months Free for using Utility Helpers!</b></p>
                            <h2 style="color:black">Electronics Surge Protection</h2>
                            <p style="color:black; font-size: medium;">
                            A program offered by FPL Home that will <u>reimburse you for the repair or replacement</u> of your covered electronics, 
                            such as <u>TVs, computers, gaming systems, tablets </u>etc. that are damaged due to power surges <b>up to $5,000 per year.</b><br>
                            <b style="color:blue">$9.95 plus tax</b> <i style="color:gray">(discounted from $10.95)</i>
                            </p>
                            <h2><span style="color:green">Bundle Both for $15.95</span> (discounted from $16.95)</h2>
                        </v-col>
                    </v-row>
            </div>
                <v-row  v-if="availablePower.toLowerCase().includes('fpl')"  dense>
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
                        disabled
                        outlined
                        @change="searchProviderGas()"
                        v-model="availableGas"
                        label="Available Gas Provider(s)"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-card-title v-if="groupGasProviderAux.includes(availableGas)"  class="bluelight-text">
                    Gas Activation:
                </v-card-title>
                <v-row  v-if="!(groupGasProviderAux.includes(availableGas))" justify="center">
                    <h2  style="color:red;">The customer will need to activate gas <br>instructions will be in the Confirmation Email</h2>
                </v-row>
                <v-row dense class="pt-5">
                    <v-col cols="6">
                        <v-select
                        clearable
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
                <v-row v-if="groupGasProviderAux.includes(availableGas)" dense class="">
                    <v-col cols="6">
                        <v-select
                        clearable
                        dense
                        outlined
                        v-model="gasProviderActivated"
                        label="​Gas Provider Activated"
                        :items="groupGasProviderActivated"

                        ></v-select>
                    </v-col>
                </v-row>
                <v-row v-if="electricProviderActived == 'TECO - Tampa Electric Company' && gasProviderActivated == 'TECO - Peoples Gas' " class="pa-10" justify="center">
                        <h2 style="color:red; ">For TECO: Gas will need to be activated the next BUSINESS day after electricity, for safety purposes*</h2>
                </v-row>
                <v-row v-if="groupGasProviderAux.includes(availableGas)" dense class="mt-0">
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
                <v-row v-if="!(primaryDOBFormatedStore != '' || whosNameWillGas != 'Primary'|| this.$store.state.stepThree.primaryBirthDateFormattedStore !='') && dobCRMGas" dense class="mt-0">
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
                            v-model="primaryDOBFormatedGas"
                            label="Primary DOB"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="primaryDOBDate2 = parseDate(primaryDOBFormatedGas)"
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
                <v-row v-if="!(this.$store.state.stepThree.primarySSN != '' || whosNameWillGas != 'Primary'|| primarySSN!='') && ssnCRMGas" dense>
                    <!-- Gas -->
                    <v-col class="" cols="6">
                        <v-text-field
                        dense
                        outlined
                        v-model="primarySSNGas"
                        label="Primary SSN"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="!(secondaryDOBFormatedStore != ''|| whosNameWillGas != 'Secondary'||this.$store.state.stepThree.secondaryBirthDateFormattedStore!= '')&& dobCRMGas" dense class="mt-0">
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
                            v-model="secondDOBFormatedGas"
                            label="Secondary DOB"
                            dense
                            outlined
                            hint="MM/DD/YYYY"
                            persistent-hint
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            @blur="secondDOBDate2 = parseDate(secondDOBFormatedGas)"
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
                <v-row v-if="!(this.$store.state.stepThree.secondarySSNforcable != '' || secondarySSNForPower != '' || whosNameWillGas != 'Secondary') && ssnCRMGas" dense>
                    <v-col class="" cols="6">
                        <!-- Gas -->
                        <v-text-field
                        dense
                        outlined
                        v-model="secondarySSN"
                        label="Secondary SSN"
                        >
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row v-if="groupGasProviderAux.includes(availableGas)" dense>
                    <v-col cols="6">
                        <v-checkbox 
                        v-model="haveSupportKeyGas"
                        label="Have Support Key the Gas Order?"
                        ></v-checkbox>
                    </v-col>
                </v-row>
                <v-row v-if="haveSupportKeyGas == true" class="pt-0">
                    <v-col cols="">
                        <v-textarea
                        v-model="ticketNotesGas"
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
        primaryDOBFormatedGas:'',
        secondDOBMenu2:false,
        secondDOBDate2:'',
        secondDOBFormatedGas:'',
        // groupElectricProviderActived:
        // [
        // '',
        // 'AEP - Ohio',
        // 'Alabama Power',
        // 'Ameren',
        // 'Appalachian Power - AEP',
        // 'Appalachian Power',
        // 'Atlantic City Electric',
        // 'Austin Electric and Utilities - TX',
        // 'Avista',
        // 'Baltimore Gas and Electric',
        // 'Beaches Energy - Jacksonville Beach',
        // 'Black Hills Energy',
        // 'Bowling Green Municipal Utilities - KY',
        // 'Brunswick Electric',
        // 'CDE Lightband',
        // 'CFEC - Central Florida Electric Co-Op',
        // 'CLECO',
        // 'CORE Electric Cooperative',
        // 'Carroll Electric Cooperative Corporation',
        // 'Central Electric Coop - PA',
        // 'Chelco Energy',
        // 'Chickasaw Electric',
        // 'Choose Power',
        // 'Cimarron Electric',
        // 'City Utilities of Springfield',
        // 'City of Alachua - FL',
        // 'City of Bartow - FL',
        // 'City of Chattahoochee - FL',
        // 'City of College Park - GA',
        // 'City of Concord - NC',
        // 'City of East Point - GA',
        // 'City of Edmond - OK',
        // 'City of Fort Meade - FL',
        // 'City of Fort Morgan - CO',
        // 'City of Green Coves Springs - FL',
        // 'City of High Point - NC',
        // 'City of Homestead - FL',
        // 'City of Independence - MO',
        // 'City of Lake Worth - FL',
        // 'City of Leesburg - FL',
        // 'City of Longmont - CO',
        // 'City of Loveland - CO',
        // 'City of Lubbock - TX',
        // 'City of Monroe - NC',
        // 'City of Mount Dora - FL',
        // 'City of Mount Vernon - MO',
        // 'City of New Smyrna Beach - FL',
        // 'City of Newberry - FL',
        // 'City of Nixa - MO',
        // 'City of Ocala - FL',
        // 'City of Robertsdale - AL',
        // 'City of Seymour - MO',
        // 'City of Tallahassee - FL',
        // 'City of Winter Park - FL',
        // 'Clark Public Utilities - WA',
        // 'Clay Electric',
        // 'Cobb EMC',
        // 'Colorado Springs Utilities',
        // 'Commonwealth Edison Company - IL',
        // 'Coserv - TX',
        // 'Cowetta-Fayette EMC - GA',
        // 'Cumberland Electric',
        // 'Delaware Electric Coop',
        // 'Delmarva Power',
        // 'Dominion Energy',
        // 'Duke Energy',
        // 'Duquesne Light - PA',
        // 'EREC - Escambia River Electric Co-op',
        // 'EWEB - Eugene Water & Electric Board',
        // 'Energy United',
        // 'Entergy',
        // 'EverSource',
        // 'FKEC - Florida Keys Electric Cooperative',
        // 'FPL - Florida Power & Light',
        // 'FPLNW - Florida Power & Light Northwest',
        // 'FPU - Florida Public Utilities',
        // 'Fort Pierce Utility Authority - FPUA',
        // 'Four County Electric Membership Corporation',
        // 'GCEC - Gulf Coast Electric Coop',
        // 'GRU - Gainesville Regional Utilities',
        // 'Georgia Power',
        // 'Glades Electric',
        // 'Greystone Power',
        // 'Gulf Power',
        // 'Hendricks Power Coop- IN',
        // 'Holy Cross Electric',
        // 'Huntsville Utilities - AL',
        // 'Idaho Power - ID',
        // 'Indiana Michigan Power - AEP',
        // 'JEA Utilities - FL',
        // 'Jackson Electric Membership Corporation',
        // 'Jersey Central Power & Light - FirstEnergy',
        // 'Jones-Onslow Electric Membership Co-Op',
        // 'KEC - Kootenai Electric Cooperative',
        // 'KU Kentucky Utilities - KY',
        // 'KUA - Kissimmee Utility Authority',
        // 'Kentucky Power - AEP',
        // 'Kodiak Electric Association - AK',
        // 'LADWP - Los Angeles Dept of Water and Power',
        // 'LG&E Louisville Gas and Electric - KY',
        // 'La Plata Electric Association',
        // 'Laclede Electric Coop',
        // 'Lakeland - FL',
        // 'Lansing Board of Water & Light - MI',
        // 'Lee County Electric',
        // 'Liberty Utility - MO',
        // 'Liberty Utility - NH',
        // 'MLGW - Memphis Light Gas and Water',
        // 'Merrimac Light Department',
        // 'Met Ed - FirstEnergy',
        // 'Metropolitan Edison',
        // 'MonPower - FirstEnergy',
        // 'Morgan County REA',
        // 'Mountain View Electric',
        // 'National Grid',
        // 'Northern Neck Electric Coop - VA',
        // 'OGE - Oklahoma Gas & Electric',
        // 'OREMC - Okefenoke',
        // 'OUC - Orlando Utilities Commission',
        // 'Ohio Edison - FirstEnergy',
        // 'Omaha Public Power District',
        // 'Orange & Rockland Utilities',
        // 'Ozark Electric',
        // 'PECO - Philadelphia Electric Company',
        // 'PEPCO - Potomac Electric Power Company',
        // 'PG&E - Pacific Gas & Electric',
        // 'PPL - Pennsylvania Power & Lights',
        // 'PSE&G - Public Service Electric & Gas Company',
        // 'Peace River Electric Cooperative',
        // 'Penelec - FirstEnergy',
        // 'Penn Power - FristEnergy',
        // 'Piedmont Electric Co-Op',
        // 'Potomac Edison - FirstEnergy',
        // 'Poudre Valley Electric',
        // 'Public Service Company of Oklahoma - AEP',
        // 'REC - Rappahannock Electric Cooperative',
        // 'Rhode Island Energy',
        // 'Riviera Utilities - AL',
        // 'SECO Energy',
        // 'SMECO - Southern Maryland Electric Co-Op',
        // 'SMUD - Sacramento Municipal Utility District',
        // 'SVEC - Suwannee Valley Electric Cooperative',
        // 'SWEC - Southwest Electric Co-op',
        // 'Sac Osage Electric Cooperative',
        // 'Sawnee River Electric Membership Cooperative',
        // 'Snapping Shoals Electric',
        // 'Southern California Edison',
        // 'Southwestern Electric Power Company - AEP',
        // 'TECO - Tampa Electric Company',
        // 'Tacoma Public Utilities - WA',
        // 'Talquin Co-op',
        // 'Tri-County Electric',
        // 'Unified Electric',
        // 'United Power',
        // 'Unitil',
        // 'Upper Peninsula Power Company',
        // 'WREC - Withlacoochee River Electric Cooperative',
        // 'Wake Electric Membership Corporation',
        // 'Walton EMC',
        // 'We Energies - WI',
        // 'Webster Electric Co-Op',
        // 'West FL Electric Coop',
        // 'West Penn Power - FirstEnergy',
        // 'White River Electric Cooperative',
        // 'Xcel Energy',
        // 'your HOA'
        // ],
        // groupGasProviderActivated: 
        // [
        // '',
        // 'Avista',
        // 'Baltimore Gas and Electric',
        // 'Center Point Energy',
        // 'Chattanooga Gas - TN',
        // 'City of Gainesville - Billed by GRU',
        // 'Colorado Springs Utilities',
        // 'Columbia Gas',
        // 'Coserv - TX',
        // 'Huntsville Utilities - AL',
        // 'KU Kentucky Utilities - KY',
        // 'LG&E Louisville Gas and Electric - KY',
        // 'MLGW - Memphis Light Gas and Water',
        // 'Michigan Gas Utilities',
        // 'Nicor Gas - IL',
        // 'Orange & Rockland Utilities',
        // 'PECO - Philadelphia Electric Company',
        // 'Piedmont Natural Gas',
        // 'Rhode Island Energy',
        // 'SoCal Gas',
        // 'Southwest Gas',
        // 'Spire Energy',
        // 'Summit Utilities',
        // 'TECO - Peoples Gas',
        // 'Unitil',
        // 'Washington Gas',
        // 'Xcel Energy',
        // ],
        ElectricProviderAUX:[
        "JEA Utilities - FL",
        "WREC - Withlacoochee River Electric Cooperative",
        "GRU - Gainesville Regional Utilities",
        "Baltimore Gas and Electric",,
        "AEP - American Electric Power",
        "AEP - Ohio",
        "City of Concord - NC",
        "MLGW - Memphis Light Gas and Water",
        "City of Lubbock - TX",
        "Commonwealth Edison Company - IL",
        "Kentucky Power",
        "Southern California Edison",
        "PECO - Philadelphia Electric Company",
        "Kodiak Electric Association - AK"
        ],
        groupGasProviderAux:[
        "Baltimore Gas and Electric",
        "Center Point Energy",
        "Chattanooga Gas - TN",
        "City of Gainesville - Billed by GRU",
        "Colorado Springs Utilities",
        "Columbia Gas",
        "Coserv - TX",
        "KU Kentucky Utilities - KY",
        "LG&E Louisville Gas and Electric - KY",
        "MLGW - Memphis Light Gas and Water",
        "Orange & Rockland Utilities",
        "Piedmont Natural Gas",
        "SoCal Gas",
        "Southwest Gas",
        "Spire Energy",
        "TECO - Peoples Gas",
        "Unitil",
        "Washington Gas",
        "Xcel Energy",
        "Huntsville Utilites - AL",
        "Nicor Gas - IL",
        "Rhode Island Energy",
        "Avista",
        "Michigan Gas Utilities",
        "PECO - Philadelphia Electric Company"
        ]

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
          this.primaryDOBFormatedGasStore =  this.primaryDOBFormatedGas = this.formatDate(this.primaryDOBDate2)
        },
        secondDOBDate2 (val) {
         this.secondDOBFormatedGasStore =   this.secondDOBFormatedGas = this.formatDate(this.secondDOBDate2)
        },
        
    },
    computed: {
        groupGasProviderActivated: {
            get() {
                return this.$store.state.stepSeven.groupGasProviderActivated;
            },
            set(value) {
                this.$store.state.stepSeven.groupGasProviderActivated = value;
            },
        },
        groupElectricProviderActived: {
            get() {
                return this.$store.state.stepSeven.groupElectricProviderActived;
            },
            set(value) {
                this.$store.state.stepSeven.groupElectricProviderActived = value;
            },
        },
        secondDOBFormatedGasStore: {
            get() {
                return this.$store.state.stepSeven.secondDOBFormatedGasStore;
            },
            set(value) {
                this.$store.state.stepSeven.secondDOBFormatedGasStore = value;
            },
        },
        primaryDOBFormatedGasStore: {
            get() {
                return this.$store.state.stepSeven.primaryDOBFormatedGasStore;
            },
            set(value) {
                this.$store.state.stepSeven.primaryDOBFormatedGasStore = value;
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
        availablePower: {
            get() {
                return this.$store.state.stepTwo.availablePower;
            },
            set(value) {
                this.$store.state.stepTwo.availablePower = value;
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
        availableGas: {
            get() {
                return this.$store.state.stepTwo.availableGas;
            },
            set(value) {
                this.$store.state.stepTwo.availableGas = value;
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
        primarySSNGas: {
            get() {
                return this.$store.state.stepSeven.primarySSNGas;
            },
            set(value) {
                this.$store.state.stepSeven.primarySSNGas = value;
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
        ticketNotesGas: {
            get() {
                return this.$store.state.stepSeven.ticketNotesGas;
            },
            set(value) {
                this.$store.state.stepSeven.ticketNotesGas = value;
            },
        },
        // employerNameBussines: {
        //     get() {
        //         return this.$store.state.stepSeven.employerNameBussines;
        //     },
        //     set(value) {
        //         this.$store.state.stepSeven.employerNameBussines = value;
        //     },
        // },
        ssnCRM: {
            get() {
                return this.$store.state.stepSeven.ssnCRM;
            },
            set(value) {
                this.$store.state.stepSeven.ssnCRM = value;
            },
        },
        dobCRM: {
            get() {
                return this.$store.state.stepSeven.dobCRM;
            },
            set(value) {
                this.$store.state.stepSeven.dobCRM = value;
            },
        },
        ssnCRMGas: {
            get() {
                return this.$store.state.stepSeven.ssnCRMGas;
            },
            set(value) {
                this.$store.state.stepSeven.ssnCRMGas = value;
            },
        },
        dobCRMGas: {
            get() {
                return this.$store.state.stepSeven.dobCRMGas;
            },
            set(value) {
                this.$store.state.stepSeven.dobCRMGas = value;
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
      },

      async searchProvider(){
        const that = this;
        await  ZOHO.CRM.API.searchRecord({Entity:"Providers",Type:"criteria",Query:"(Name:equals:"+that.electricProviderActived+")",delay:false})
        .then(function(data){
            //console.log(data);
            that.ssnCRM = data.data[0].SSN_Required;
            that.dobCRM = data.data[0].DOB_Required;

            // that.last4CRM = data.data[0].Last_4_Required;
            // that.driverLicenseCRM = data.data[0].Driver_License_Required;
            // that.requiresPINCRM = data.data[0].Requires_Security_Pin;
            // that.requiresQuestionCRM = data.data[0].Requires_Security_Questions;
        })
      },

      async searchProviderGas(){
        const that = this;
        await  ZOHO.CRM.API.searchRecord({Entity:"Providers",Type:"criteria",Query:"(Name:equals:"+that.availableGas+")",delay:false})
        .then(function(data){
            //console.log(data);
            that.ssnCRMGas = data.data[0].SSN_Required;
            that.dobCRMGas = data.data[0].DOB_Required;

            // that.last4CRM = data.data[0].Last_4_Required;
            // that.driverLicenseCRM = data.data[0].Driver_License_Required;
            // that.requiresPINCRM = data.data[0].Requires_Security_Pin;
            // that.requiresQuestionCRM = data.data[0].Requires_Security_Questions;
        })
      },
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