<template>
<table class="table border">
  <tbody>
    <tr v-for="letter in ['B', 'I', 'N', 'G', 'O']" :key=letter class="border">
      <th scope="row">{{ letter }}</th>
      <td v-for="num in 15" :key="num" class="border">
          {{ displayText(letter, num) }}
      </td>
    </tr>       
  </tbody>
</table>
</template>

<script>
export default {
  name: 'BingoHistoryGrid',
  components: {
  },
  data: () => {
    return {
    };
  },
  computed: {
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