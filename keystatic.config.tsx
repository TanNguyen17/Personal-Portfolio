import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'content/projects/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        introduction: fields.text({ label: 'Introduction', multiline: true }),
        imagePath: fields.image({
          label: 'Primary Image',
          directory: 'public/projects',
          publicPath: '/projects',
        }),
        images: fields.array(
          fields.image({ label: 'Image', directory: 'public/projects', publicPath: '/projects' }),
          { label: 'Gallery Images', itemLabel: props => "Gallery Image" }
        ),
        accessLink: fields.text({ label: 'Access Link' }),
        techStack: fields.array(fields.text({ label: 'Tech' }), { label: 'Tech Stack', itemLabel: props => props.value }),
        activities: fields.array(fields.text({ label: 'Activity' }), { label: 'Activities', itemLabel: props => props.value }),
        metricValue: fields.text({ label: 'Metric Value (optional, e.g., 95% or Top 28)' }),
        metricLabel: fields.text({ label: 'Metric Label (optional, e.g., Lighthouse Score)' }),
        problemSolved: fields.text({ label: 'Problem & Solution (optional)', multiline: true }),
      },
    }),
    experiences: collection({
      label: 'Experiences',
      slugField: 'name',
      path: 'content/experiences/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        position: fields.text({ label: 'Position' }),
        place: fields.text({ label: 'Place' }),
        accessLink: fields.url({ label: 'Access Link' }),
        time: fields.text({ label: 'Time (e.g., 3/2024 - Present)' }),
        activities: fields.array(fields.text({ label: 'Activity' }), { label: 'Activities', itemLabel: props => props.value }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Work', value: 'work' },
            { label: 'Education', value: 'education' },
            { label: 'Club', value: 'club' },
            { label: 'Project / Initiative', value: 'project' }
          ],
          defaultValue: 'work'
        }),
        order: fields.integer({ label: 'Sort Order (optional, lower is older)' }),
      },
    }),
  },
});
