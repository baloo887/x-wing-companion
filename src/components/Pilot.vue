<template>
    <q-scroll-area
      horizontal
      style="height: 650px">
      <q-list bordered>
        <q-item>
          <q-item-section class="col-md-5 col-sm-5 text-h6">{{ pilot.name }}: {{ cost }}pt
            <q-input v-model="pilotNumber" label="Ship Id"/>
          </q-item-section>
        </q-item>
        <q-item>
          <div class="flex row no-wrap">
              <div class="flex no-wrap">
                  <gameCard v-for="config in configurations" :key="config.id"
                    v-bind:cardInfo="config"
                    v-bind:type="'configuration-card'"
                  />
              </div>
              <gameCard
                v-bind:cardInfo="pilot"
                v-bind:type="'pilot-card'"
              />
              <div class="flex no-wrap">
                  <gameCard v-for="upgrade in upgrades" :key="upgrade.id"
                    v-bind:cardInfo="upgrade"
                    v-bind:type="'upgrade-card'"
                  />
              </div>
          </div>
        </q-item>
      </q-list>
    </q-scroll-area>
</template>

<script>
import gameCard from './Card.vue';

export default {
  name: 'Pilot',
  components: { gameCard },
  data() {
    return {
      pilotNumber: '',
    };
  },
  props: {
    pilot: {
      type: Object,
    },
    pilotIndex: {
      type: String,
    },
    configurations: {
      type: Array,
    },
    upgrades: {
      type: Array,
    },
    cost: {
      type: Number,
    },
  },
};
</script>
