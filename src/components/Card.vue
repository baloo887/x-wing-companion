<template>
  <q-card flat>
      <q-img
      :src="cardInfo.card_image"
      spinner-color="white"
      v-bind:class="type"
      v-bind:position="pos"
    />
    <div class="absolute-top">
      <indicator v-for="statistic in stats" v-bind:key="statistic.id"
        v-bind:data="{max:statistic.value, min: 0,
          id: statistic.statistic_id }"
      />
    </div>
  </q-card>
</template>

<script>
import indicator from './Indicator.vue';

const statsIdToShow = [2, 4, 3, 7];

export default {
  name: 'gameCard',
  components: { indicator },
  props: {
    cardInfo: {
      type: Object,
    },
    type: {
      type: String,
      default: 'pilot-card',
    },
  },
  computed: {
    pos: function p() {
      let val = '50% 50%';
      switch (this.type) {
        case 'configuration-card':
          val = '0px 0px';
          break;
        case 'upgrade-card':
          val = '-200px 0px';
          break;
        default:
          break;
      }
      return val;
    },
    stats: function s() {
      return this.cardInfo.statistics
        .filter((item) => statsIdToShow.includes(item.statistic_id));
    },
  },
};
</script>

<style lang="scss">
  .pilot-card {
    width: 360px;
    height: 500px;
  }

  .configuration-card {
    width: 300px;
    height: 360px;
  }

  .upgrade-card {
    width: 300px;
    height: 360px;
  }
</style>
