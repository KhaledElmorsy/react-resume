const templates = {};

templates.education = {
  University: { default: '', type: 'text' },
  Major: { default: '', type: 'text' },
  Minor: { default: '', type: 'text' },
  Grade: { default: '', type: 'text'},
  'Start Date': { default: '', type: 'date' },
  'End Date': { default: '', type: 'date' },
  list: { default: [] },
};

templates.experience = {
  Company: { default: '', type: 'text' },
  Position: { default: '', type: 'text' },
  Location: { default: '', type: 'text' },
  'Start Date': { default: '', type: 'date' },
  'End Date': { default: '', type: 'date' },
  list: { default: [] },
};

templates.bullet = { bullet: { default: '' } };

export default templates
