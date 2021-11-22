<template>
<table class="table border">
  <tbody>
    <tr v-for="gameNum in 20" :key=gameNum class="border">
      <th scope="row">{{ gameNum }}</th>
      <td class="border">
         <select class="form-select">
             <option v-for="option in gameTypes" :key="option.name">
                 {{option.name}}
             </option>
         </select>
      </td>
    </tr>       
  </tbody>
</table>
</template>

<script>
export default {
  name: 'BingoGameSelection',
  components: {
  },
  data: () => {
    return {
    };
  },
  computed: {
      gameTypes: {get() {return this.$store.state.gameListing; } },
  },
  mounted() {
  },
  methods: {
    displayText(letter, number) {
        if(letter === 'B') { return number; }
        if(letter === 'I') { return number + 15; }
        if(letter === 'N') { return number + 30; }
        if(letter === 'G') { return number + 45; }
        if(letter === 'O') { return number + 60; }
        return number;
    }
  },
};
</script>