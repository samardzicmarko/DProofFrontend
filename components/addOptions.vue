<template>
  <div class="container">
    <v-card>
      <b-input-group label="Unesite ponuđene odgovore">
        <b-form-input v-model="new_option" type="text" @keyup.enter="addOption()"></b-form-input>
      </b-input-group>
      <b-list-group>
        <div class="view" v-if="!editActive">
          <b-list-group-item
            v-for="(option, index) in items.options"
            :key="index"
            class="list-group-item"
          >{{ option }}</b-list-group-item>
        </div>
      </b-list-group>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editActive: false,
      new_option: '',
      items: {
        options: []
      }
    }
  },
  methods: {
    addOption() {
      this.items.options.push(new_option)
      new_option = ''
    }
  }
}
</script>

<style></style>
