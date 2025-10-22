import type { Project } from '~/types/project'

export const useProjects = () => {
  const projects = ref<Project[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // Mock data for now - replace with actual API call later
  const fetchProjects = async () => {
    loading.value = true
    error.value = null

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 500))

      projects.value = [
        {
          id: '1',
          title: 'Sample Project 1',
          description: 'This is a sample project description',
          imageUrl: 'https://via.placeholder.com/300x200',
          tags: ['Vue', 'TypeScript', 'Nuxt'],
          author: {
            name: 'John Doe',
            avatar: 'https://via.placeholder.com/40'
          },
          status: 'published',
          createdAt: new Date('2024-01-15'),
          updatedAt: new Date('2024-01-20')
        },
        {
          id: '2',
          title: 'Sample Project 2',
          description: 'Another interesting project',
          imageUrl: 'https://via.placeholder.com/300x200',
          tags: ['JavaScript', 'Web Development'],
          author: {
            name: 'Jane Smith',
            avatar: 'https://via.placeholder.com/40'
          },
          status: 'published',
          createdAt: new Date('2024-02-10'),
          updatedAt: new Date('2024-02-15')
        }
      ]
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  const getProjectById = (id: string) => {
    return projects.value.find(project => project.id === id)
  }

  return {
    projects: readonly(projects),
    loading: readonly(loading),
    error: readonly(error),
    fetchProjects,
    getProjectById
  }
}
