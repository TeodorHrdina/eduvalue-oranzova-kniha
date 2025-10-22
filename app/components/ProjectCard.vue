<template>
  <div class="project-card">
    <!-- Row 1: Info Region + Image -->
    <div class="row row--first">
      <div class="info-region">
        <h3 class="info-region__title">{{ project.title }}</h3>
        <div class="info-region__item">
          <span class="info-region__label">Established:</span>
          <span class="info-region__value">{{ formatDate(project.establishmentDate) }}</span>
        </div>
        <div class="info-region__item">
          <span class="info-region__label">Members:</span>
          <span class="info-region__value">{{ project.memberCount }}</span>
        </div>
        <div class="info-region__item">
          <span class="info-region__label">Active Regions:</span>
          <span class="info-region__value">{{ project.activeRegions.length }}</span>
        </div>
        <div class="info-region__regions">
          <span
            v-for="region in project.activeRegions"
            :key="region"
            class="info-region__region-tag"
          >
            {{ region }}
          </span>
        </div>
      </div>

      <div class="image-island">
        <img :src="project.imageUrl" :alt="project.title" />
      </div>
    </div>

    <!-- Row 2: Description Box -->
    <div class="row row--second">
      <div class="description-box">
        <h4 class="description-box__title">About the Project</h4>
        <p class="description-box__text">{{ project.description }}</p>
      </div>
    </div>

    <!-- Row 3: Chief Section + Info Quips -->
    <div class="row row--third">
      <div class="chief-section">
        <img :src="project.chiefImage" :alt="project.chiefName" class="chief-section__image" />
        <blockquote class="chief-section__quote">
          "{{ project.chiefQuote }}"
        </blockquote>
        <p class="chief-section__name">— {{ project.chiefName }}</p>
      </div>

      <div class="info-quips">
        <div class="info-quip">
          <h5 class="info-quip__title">Primary Target Group</h5>
          <p class="info-quip__text">{{ project.primaryTargetGroup }}</p>
        </div>
        <div class="info-quip">
          <h5 class="info-quip__title">Theme</h5>
          <p class="info-quip__text">{{ project.theme }}</p>
        </div>
        <div class="info-quip">
          <h5 class="info-quip__title">Human Resources</h5>
          <p class="info-quip__text">{{ project.humanResources }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types/project'

interface Props {
  project: Project
}

const props = defineProps<Props>()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Row 1: Info Region + Image */
.row--first {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.info-region {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-region__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.info-region__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-region__label {
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
}

.info-region__value {
  font-size: 0.875rem;
  color: #1a1a1a;
  font-weight: 600;
}

.info-region__regions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.info-region__region-tag {
  padding: 0.25rem 0.75rem;
  background-color: #FF5800;
  color: white;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
}

.image-island {
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
}

.image-island img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Row 2: Description Box */
.row--second {
  width: 100%;
}

.description-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.25rem;
}

.description-box__title {
  margin: 0 0 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.description-box__text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
}

/* Row 3: Chief Section + Info Quips */
.row--third {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.chief-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chief-section__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.chief-section__quote {
  margin: 0;
  font-size: 0.9375rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.5;
}

.chief-section__name {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
}

.info-quips {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-quip {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #FF5800;
}

.info-quip__title {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #FF5800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-quip__text {
  margin: 0;
  font-size: 0.875rem;
  color: #4a5568;
  line-height: 1.5;
}
</style>
