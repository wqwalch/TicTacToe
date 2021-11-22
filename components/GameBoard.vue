<template>
    <div class="container">
        GameBoard.vue
        <div class="row"> 
            <div class="col">
                <LastBall />
            </div>
            <div class="col">
                <CurrentBall />
            </div>
            <div class="col">
                <GameTemplate />
            </div>
        </div>
        <div class="row">
            <div class="col"> 
                Call/Reset/Operations
            </div>
            <div class="col">
                <BingoHistoryGrid />
            </div>
        </div>
        <div class="row">
            <BingoGameSelection />
        </div>
    </div>
</template>

<script>
export default {
  name: 'GameBoard',
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
    getData(typeValue) {
      return 5;
    },
  },

};
</script>