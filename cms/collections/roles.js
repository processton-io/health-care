import { ID } from '../fields';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'role',
  label: 'Structure Roles',
  label_singular: 'Structure Role',
  extension: "json",
  format: "json",
  description: 'Schema Role',
  folder: 'content/schema/role',
  editor: {
    preview: false,
  },
  create: true,
  fields: [
    {
      label: 'Role Name',
      name: 'name',
      required: true,
      widget: 'string',
    },
    {
      label: 'Role Group',
      name: 'group',
      required: true,
      widget: 'select',
      options: ['admin','employee','customer']
    },
    PermalinkField('schema/objects'),
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
      default: 'role',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'role-template-builder',
    },
    
  ],
};

export default collection;
