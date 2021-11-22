<template>
    <div>
        <div class="">
            Game Number: {{GameNumber}}
        </div>
        <div class="font-weight-bold">
            {{ GameType }}
        </div>
        <div>
            <TemplateBoard />
        </div>
        <div class="row"> 
            <button>
                Next Game
            </button>           
        </div>
    </div>
</template>

<script>
export default {
  name: 'GridTemplate',
  components: {
  },
  data: () => {
    return {
        GameNumber: 11,
        GameType: 'Regular Bingo',
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>