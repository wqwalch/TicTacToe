<template>
    <div class="">
        <div class="row bg-success text-center">
            {{lastBall}}
        </div>
        <div class="row bg-success text-center">
            Last Ball
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