<template>
  <q-card flat>
      <q-img
      :src="cardImage"
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
    <q-btn
      v-if="isDouble"
      unelevated round color="primary"
      v-bind:icon="activeIcon"
      class="absolute-top right flip-button"
      @click="flip()"
      size="20px"
    />
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex';
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
  data() {
    return {
      cardImage: null,
      activeSide: null,
      otherSide: null,
      isDouble: false,
      activeIcon: 'flip_to_back',
      otherIcon: 'flip_to_front',
    };
  },
  mounted() {
    const double = this.doubleCardData(this.cardInfo.id);
    if (double) {
      this.isDouble = true;
      this.activeSide = double.sideA.id === this.cardInfo.id
        ? double.sideA.image : double.sideB.image;
      this.otherSide = double.sideA.id === this.cardInfo.id
        ? double.sideB.image : double.sideA.image;
      this.cardImage = this.activeSide;
    } else {
      this.cardImage = this.cardInfo.card_image;
    }
  },
  computed: {
    ...mapGetters({
      doubleCardData: 'metadata/getDoubleCardData',
    }),
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
  methods: {
    flip: function f() {
      const icon = this.activeIcon;

      if (this.activeSide === this.cardImage) {
        this.cardImage = this.otherSide;
      } else {
        this.cardImage = this.activeSide;
      }

      this.activeIcon = this.otherIcon;
      this.otherIcon = icon;
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

  .flip-button {
    margin: 10px 10px;
  }
</style>
