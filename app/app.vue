<template>
  <div>
    <NuxtRouteAnnouncer />
    <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
      <h1 style="margin-bottom: 2rem;">Project Cards Demo</h1>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
        <ProjectCard :project="sampleProject" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from './types/project'

const sampleProject: Project = {
  id: '1',
  title: 'Slovak Schools Network Initiative',
  establishmentDate: new Date('2020-09-15'),
  memberCount: 45,
  activeRegions: ['Bratislavský kraj', 'Banskobystrický kraj', 'Košický kraj'],
  imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  description: 'A comprehensive educational network connecting schools across Slovakia to promote collaborative learning, share best practices, and enhance educational outcomes. The initiative focuses on digital transformation, teacher training, and student exchange programs. Through our platform, schools can collaborate on joint projects, share resources, and participate in nationwide educational events.',
  chiefImage: 'https://i.pravatar.cc/400?img=12',
  chiefQuote: 'Education is the foundation of our future. By connecting schools across regions, we create opportunities for innovation and excellence that benefit all students.',
  chiefName: 'Dr. Mária Kováčová',
  primaryTargetGroup: 'Primary and secondary schools, teachers, and educational administrators across Slovakia',
  theme: 'Digital Transformation in Education, Collaborative Learning, Teacher Professional Development',
  humanResources: '15 full-time coordinators, 8 regional managers, 120+ volunteer educators, and partnership with 45 member schools'
}
</script>
