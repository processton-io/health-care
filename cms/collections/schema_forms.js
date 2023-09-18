import { ID } from '../fields';

const collection = {
  name: 'schema_forms',
  label: 'Structure Schema Forms',
  label_singular: 'Schema Form',
  extension: "json",
  format: "json",
  description: 'Schema Form',
  folder: 'content/schema/forms',
  editor: {
    preview: false,
  },
  create: true,
  fields: [
    {
      label: 'Name',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Slug',
      name: 'slug',
      required: true,
      widget: 'string',  
    },
    {
      label: 'Object',
      name: 'object',
      widget: 'relation',
      collection: "object",
      search_fields: ["name", "key"],
      value_field: "key",
      display_fields: ["name"],
      required: true
    },
    {
      label: 'Rows',
      name: 'rows',
      widget: 'list',
      fields: [
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
      ],
    },
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'form',
    },
  ],
};

export default collection;
