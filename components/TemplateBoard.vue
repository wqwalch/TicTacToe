<template>
    <div class="border border-dark square">
       <div v-for="r in 5" :key="r" class="row square">
           <div v-for="c in 5" :key="c" class="col square">
               {{(c - 1) + ((r-1) * 5)}}
           </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'LastBall',
  components: {
  },
  data: () => {
    return {
        lastBall: 'I24',
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