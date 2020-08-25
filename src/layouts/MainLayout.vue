<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
          <q-toolbar-title>X-Wing companion</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-card>
            <q-card-section>
              <div class="text-h6">Load your squadron</div>
            </q-card-section>
            <q-card-section>
              Enter your squadron id: <br>
              <q-input v-model="id" label="Id" /><br>
              <q-select
                v-model="language"
                :options="languages"
                label="Language"
                emit-value
              /><br>
              <q-btn
                @click="getSquadron({id, language})"
                color="primary"
                icon-right="send"
                label="Load squad"
              />
            </q-card-section>
          </q-card>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="container-scroll">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainLayout',
  components: { },
  methods: {
    ...mapActions({
      getSquadron: 'currentSquadron/getSquadron',
      getMetadata: 'metadata/getMetadata',
    }),
  },
  computed: {
    ...mapGetters({
      languages: 'metadata/getLanguages',
    }),
  },
  data() {
    return {
      id: '',
      language: 'en',
      leftDrawerOpen: false,
    };
  },
  mounted() {
    this.getMetadata();
  },
};
</script>

<style lang="scss">
  .container-scroll {
    overflow: hidden;
  }
</style>
