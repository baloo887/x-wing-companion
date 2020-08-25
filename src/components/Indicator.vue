<template>
    <q-knob
      :min="data.min"
      :max="parseInt(data.max)"
      v-model="value"
      show-value
      size="50px"
      :thickness="0.22"
      color="primary"
      track-color="grey-3"
      class="q-ma-md"
      v-bind:id="id+'_'+data.id"
    >
      <q-img
        class="statistics-image"
        :src="statData(data.id)[0].icon"
      >
        <div class="absolute-center statistic-value">
          {{ value }}
        </div>
      </q-img>
    </q-knob>
</template>

<script>
import { mapGetters } from 'vuex';
import { colors } from 'quasar';

export default {
  name: 'indicator',
  props: {
    data: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      value: parseInt(this.data.max, 10),
    };
  },
  computed: {
    ...mapGetters({
      statData: 'metadata/getStatistic',
    }),
  },
  mounted() {
    console.log(this.data);
    console.log(this.statData(this.data.id));
    colors
      .setBrand('primary', this.statData(this.data.id)[0].color, document
        .getElementById(`${this.id}_${this.data.id}`));
  },
};
</script>

<style lang="scss">
  .statistic-value {
    padding: 20% !important;
    border-radius: 25px;
    width: 25px;
    height: 25px;
  }

  .statistics-image {
    width: 50px !important;
    height: 50px !important;
  }
</style>
