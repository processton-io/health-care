import { ID } from '../fields';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'object',
  label: 'Structure Objects',
  label_singular: 'Structure Object',
  extension: "json",
  format: "json",
  description: 'Schema Objects',
  folder: 'content/schema/objects',
  editor: {
    preview: false,
  },
  create: true,
  fields: [
    {
      label: 'Name',
      name: 'name',
      required: true,
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'key',
      required: true,
      widget: 'string',  
    },
    PermalinkField('schema/objects'),
    {
      label: 'Elements',
      name: 'elements',
      widget: 'list',
      types: [
        {
          label: 'Input',
          name: 'input',
          widget: 'object',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: false,
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
              required: true,
            },
            {
              label: 'Input Type',
              name: 'input_type',
              widget: 'select',
              default: 'text',
              options: ['text', 'email', 'tel', 'hidden', 'time'],
            },
            {
              label: 'Autocomplete',
              name: 'autocomplete',
              widget: 'select',
              default: 'on',
              options: [
                'on',
                'off',
                'name',
                'tel',
                'email',
                'organization',
              ],
            },
            {
              label: 'Placeholder',
              name: 'placeholder',
              widget: 'string',
              required: false,
            },
            {
              label: 'Value',
              name: 'value',
              widget: 'string',
              required: false,
            },
            {
              label: 'Required',
              name: 'required',
              widget: 'boolean',
              default: false,
              required: false,
            },
          ],
        },
        {
          label: 'Textarea',
          name: 'textarea',
          widget: 'object',
          summary: '{{label}}',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: false,
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
              required: true,
            },
            {
              label: 'Placeholder',
              name: 'placeholder',
              widget: 'string',
              required: false,
            },
            {
              label: 'Required',
              name: 'required',
              widget: 'boolean',
              default: false,
              required: false,
            },
          ],
        },
        {
          label: 'Checkbox',
          name: 'checkbox',
          widget: 'object',
          summary: '{{nam}}',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: false,
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
              required: true,
            },
            {
              label: 'Required',
              name: 'required',
              widget: 'boolean',
              default: false,
              required: false,
            },
          ],
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'object',
          fields: [
            {
              label: 'Content',
              name: 'content',
              widget: 'markdown',
              required: false,
            },
          ],
        }
      ],
    },
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
      default: 'object',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'object-template-builder',
    },
    
  ],
};

export default collection;
