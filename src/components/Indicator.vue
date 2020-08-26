<template>
    <q-knob
      :min="data.min"
      :max="parseInt(data.max)"
      v-model="value"
      show-value
      size="75px"
      :thickness="0.22"
      track-color="grey-3"
      class="q-ma-md"
      v-bind:class="getClass(statistics.name)"
    >
      <q-img
        class="statistics-image"
        :src="statistics.icon"
      >
        <div class="absolute-center statistic-value">
          <span class='value'>{{ value }}</span>
        </div>
      </q-img>
    </q-knob>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'indicator',
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      value: parseInt(this.data.max, 10),
      statistics: {},
    };
  },
  mounted() {
    this.statistics = this.statData(this.data.id);
  },
  computed: {
    ...mapGetters({
      statData: 'metadata/getStatistic',
    }),
  },
  methods: {
    getClass: function gc(code) {
      let cssClass = 'prymary';

      switch (code) {
        case 'Shields':
          cssClass = 'shield-slider';
          break;
        case 'Hull':
          cssClass = 'hull-slider';
          break;
        case 'Charge':
          cssClass = 'charge-slider';
          break;
        case 'Force':
          cssClass = 'force-slider';
          break;
        default:
          cssClass = '';
      }

      return cssClass;
    },
  },
};
</script>

<style lang="scss">
  .statistic-value {
    border-radius: 25px;
    width: 25px;
    height: 25px;
    top: 54%;
  }

  .statistics-image {
    width: 75px !important;
    height: 75px !important;
    top: -4px;
  }

  .force-slider {
    color: $forces;
  }

  .hull-slider {
    color: $hulls;
  }

  .shield-slider {
    color: $shields;
  }

  .charge-slider {
    color: $charges;
  }

  .value {
    left: 0;
    right: 0;
    position: absolute;
    text-align: center;
    top: 3px;
    font-size: 20pt;
  }
</style>
