<template>
  <button class="Tag">{{ "#" + label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
};
</script>