<template>
  <div class="membership-badge">
    <div class="membership-badge__icon">
      <img src="/icons/MembersIcon.svg" alt="Members" class="membership-badge__icon-img" />
    </div>
    <div class="membership-badge__content">
      <div class="membership-badge__count">{{ formattedCount }}</div>
      <div class="membership-badge__label">členov</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  memberCount: number
}

const props = defineProps<Props>()

const formattedCount = computed(() => {
  const roundedDown = Math.floor(props.memberCount / 10) * 10
  return `${roundedDown}+`
})
</script>

<style scoped>
.membership-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 0.1rem;
}

.membership-badge__icon {
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 35px;
  margin-bottom: -18px;
}

.membership-badge__icon-img {
  width: 35px;
  margin-bottom: 16px;
  height: auto;
  object-fit: contain;
}

.membership-badge__content {
  background-color: #FF5800;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  box-shadow: 0 4px 8px rgba(255, 88, 0, 0.2);
}

.membership-badge__count {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  line-height: 1;
  margin-bottom: 4px;
}

.membership-badge__label {
  font-size: 0.75rem;
  font-weight: medium;
  color: white;
  text-transform: lowercase;
}
</style>
