import { ID } from '../fields';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'permissions',
  label: 'Structure Permissions',
  label_singular: 'Structure Permission',
  extension: "json",
  format: "json",
  description: 'Structure Permissions for your schema',
  folder: 'content/schema/permissions',
  editor: {
    preview: false,
  },
  create: true,
  fields: [
    {
      label: 'Object',
      name: 'group',
      widget: 'relation',
      collection: "object",
      search_fields: ["name", "key"],
      value_field: "key",
      display_fields: ["name"],
      required: true
    },
    {
      label: 'Sub Group',
      name: 'sub_group',
      widget: 'select',
      required: true,
      options: [
        'Creator', 'Manager', 'Admin'
      ]
    },
    {
      label: 'Name',
      name: 'name',
      required: true,
      widget: 'string',
    },
    {
      label: 'Key',
      name: 'key',
      required: true,
      widget: 'string',  
    },
    PermalinkField('schema/permissions'),
    {
      label: 'content',
      name: 'content',
      widget: 'markdown',
      required: false,
    },
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'permission',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'permission-template-builder',
    },
    
  ],
};

export default collection;
