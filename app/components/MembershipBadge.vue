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
}

.membership-badge__icon {
  background-color: white;
  border: 2px solid #FF5800;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-bottom: -16px;
}

.membership-badge__icon-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.membership-badge__content {
  background-color: white;
  border: 2px solid #FF5800;
  border-radius: 12px;
  padding: 24px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.membership-badge__count {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FF5800;
  line-height: 1;
  margin-bottom: 4px;
}

.membership-badge__label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
  text-transform: lowercase;
}
</style>
