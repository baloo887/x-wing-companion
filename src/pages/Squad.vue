<template>
  <q-page class="flex column">
      <div v-if="squadron">
        <q-list bordered separator>
          <q-item>
            <q-item-section>Name: {{ squadron.name }}</q-item-section>
          </q-item>

          <q-item>
            <q-item-section>Points: {{ squadron.cost }}</q-item-section>
          </q-item>
        </q-list>
        <Pilot v-for="(pilot,index) in squadron.deck" :key="pilot.pilot_card.id+'_'+index"
          v-bind:cost="pilot.cost"
          v-bind:pilot="pilot.pilot_card"
          v-bind:upgrades="getUpgrades(index)"
          v-bind:configurations="getConfigurations(index)"
          v-bind:pilotIndex="pilot.pilot_card.id+'_'+index"
        ></Pilot>
      </div>
      <div v-if="!squadron">
        Open the drawer and load squadron
      </div>
  </q-page>
</template>

<script>
import Pilot from 'components/Pilot.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Squad',
  components: { Pilot },
  computed: {
    ...mapGetters({
      squadron: 'currentSquadron/getSquadron',
      getUpgrades: 'currentSquadron/getUpgrades',
      getConfigurations: 'currentSquadron/getConfigurations',
    }),

  },
};
</script>
